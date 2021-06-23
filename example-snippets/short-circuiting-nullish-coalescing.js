'use strict';

// 
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    // Destructuring as object passed in, and default values assigned for first 3 values here
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
        // ex .1
        // Order recieved Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30

        // ex .2
        // Order recieved Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here iz your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// Logical operators can use ANY data type - can return any data type - and they do short circuiting/short circuit evaluation
// OR || will immediately return the first truthy value
console.log(4 || 'Darz'); // 4
// 0 iz falsey
console.log(0 || 'Darz'); // Darz
console.log('' || 'Darzy'); // Darzy
console.log(' ' || 'Darzy'); // ' '
console.log(true || 0); // true
console.log(undefined || null); // null

//forTesting
// restaurant.numGuests = 12;

//OR example
console.log('---OR---');
// if numGuests existz - if not default is 10
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1); // 10

//equivalent with || operation evalution
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

//AND example
// && works in the opposite of || - it will take the first falsey value
console.log('---AND---');
console.log(0 && 'Darz'); // 0
console.log(2 && 'Darz'); // Darz
console.log('Tesht' && 22 && null && 'Darz'); // null

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushroomz', 'gerkinz');
}
//mushroomz
// Array [ "gerkinz" ]

//Equivalent

restaurant.orderPizza && restaurant.orderPizza('mushroomz', 'onionz');
// mushroomz
// Array [ "onionz" ]

// Nullish coalescing - if the value being evaluated is a zero, it will be falsey -
// this is sometimez not desired evaluation

restaurant.numGuestsTest = 0;

// Nullish: null and undefined (NOT 0 or '')
const guestsTest = restaurant.numGuestsTest ?? 10;
console.log(guestsTest); // 0
//so we don't get the default here of 10, because 0 iz not a nullish value

