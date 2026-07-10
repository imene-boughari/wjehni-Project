import { useEffect, useRef, useState } from "react";
import { PinIcon, SlidersIcon, ChevronDownIcon } from "../icons";

const ICONS = {
  pin: PinIcon,
  sliders: SlidersIcon,
};

// Dropdown a selection multiple, reutilise pour le filtre "Wilaya" et le
// filtre "Domaine". `items` = [{ value, label }], `selected` = [value, ...].
export default function MultiSelectDropdown({
  label,
  items,
  selected,
  onChange,
  icon,
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  const Icon = ICONS[icon];

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredItems = items.filter((it) =>
    it.label.toLowerCase().includes(search.toLowerCase())
  );

  function toggle(value) {
    onChange(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value]
    );
  }

  return (
    <div className="filter-dropdown" ref={ref}>
      <button
        type="button"
        className={`filter-dropdown__trigger ${open ? "is-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
      >
        {Icon && <Icon className="filter-dropdown__icon" />}
        <span>{label}</span>
        <span className="filter-dropdown__count">
          {selected.length > 0 ? selected.length : items.length}
        </span>
        <ChevronDownIcon className="filter-dropdown__chevron" />
      </button>

      {open && (
        <div className="filter-dropdown__panel filter-dropdown__panel--list">
          <input
            type="text"
            className="filter-dropdown__search"
            placeholder="بحث..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="filter-dropdown__options">
            {filteredItems.map((item) => (
              <label key={item.value} className="filter-dropdown__checkbox">
                <input
                  type="checkbox"
                  checked={selected.includes(item.value)}
                  onChange={() => toggle(item.value)}
                />
                <span>{item.label}</span>
              </label>
            ))}

            {filteredItems.length === 0 && (
              <p className="filter-dropdown__empty">لا توجد نتائج</p>
            )}
          </div>

          {selected.length > 0 && (
            <button
              type="button"
              className="filter-dropdown__clear"
              onClick={() => onChange([])}
            >
              مسح التحديد ({selected.length})
            </button>
          )}
        </div>
      )}
    </div>
  );
}