const API_URL = import.meta.env.VITE_API_URL;

export function getSpecialitiesUrl(filters) {
  const params = new URLSearchParams(filters);
  return filters?.filiere_bac
    ? `${API_URL}/api/specialities?${params.toString()}`
    : null;
}