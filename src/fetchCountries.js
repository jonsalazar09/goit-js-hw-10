const BASE_URL = `https://restcountries.com/v3.1`;
const END_POINT_COUNTRY = `/name/`;
const params = 'fields=name,capital,population,flags,languages';

function fetchCountries(name) {
  return fetch(`${BASE_URL}${END_POINT_COUNTRY}${name}?${params}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    }
  );
}

export { fetchCountries };