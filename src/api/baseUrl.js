const getQueryStringParameterByName = (name, url = window.location.href) => {
  const newName = name.replace(/[[\]]/g, '\\$&');

  const regex = new RegExp(`[?&]${newName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://starter-1975.herokuapp.com/';
}
