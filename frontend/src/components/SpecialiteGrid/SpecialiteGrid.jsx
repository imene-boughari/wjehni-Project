import SpecialiteCard from "../SpecialiteCard/SpecialiteCard";
import "./SpecialiteGrid.css";

export default function SpecialiteGrid({ filieres }) {
  if (!filieres.length) {
    return (
      <p className="specialite-grid__empty">
        لا توجد نتائج مطابقة لبحثك، حاول تعديل الفلاتر.
      </p>
    );
  }

  return (
    <div className="specialite-grid">
      {filieres.map((filiere) => (
        <SpecialiteCard key={filiere.id} filiere={filiere} />
      ))}
    </div>
  );
}