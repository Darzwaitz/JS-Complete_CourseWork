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
    }
};

// ex .1
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2
});

// ex .2
restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1
});


const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// Classico Italiano
// Object { thu: {…}, fri: {…}, sat: {…} } 
// Array(4) [ "Italian", "Pizzeria", "Vegetarian", "Organic" ]

//using different names for the properties while destructuring
const { name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); // same output as above

//Default values that may or may not exist
//starters, that does exist, is also given default value of empty array
const { menu = [], starterMenu: starters = [] } = restaurant;

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//this is used here as the variablez are already created
({ a, b } = obj);
console.log(a, b); // 23 7

// nested objects
const { fri: { open, close } } = openingHours; // openingHours available as it's declared above
console.log(open, close); // 11 23