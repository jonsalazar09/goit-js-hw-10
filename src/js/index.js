import { fetchCatByBreed } from './cat-api';
import { renderBreedDesc } from './renderBreedDesc';
import { fetchAndRenderBreeds } from './fetchAndRenderBreeds';

import Notiflix from 'notiflix';


const breedSelect = document.querySelector('.breed-select');
const divPictEl = document.querySelector('.cat-info-pict');
const divDescEl = document.querySelector('.cat-info-desc');
const loaderEl = document.querySelector('.loader');

breedSelect.addEventListener('change', onChangeSelect);


fetchAndRenderBreeds();


function onChangeSelect(event) {
  loaderEl.classList.remove('hidden');
  divPictEl.innerHTML = '';
  divDescEl.innerHTML = '';
  const breedId = event.target.value;
  console.log('breedId: ', breedId);
  fetchCatByBreed(breedId)
    .then(breed => renderBreedDesc(breed))
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => loaderEl.classList.add('hidden'));
}



export { breedSelect, divPictEl, divDescEl, loaderEl };