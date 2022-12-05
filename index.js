const NatoursApiClient = require('./discover/client/NatoursApiClient');

const natoursApiClient = new NatoursApiClient({});

natoursApiClient
  .getTour({ tourId: '5c88fa8cf4afda39709c2955' })
  .then(function (response) {
    console.log(`Response: ${response}`);
  })
  .catch(function (err) {
    console.log(`Error: ${err}`);
  });
