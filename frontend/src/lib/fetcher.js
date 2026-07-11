export const fetcher = (url) =>
  fetch(url, {
    headers: {
      'Accept': 'application/json',
      'ngrok-skip-browser-warning': 'true',
    },
  }).then((res) => res.json());