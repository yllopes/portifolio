import { SpeakerHighIcon, SpeakerSlashIcon } from "@phosphor-icons/react";
import { useAmbientLofi } from "../../hooks/useAmbientLofi";

export default function AmbientSoundControl() {
  const { volume, muted, started, setVolume, toggleMuted } = useAmbientLofi();

  return (
    <div
      className="fixed bottom-4 right-4 z-30 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 backdrop-blur-md pl-3 pr-1.5 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
      title={started ? "Som ambiente do portifolio" : "Clique em qualquer lugar para ativar o som"}
    >
      {!started && (
        <span
          aria-hidden="true"
          className="w-1.5 h-1.5 rounded-full bg-spotify animate-pulse shrink-0"
        />
      )}

      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={Math.round(volume * 100)}
        onChange={(event) => setVolume(Number(event.target.value) / 100)}
        aria-label="Volume do som ambiente"
        aria-valuetext={`${Math.round(volume * 100)}%`}
        className="lofi-range w-16 sm:w-20"
      />

      <button
        type="button"
        onClick={toggleMuted}
        aria-label={muted ? "Ativar som ambiente" : "Silenciar som ambiente"}
        aria-pressed={muted}
        className="w-8 h-8 grid place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-spotify hover:border-spotify/50 hover:bg-spotify/10 transition-all duration-300 active:scale-90 shrink-0"
      >
        {muted ? (
          <SpeakerSlashIcon size={15} weight="fill" />
        ) : (
          <SpeakerHighIcon size={15} weight="fill" />
        )}
      </button>
    </div>
  );
}
