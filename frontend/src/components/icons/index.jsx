// Icones SVG inline (pas de dependance externe) utilisees sur la page
// d'affichage des specialites. Chaque icone accepte les props SVG standards
// (className, width, height...) pour rester flexible.

export function SearchIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M20 20l-4.3-4.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function SortIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M7 5v14M7 5l-3 3M7 5l3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 19V5M17 19l-3-3M17 19l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function SlidersIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 6h10M18 6h2M4 12h2M8 12h12M4 18h14M22 18h-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="16" cy="6" r="2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function ChevronDownIcon(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ResetIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 4v5h5M20 20v-5h-5M5.1 15A8 8 0 1 0 6 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BuildingIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 10h5a1 1 0 0 1 1 1v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 8h2M7 12h2M7 16h2M17 14h1M17 17h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CapIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 3 2 8l10 5 10-5-10-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 10.5v4.5c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M22 8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}