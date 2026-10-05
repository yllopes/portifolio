const CHORDS = [
  [110.0, 130.81, 164.81, 196.0],
  [87.31, 110.0, 130.81, 164.81],
  [130.81, 164.81, 196.0, 246.94],
  [98.0, 123.47, 146.83, 164.81]
];

const CHORD_SECONDS = 7;
const ATTACK = 2.5;
const RELEASE = 1.8;
const DETUNE = 4;
const VOICE_GAIN = 0.055;
const NOISE_GAIN = 0.012;
const CRACKLE_GAIN = 0.02;
const TONE_HZ = 1200;
const LFO_HZ = 0.06;
const LFO_DEPTH = 300;
const FADE_IN = 2.5;
const MAX_GAIN = 0.55;

function createNoiseBuffer(ctx, seconds) {
  const length = Math.floor(ctx.sampleRate * seconds);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
  return buffer;
}

function createCrackleBuffer(ctx, seconds) {
  const length = Math.floor(ctx.sampleRate * seconds);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  const clicks = Math.floor(seconds * 14);
  for (let i = 0; i < clicks; i++) {
    const start = Math.floor(Math.random() * (length - 200));
    const decay = 15 + Math.floor(Math.random() * 25);
    const amp = 0.4 + Math.random() * 0.6;
    for (let j = 0; j < decay; j++) {
      const env = Math.exp((-(j / decay) * 5));
      data[start + j] += (Math.random() * 2 - 1) * env * amp;
    }
  }
  return buffer;
}

function buildChord(ctx, dest, freqs, start, seconds, nodes) {
  for (const freq of freqs) {
    for (const cents of [-DETUNE, DETUNE]) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      osc.detune.value = cents;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(VOICE_GAIN, start + ATTACK);
      gain.gain.setValueAtTime(VOICE_GAIN, start + seconds - RELEASE);
      gain.gain.linearRampToValueAtTime(0, start + seconds);
      osc.connect(gain).connect(dest);
      osc.start(start);
      osc.stop(start + seconds + 0.05);
      nodes.push(osc, gain);
    }
  }
}

function loopSource(ctx, buffer, filterType, freq, level, dest) {
  const src = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  src.buffer = buffer;
  src.loop = true;
  filter.type = filterType;
  filter.frequency.value = freq;
  filter.Q.value = 0.7;
  gain.gain.value = level;
  src.connect(filter).connect(gain).connect(dest);
  src.start();
  return [src, filter, gain];
}

export function createLofiEngine() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  const ctx = new Ctx();

  const mixBus = ctx.createGain();
  const tone = ctx.createBiquadFilter();
  const comp = ctx.createDynamicsCompressor();
  const master = ctx.createGain();
  const lfo = ctx.createOscillator();
  const lfoDepth = ctx.createGain();

  const nodes = [];
  let timer = null;
  let chordIndex = 0;
  let target = 0;
  let destroyed = false;

  tone.type = "lowpass";
  tone.frequency.value = TONE_HZ;
  tone.Q.value = 0.9;

  comp.threshold.value = -24;
  comp.knee.value = 12;
  comp.ratio.value = 3;
  comp.attack.value = 0.05;
  comp.release.value = 0.4;

  master.gain.value = 0;

  lfo.type = "sine";
  lfo.frequency.value = LFO_HZ;
  lfoDepth.gain.value = LFO_DEPTH;
  lfo.connect(lfoDepth).connect(tone.frequency);
  lfo.start();

  mixBus.connect(tone).connect(comp).connect(master).connect(ctx.destination);
  nodes.push(mixBus, tone, comp, master, lfo, lfoDepth);

  nodes.push(...loopSource(ctx, createNoiseBuffer(ctx, 4), "bandpass", 1500, NOISE_GAIN, mixBus));
  nodes.push(...loopSource(ctx, createCrackleBuffer(ctx, 6), "highpass", 1200, CRACKLE_GAIN, mixBus));

  function schedule() {
    if (destroyed) return;
    buildChord(ctx, mixBus, CHORDS[chordIndex % CHORDS.length], ctx.currentTime + 0.05, CHORD_SECONDS, nodes);
    chordIndex++;
    timer = setTimeout(schedule, CHORD_SECONDS * 1000);
  }

  function ramp(value, time) {
    master.gain.cancelScheduledValues(time);
    master.gain.setTargetAtTime(value, time, 0.08);
  }

  return {
    async start(volume) {
      target = Math.min(1, Math.max(0, volume)) * MAX_GAIN;
      if (ctx.state === "suspended") await ctx.resume();
      const now = ctx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(0, now);
      master.gain.linearRampToValueAtTime(target, now + FADE_IN);
      schedule();
    },

    setVolume(volume) {
      target = Math.min(1, Math.max(0, volume)) * MAX_GAIN;
      if (destroyed) return;
      ramp(target, ctx.currentTime);
    },

    suspend() {
      if (!destroyed && ctx.state === "running") ctx.suspend();
    },

    resume() {
      if (!destroyed && ctx.state === "suspended") ctx.resume();
    },

    destroy() {
      if (destroyed) return;
      destroyed = true;
      if (timer) clearTimeout(timer);
      for (const node of nodes) {
        try {
          if (typeof node.stop === "function") node.stop();
        } catch {
          /* nó já parado */
        }
        try {
          node.disconnect();
        } catch {
          /* nó já desconectado */
        }
      }
      ctx.close().catch(() => {});
    }
  };
}
