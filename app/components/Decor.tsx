export function Sparkle({ className = "", size = 22 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#2b2b2b" aria-hidden="true">
      <path d="M12 0C12.6 6.5 17.5 11.4 24 12c-6.5.6-11.4 5.5-12 12-.6-6.5-5.5-11.4-12-12C6.5 11.4 11.4 6.5 12 0z" />
    </svg>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-pink-soft px-5 py-1 font-serif text-[20px] italic text-coral">
      {children}
    </span>
  );
}

export function KnowMore({ className = "", label = "Know more" }: { className?: string; label?: string }) {
  return (
    <a href="#" className={`inline-flex items-center font-serif text-[18px] text-foreground ${className}`}>
      <span>{label}</span>
      <span className="ml-3 block h-px w-14 bg-coral" />
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-coral text-coral">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M1 5h8M5 1l4 4-4 4" />
        </svg>
      </span>
    </a>
  );
}

export function PalmLeaf({ className = "" }: { className?: string }) {
  const fronds = Array.from({ length: 14 }).map((_, i) => {
    const t = i / 13;
    const x = 150 - 130 * t;
    const y = 10 + 200 * t * t * 0.9 + 20 * t;
    const len = 28 + 10 * Math.sin(t * Math.PI);
    return { x, y, len };
  });
  return (
    <svg className={className} viewBox="0 0 160 220" fill="none" stroke="#6aa76a" strokeWidth="1.4" aria-hidden="true">
      <path d="M150 10 C110 40 60 100 20 210" />
      {fronds.map((f, i) => (
        <g key={i}>
          <path d={`M${f.x} ${f.y} q ${-f.len * 0.9} ${-f.len * 0.3} ${-f.len} ${f.len * 0.1}`} />
          <path d={`M${f.x} ${f.y} q ${f.len * 0.3} ${f.len * 0.9} ${-f.len * 0.1} ${f.len}`} />
        </g>
      ))}
    </svg>
  );
}

export function Flower({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      {[0, 60, 120, 180, 240, 300].map((r) => (
        <ellipse key={r} cx="24" cy="12" rx="6" ry="11" fill="#f5a8b0" transform={`rotate(${r} 24 24)`} />
      ))}
      <circle cx="24" cy="24" r="5" fill="#f07167" />
    </svg>
  );
}
