import { useMemo, useState } from "react";
import useSWR from "swr";
import Navbar from "../../components/Navbar/Navbar";
import FilterBar from "../../components/FilterBar/FilterBar";
import SpecialiteGrid from "../../components/SpecialiteGrid/SpecialiteGrid";
import { ResetIcon, CapIcon } from "../../components/icons";
import { fetcher } from "../../lib/fetcher";
import { getSpecialitiesUrl } from "../../hooks/useSpecialities";
import { buildApiFilters, mapSpecialityToFiliere, FILIERE_BAC_LABELS } from "../../data/subjectsConfig";
import jauneDoodle from "../../assets/images/Subtract-jaune.png";
import bleuDoodle from "../../assets/images/Rectangle-bleu.png";
import rougeDoodle from "../../assets/images/Rectangle.png";
import "./SpecialitesPage.css";

const INITIAL_FILTERS = {
  query: "",
  sort: "score_desc",
  wilayas: [],
  domains: [],
};

// onEditData: callback pour revenir à la sélection de filière.
// filiereKey / moyenneBac / notesEssentielles : réponses de l'utilisateur,
// transmises par App.jsx, servant à construire la requête API.
export default function SpecialitesPage({
  onEditData,
  filiereKey,
  moyenneBac,
  notesEssentielles,
}) {
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const filiereLabel = FILIERE_BAC_LABELS[filiereKey] ?? "";

  const apiFilters = buildApiFilters(filiereKey, moyenneBac, notesEssentielles);
  const { data, error, isLoading } = useSWR(
    getSpecialitiesUrl(apiFilters),
    fetcher
  );

  const filieres = useMemo(() => {
    if (!data) return [];
    return data.map(mapSpecialityToFiliere);
  }, [data]);

  const filteredFilieres = useMemo(() => {
    let result = [...filieres];

    if (filters.query.trim()) {
      const q = filters.query.trim().toLowerCase();
      result = result.filter(
        (f) =>
          f.title.toLowerCase().includes(q) ||
          f.institutionName.toLowerCase().includes(q)
      );
    }

    if (filters.wilayas.length) {
      result = result.filter((f) => filters.wilayas.includes(f.wilayaCode));
    }

    if (filters.domains.length) {
      result = result.filter((f) => filters.domains.includes(f.domainCode));
    }

    result.sort((a, b) =>
      filters.sort === "score_desc"
        ? b.minScore - a.minScore
        : a.minScore - b.minScore
    );

    return result;
  }, [filieres, filters]);

  return (
    <>
      <Navbar />

      <main className="specialites-page">
        <div className="specialites-page__card">
          <img
            src={jauneDoodle}
            alt=""
            className="specialites-page__page-curl"
          />

          <div className="specialites-page__header">
            <div className="specialites-page__heading">
              <h1>التخصصات المتاحة لك</h1>
              <p>
                بناءً على شعبة {filiereLabel}، ومعدلك الموزون التقريبي،
                ومعدلات القبول لسنة 2025، إليك التخصصات التي تناسبك. أخبرنا
                باهتماماتك! اختر مجالًا من الفلاتر أدناه لنعرض لك فقط
                التخصصات التي تندرج ضمن اهتماماتك من بين التخصصات المقترحة.
              </p>
            </div>

            <button
              type="button"
              className="specialites-page__reset-btn"
              onClick={onEditData}
            >
              <ResetIcon />
              تعديل معطياتي
            </button>
          </div>

          <FilterBar filters={filters} onChange={setFilters} />
        </div>

        <div className="specialites-page__grid-wrap">
          <img
            src={bleuDoodle}
            alt=""
            className="specialites-page__doodle specialites-page__doodle--blue"
          />
          {isLoading && <p>جارٍ التحميل...</p>}
          {error && <p>حدث خطأ أثناء تحميل البيانات</p>}
          {!isLoading && !error && (
            <SpecialiteGrid filieres={filteredFilieres} />
          )}
        </div>

        <footer className="specialites-page__footer">
          <img
            src={rougeDoodle}
            alt=""
            className="specialites-page__doodle specialites-page__doodle--red"
          />
          <CapIcon />
          منصة وجهني لتوجيه بكالوريا 2026
        </footer>
      </main>
    </>
  );
}