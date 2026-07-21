interface BrandMarkProps { compact?: boolean; inverse?: boolean }

export function BrandMark({ compact = false, inverse = false }: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${inverse ? 'text-white' : 'text-[#9c4f38]'}`} aria-label="Pratele">
      <svg aria-hidden="true" className="size-8 shrink-0" viewBox="0 0 32 32" fill="none">
        <path d="M5 8.5h22M7.5 15.75h19M5 23h22" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
        <path d="M8 6v19.5M24 6v19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".62" />
      </svg>
      {compact ? null : <span className="text-xl font-bold tracking-[-0.03em]">Pratele</span>}
    </span>
  );
}
