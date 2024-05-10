const url1 = 'https://api.thecatapi.com/v1/breeds';
const url2 = 'https://api.thecatapi.com/v1/images';

//Unique access key to the Cat API
const KEY =
  'live_1uxUIuvtjxx3ir670VhmcXVlTXHSVOrUYZEQRP95tkQr6kVIKVHWtirkAnPKAcTD';


const fetchBreeds = () => {
  return fetch(`${url1}?api_key=${KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// The fetchBreeds function performs a request to TheCatAPI for a list of cat breeds.
// It uses fetch to make an HTTP request to the URL `${url1}?api_key=${KEY}`,
// where `${url1}` is the base API address for retrieving the list of breeds, and `${KEY}` is the API access key.
// If the server response does not have a status of 200 (OK), the function throws an error with the response status.
// If the response is successful, the function returns the result in JSON format.


const fetchCatByBreed = breedId => {
  return fetch(`${url2}/${breedId}?api_key=${KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// The fetchCatByBreed function takes a parameter breedId, which specifies the identifier of a specific cat breed.
// It performs a request to TheCatAPI for an image of a cat of the selected breed.
// It also uses fetch to make an HTTP request to the URL.

// Named export of functions

export { fetchBreeds, fetchCatByBreed };