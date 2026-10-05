import { useCallback, useEffect, useRef, useState } from "react";
import { createLofiEngine } from "../lib/lofiEngine";

const STORAGE_KEY = "portifolio:lofi";
const DEFAULT_VOLUME = 0.4;
const GESTURES = ["pointerdown", "touchstart", "keydown"];

const clamp = (value) => Math.min(1, Math.max(0, value));

function readStored() {
  const fallback = { volume: DEFAULT_VOLUME, muted: false };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return {
      volume: typeof parsed.volume === "number" ? clamp(parsed.volume) : DEFAULT_VOLUME,
      muted: Boolean(parsed.muted)
    };
  } catch {
    return fallback;
  }
}

export function useAmbientLofi() {
  const [{ volume, muted }, setPrefs] = useState(readStored);
  const [started, setStarted] = useState(false);

  const engineRef = useRef(null);
  const prefsRef = useRef({ volume: DEFAULT_VOLUME, muted: false });

  useEffect(() => {
    prefsRef.current = { volume, muted };
  }, [volume, muted]);

  useEffect(() => {
    let cancelled = false;

    const onGesture = () => {
      if (cancelled || engineRef.current) return;
      try {
        const engine = createLofiEngine();
        engineRef.current = engine;
        const { volume, muted } = prefsRef.current;
        engine.start(muted ? 0 : volume);
        if (!cancelled) setStarted(true);
      } catch (error) {
        console.warn("[lofi] nao foi possivel iniciar o audio ambiente:", error);
      }
    };

    for (const event of GESTURES) {
      document.addEventListener(event, onGesture, { once: true, passive: true });
    }

    return () => {
      cancelled = true;
      for (const event of GESTURES) document.removeEventListener(event, onGesture);
      engineRef.current?.destroy();
      engineRef.current = null;
    };
  }, []);

  useEffect(() => {
    engineRef.current?.setVolume(muted ? 0 : volume);
  }, [volume, muted, started]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ volume, muted }));
    } catch {
      /* storage indisponivel */
    }
  }, [volume, muted]);

  useEffect(() => {
    const onVisibility = () => {
      const engine = engineRef.current;
      if (!engine) return;
      if (document.hidden) engine.suspend();
      else if (!prefsRef.current.muted) engine.resume();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const setVolume = useCallback((value) => {
    const next = clamp(value);
    setPrefs((prev) => ({ volume: next, muted: next > 0 ? false : prev.muted }));
  }, []);

  const toggleMuted = useCallback(() => {
    setPrefs((prev) => ({ ...prev, muted: !prev.muted }));
  }, []);

  return { volume, muted, started, setVolume, toggleMuted };
}
