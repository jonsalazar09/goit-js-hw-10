import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import {
  createMarkupCountryInfo,
  createMarkupCountryList,
} from './createMarkup';

const searchField = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

searchField.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  const countryName = evt.target.value.trim();

  if (!countryName) {
    clearMarkup();

    return;
  }

  fetchCountries(countryName)
    .then(data => {
      if (data.length > 10) {
        clearMarkup();

        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (data.length === 1) {
        clearMarkup();

        countryInfo.innerHTML = createMarkupCountryInfo(data);
      } else {
        clearMarkup();

        countryList.innerHTML = createMarkupCountryList(data);
      }
    })
    .catch(() => {
      clearMarkup();

      Notify.failure('Oops, there is no country with that name');
    });
}

function clearMarkup() {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}