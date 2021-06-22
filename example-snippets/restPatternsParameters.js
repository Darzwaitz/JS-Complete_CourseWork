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


//REST pattern - it's the spread operator used in reverse
//spread operator is used to combine or expand arrays, or pass multiple values to a function
//Rest packs elements into an array

//NB. spread is on right side of assignment operator, rest on the left
//example using destructuring and rest
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 Array(3) [ 3, 4, 5 ]

//doesnt include skipped elements - rest operator should always be last arg - will otherwise throw REST specific error in the console
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood); // Pizza Risotto Array(4) [ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ]

//Objects
//trick for skipping an element(sat) - it's unused here for now, and we get the other elementz excluding it
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
// Object { thu: {…}, fri: {…} }
// ​
// fri: Object { open: 11, close: 23 }
// ​
// thu: Object { open: 12, close: 22 }

//functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)sum += numbers[i];
    console.log(sum);
}

add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

const x = [23, 5, 7];
//numbers are unpacked, then repacked as array
add(...x); // 35

restaurant.orderPizza('mushroomz', 'onion', 'jalopenoez');
// mushroomz
// Array [ "onion", "jalopenoez" ]

restaurant.orderPizza('mushroomz'); // an empty array will be created here at the end
// mushroomz
// Array []