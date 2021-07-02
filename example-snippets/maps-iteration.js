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


// Map, alt setup (to be used mainly)
const question = new Map([
    ['question', 'What iz the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct Answer'],
    [false, 'Try again']
]);

console.log(question);
// Map(7) { question → "What iz the best programming language in the world?", 1 → "C", 2 → "Java", 3 → "Javascript", correct → 3, true → "Correct", false → "Try again" }
// ​size: 7
// ​<entries>
// ​​0: question → "What iz the best programming language in the world?"
// ​​1: 1 → "C"
// ​​2: 2 → "Java"
// ​​3: 3 → "Javascript"
// ​​4: correct → 3
// ​​5: true → "Correct"
// ​​6: false → "Try again"

// convert object to map trick - use whenever a Map is needed from an existing object

// console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);
// Map(3) { thu → {…}, fri → {…}, sat → {…} }
// ​size: 3
// ​<entries>
// ​​0: thu → Object { open: 12, close: 22 }
// ​​1: fri → Object { open: 11, close: 23 }
// ​​2: sat → Object { open: 0, close: 24 }


// Quiz app


console.log(question.get('question'));
// with destructuring in the for of loop
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
    // What iz the best programming language in the world? 
    // Answer 1: C maps-iteration.js:90:42
    // Answer 2: Java maps-iteration.js:90:42
    // Answer 3: Javascript
}

const answer = Number(prompt('Your answer'));

// this chaining here, because 'Correct' evaluates to true, the outer .get grabs true from the Map
// and displays the value of the property with true as the key
console.log(question.get(question.get('correct') === answer)); // Correct Answer

// convert Map to array
console.log([...question]);
// Array(7) [ (2) […], (2) […], (2) […], (2) […], (2) […], (2) […], (2) […] ]
// ​0: Array [ "question", "What iz the best programming language in the world?" ]
// ​1: Array [ 1, "C" ]
// ​2: Array [ 2, "Java" ]
// ​3: Array [ 3, "Javascript" ]
// ​4: Array [ "correct", 3 ]
// ​5: Array [ true, "Correct Answer" ]
// ​6: Array [ false, "Try again" ]
// ​length: 7

console.log([...question.keys()]);
// Array(7) [ "question", 1, 2, 3, "correct", true, false ]
// ​0: "question"
// ​1: 1
// ​2: 2
// ​3: 3
// ​4: "correct"
// ​5: true
// ​6: false
// ​length: 7

console.log([...question.values()]);
// Array(7) [ "What iz the best programming language in the world?", "C", "Java", "Javascript", 3, "Correct Answer", "Try again" ]
// ​0: "What iz the best programming language in the world?"
// ​1: "C"
// ​2: "Java"
// ​3: "Javascript"
// ​4: 3
// ​5: "Correct Answer"
// ​6: "Try again"
// ​length: 7