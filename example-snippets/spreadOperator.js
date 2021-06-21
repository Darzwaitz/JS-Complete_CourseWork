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
    }
};

const arr = [7, 8, 9];
console.log(...arr); // 7 8 9

//use spread to break down existing array, add a new element, and create a new array of all of those elementz
const newMenu = [...restaurant.mainMenu, 'Gnocci']; // (4) ["Pizza", "Pasta", "Risotto", "Gnocci"]
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu); // (7) ["Pizza", "Pasta", "Risotto", "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

//NB. the spread operator can only be used on all iterable elements - arrays strings maps sets etc. NOT objectz

const myName = 'Darz';
const letters = [...myName, , 'y'];
console.log(letters); // (6) ["D", "a", "r", "z", empty, "y"]

console.log(Array.isArray(...myName)); // false

console.log(typeof (myName)); // string

// NB. multiple values separated by a comma are usually only expected when passing into a function, so spread operator won't work in template literals, as:
// console.log(`${...myName}`); // Uncaught SyntaxError: Unexpected token '...'

function testSpreadOperator(...element) {
    console.log(element, typeof (element));
    return element;
}
//from string to object
let myNameObject = testSpreadOperator(myName); // ["Darz"] "object"
//from object to array
console.log(Array.from(...myNameObject)); // (4) ["D", "a", "r", "z"]

//prompts run straight away here on doc ready
// const ingredients = [
//     prompt('Let\'s make pasta - Ingredient 1?'),
//     prompt('Let\'s make pasta - Ingredient 2?'),
//     prompt('Let\'s make pasta - Ingredient 3?')
// ];

// console.log(ingredients); // logs all 3 user inputs as array

// restaurant.orderPasta(...ingredients); // Here iz your delicious pasta with rasher, egg and pepper

// object from spread operator - and extra properties added on the fly
const newRestaurant = {
    foundedIn: 1982, ...restaurant, founder: 'Darz'
}
console.log(newRestaurant); // {foundedIn: 1982, name: "Classico Italiano", location: "Via Angelo Tavanti 23, Firenze, Italy", categories: Array(4), starterMenu: Array(4), …}

