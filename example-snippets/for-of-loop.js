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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
    // console.log(`${item} istype: ${typeof item}`); // string
    console.log(item);
    // Focaccia
    // Bruschetta
    // Garlic Bread
    // Caprese Salad
    // Pizza
    // Pasta
    // Risotto
}

// to get current index using for of
for (const item of menu.entries()) {
    console.log(item);
    // Array [ 0, "Focaccia" ]
    // Array [ 1, "Bruschetta" ]
    // Array [ 2, "Garlic Bread" ]
    // Array [ 3, "Caprese Salad" ]
    // Array [ 4, "Pizza" ]
    // Array [ 5, "Pasta" ]
    // Array [ 6, "Risotto" ]
}

//expand menu.entries into arrays of keys and values
console.log([...menu.entries()]);
// Array(7) [ (2) […], (2) […], (2) […], (2) […], (2) […], (2) […], (2) […] ]
// 0: Array [ 0, "Focaccia" ]
// 1: Array [ 1, "Bruschetta" ]
// 2: Array [ 2, "Garlic Bread" ]
// 3: Array [ 3, "Caprese Salad" ]
// 4: Array [ 4, "Pizza" ]
// 5: Array [ 5, "Pasta" ]
// 6: Array [ 6, "Risotto" ]
// length: 7

//old way
//loop through each item array of length 2 - adding 1 for aesthetics of menu number display
for (const item of menu.entries()) {
    console.log(`${item[0] + 1}: ${item[1]}`);
    // 1: Focaccia 
    // 2: Bruschetta 
    // 3: Garlic Bread 
    // 4: Caprese Salad 
    // 5: Pizza 
    // 6: Pasta 
    // 7: Risotto
}

//equiv es6, with destructuring
for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
    // 1: Focaccia 
    // 2: Bruschetta 
    // 3: Garlic Bread 
    // 4: Caprese Salad 
    // 5: Pizza 
    // 6: Pasta 
    // 7: Risotto
}