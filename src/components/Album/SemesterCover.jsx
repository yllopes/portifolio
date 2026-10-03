export default function SemesterCover({ src, alt, imgClassName = "", boxClassName = "" }) {
  if (src) {
    return <img src={src} alt={alt} className={imgClassName} />;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-ink-3 to-black ${boxClassName}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-1/3 max-w-10 text-spotify/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 16l4.5-4.5 3.5 3.5 3-3L21 16" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8.5" cy="9" r="1.5" />
      </svg>

      <span className="text-[9px] uppercase tracking-widest text-spotify/50">sem capa</span>
    </div>
  );
}
