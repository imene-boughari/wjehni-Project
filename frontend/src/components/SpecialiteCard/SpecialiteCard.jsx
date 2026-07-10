import { BuildingIcon, PinIcon } from "../icons";
import "./SpecialiteCard.css";

export default function SpecialiteCard({ filiere }) {
  const {
    domainLabel,
    title,
    institutionName,
    wilayaName,
    year,
    minScore,
    // true pour les annexes universitaires dont le seuil n'est valable
    // que pour les candidats de cette wilaya (voir mockFilieres.js).
    isWilayaRestricted,
  } = filiere;

  return (
    <article className="specialite-card">
      <span className="specialite-card__badge">{domainLabel}</span>

      <h3 className="specialite-card__title">{title}</h3>

      <div className="specialite-card__row">
        <BuildingIcon className="specialite-card__icon" />
        <span>
          {institutionName}
          {isWilayaRestricted && (
            <span className="specialite-card__note">
              {" "}
              (هذا المعدل مخصص لتلاميذ ولاية {wilayaName.replace("ولاية ", "")})
            </span>
          )}
        </span>
      </div>

      <div className="specialite-card__row">
        <PinIcon className="specialite-card__icon" />
        <span>{wilayaName}</span>
      </div>

      <div className="specialite-card__footer">
        <span className="specialite-card__year">المعدل الأدنى {year}</span>
        <span className="specialite-card__score">{minScore}/20</span>
      </div>
    </article>
  );
}