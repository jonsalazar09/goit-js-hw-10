import { loaderEl, breedSelect } from './index';
import { fetchBreeds } from './cat-api';
import { renderBreedsSelect } from './renderBreedsSelect';


const fetchAndRenderBreeds = () => {
  loaderEl.classList.remove('hidden');
  fetchBreeds()
    .then(breeds => renderBreedsSelect(breeds))
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => {
      loaderEl.classList.add('hidden');
      breedSelect.classList.remove('hidden');
    });
};

// The fetchAndRenderBreeds function removes the 'hidden' class from the loaderEl element. 
// This is used to show the loading animation/progress indicator. It calls the fetchBreeds() function, 
// which makes a request to the API to get a list of cat breeds. After successfully receiving 
// the list of breeds, the renderBreedsSelect(breeds) function is called, passing the result of the request (list of breeds). 
// This function is responsible for visually displaying the list of breeds - creating a dropdown list. 
// If there is an error during the request or processing of the result, a catch block is executed, 
// which logs the error to the console and displays an error notification using the Notiflix.Notify.failure() library. 
// Regardless of the success or failure of the request, a finally block is executed, 
// where the 'hidden' class is applied to loaderEl again (hiding the loading animation) 
// and the 'hidden' class is removed from breedSelect, showing the interface elements related to selecting a cat breed.
// Therefore, this function makes a request to the API to get a list of cat breeds, shows the loading animation while fetching the data, 
// displays the received data in a visual interface element, and handles errors if they occur. After completing all operations, 
// it also hides the loading animation and shows the relevant interface elements.


export { fetchAndRenderBreeds };