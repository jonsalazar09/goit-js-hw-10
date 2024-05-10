function createMarkupCountryList(arr) {
    return arr
      .map(
        ({ name: { official }, flags: { svg } }) =>
          `<li class="country-list-item">
          <img src="${svg}" alt="flag ${official}" width="30"/>
          <p>${official}</p>
        </li>`
      )
      .join('');
  }
  
  function createMarkupCountryInfo(arr) {
    return arr
      .map(
        ({
          name: { official },
          capital,
          population,
          flags: { svg },
          languages,
        }) =>
          `<div class="country-name-wrap">
        <img class="country-img" src="${svg}" alt="flag ${official}" width="30" />
        <h2>${official}</h2>
      </div>
      <p ><span class="country-capital">Capital: </span>${capital}</p>
      <p><span class="country-population">Population: </span>${population}</p>
      <p>
        <span class="country-languages">Languages: </span>${Object.values(
          languages
        ).join(', ')}
      </p>`
      )
      .join('');
  }
  
  export { createMarkupCountryList, createMarkupCountryInfo };