'use strict';

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
    // USD: United States dollar 
    // EUR: Euro 
    // GBP: Pound sterling
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // Set(3) [ "USD", "GBP", "EUR" ]
currenciesUnique.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
    // USD: USD
    // GBP: GBP
    // EUR: EUR 
});