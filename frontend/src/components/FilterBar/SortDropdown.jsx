import { useEffect, useRef, useState } from "react";
import { SortIcon, ChevronDownIcon } from "../icons";

export default function SortDropdown({ options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = options.find((o) => o.value === value) || options[0];

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="filter-dropdown" ref={ref}>
      <button
        type="button"
        className={`filter-dropdown__trigger ${open ? "is-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
      >
        <SortIcon className="filter-dropdown__icon" />
        <span>{current.label}</span>
        <ChevronDownIcon className="filter-dropdown__chevron" />
      </button>

      {open && (
        <div className="filter-dropdown__panel">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`filter-dropdown__option ${
                opt.value === value ? "is-selected" : ""
              }`}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}