import SearchInput from "./SearchInput";
import SortDropdown from "./SortDropdown";
import MultiSelectDropdown from "./MultiSelectDropdown";
import { WILAYAS } from "../../constants/wilayas";
import { DOMAIN_LIST } from "../../constants/domains";
import "./FilterBar.css";

const SORT_OPTIONS = [
  { value: "score_desc", label: "الأعلى معدلاً أولاً" },
  { value: "score_asc", label: "الأدنى معدلاً أولاً" },
];

const WILAYA_ITEMS = WILAYAS.map((w) => ({ value: w.code, label: w.name }));
const DOMAIN_ITEMS = DOMAIN_LIST.map((d) => ({ value: d.code, label: d.label }));

// filters shape: { query: string, sort: string, wilayas: string[], domains: string[] }
export default function FilterBar({ filters, onChange }) {
  const { query, sort, wilayas, domains } = filters;

  return (
    <div className="filter-bar">
      <SearchInput
        value={query}
        onChange={(value) => onChange({ ...filters, query: value })}
      />

      <div className="filter-bar__row">
        <SortDropdown
          options={SORT_OPTIONS}
          value={sort}
          onChange={(value) => onChange({ ...filters, sort: value })}
        />

        <MultiSelectDropdown
          label="كل الولايات"
          icon="pin"
          items={WILAYA_ITEMS}
          selected={wilayas}
          onChange={(value) => onChange({ ...filters, wilayas: value })}
        />

        <MultiSelectDropdown
          label="كل المجالات"
          icon="sliders"
          items={DOMAIN_ITEMS}
          selected={domains}
          onChange={(value) => onChange({ ...filters, domains: value })}
        />
      </div>
    </div>
  );
}