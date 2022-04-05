const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
        <img class="country__img" src="${data.countryCode}" />
        <div class="country__data">
        <h3 class="country__name">${data.countryName}</h3>
        <h4 class="country__region">${data.continent}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  const resGeo = await fetch(
    // `https://restcountries.com/v2/${lat},${lng}?geoit=json`

    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}?geoit=json`
  );
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  const res = await fetch(
    // `https://restcountries.com/v2/name/${dataGeo.countryName}`
    `https://restcountries.eu/rest/v2/name/${dataGeo.countryName}`
  );
  // console.log(`RES: ${res}`);
  const data = await res.json();
  // console.log(`DATA: ${data}`);
  renderCountry(data[0]);
};

whereAmI();
