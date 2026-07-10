const STATS = ["WEJEHNI", "بيانات رسمية 2025", "69 ولاية", "النسخة الثالثة", "الجزائر"];

const renderItems = (groupKey) =>
  STATS.map((stat, index) => (
    <span className="stats-bar__item" key={`${groupKey}-${stat}`}>
      {stat}
      {index < STATS.length - 1 && (
        <span className="stats-bar__dot" aria-hidden="true">
          •
        </span>
      )}
    </span>
  ));

/**
 * Barre defilante (marquee) : le contenu est duplique deux fois a la suite,
 * puis on anime une translation de 0 a -50% -> boucle infinie et fluide,
 * le contenu sort par la gauche et rentre par la droite.
 */
const StatsBar = () => {
  return (
    <div className="stats-bar">
      <div className="stats-bar__track">
        <div className="stats-bar__group">{renderItems("a")}</div>
        <div className="stats-bar__group" aria-hidden="true">
          {renderItems("b")}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;