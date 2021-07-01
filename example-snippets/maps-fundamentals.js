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

// A Map is a data structure we can use to map values to keys, like an object
// Big diff between Map and object is Map can have any type for its key - another object or evan a boolean
const rest = new Map(); // best way to create - an empty Map initialized
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
//rest.set(2, 'Lisbon, Portugal'); // the set method, as well as adding to the Map here, also returns the Map as:
console.log(rest.set(2, 'Lisbon, Portugal'));
// Map(3) { name → "Classico Italiano", 1 → "Firenze, Italy", 2 → "Lisbon, Portugal" }
// size: 3
// <entries>
// 0: name → "Classico Italiano"
// 1: 1 → "Firenze, Italy"
// 2: 2 → "Lisbon, Portugal"

// we can chain because each iteration iz returned
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');
// Map(3) { name → "Classico Italiano", 1 → "Firenze, Italy", 2 → "Lisbon, Portugal" }
// size: 8
// <entries>
// 0: name → "Classico Italiano"
// 1: 1 → "Firenze, Italy"
// 2: 2 → "Lisbon, Portugal"
// 3: categories → Array(4) [ "Italian", "Pizzeria", "Vegetarian", … ]
// 4: open → 11
// 5: close → 23
// 6: true → "We are open"
// 7: false → "We are closed"

// .get
console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // We are open

// power of boolean keys
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // We are open

// .has
console.log(rest.has('categories')); // true
rest.delete(2);
console.log(rest); // 2 → "Lisbon, Portugal" is now deleted from the Map

// .size
console.log(rest.size); // 7

// .clear
// rest.clear();
// console.log(rest); // Map(0)

// use array as Map key
const arr = [1, 2];
rest.set(arr, 'Test');

rest.set(document.querySelector('h1'), 'Heading');
// 8: <h1>
//  → "Heading"​​​
// <key>: <h1>​​​
// <value>: "Heading"

console.log(rest.get(arr)); // Test