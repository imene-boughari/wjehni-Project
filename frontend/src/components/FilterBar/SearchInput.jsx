import { SearchIcon } from "../icons";

export default function SearchInput({
  value,
  onChange,
  placeholder = "ابحث عن تخصص أو مؤسسة...",
}) {
  return (
    <div className="search-input">
      <SearchIcon className="search-input__icon" />
      <input
        type="text"
        className="search-input__field"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}