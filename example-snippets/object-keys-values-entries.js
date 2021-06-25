'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],


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

const openingHours = {
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
};

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
// Array(3) [ "thu", "fri", "sat" ]
// 0: "thu"
// 1: "fri"
// 2: "sat"​
// length: 3

console.log(`Open on ${properties}`);
// Open on thu,fri,sat

let openStr = `Open for ${properties.length} dayz: `
for (const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);
// Open for 3 dayz: thu, fri, sat, 

for (const day of Object.keys(openingHours)) {
    console.log(day);
    // thu
    // fri
    // sat
}

// Property VALUES
const values = Object.values(openingHours);
console.log(values);
// Array(3) [ {…}, {…}, {…} ]
// 0: Object { open: 12, close: 22 }
// 1: Object { open: 11, close: 23 }
// 2: Object { open: 0, close: 24 }
// length: 3

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);
// Array(3) [ (2) […], (2) […], (2) […] ]
// ​
// 0: Array [ "thu", {…} ]
// ​
// 1: Array [ "fri", {…} ]
// ​
// 2: Array [ "sat", {…} ]

// destructuring array and of object
for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}
// On thu we open at 12 and close
// On fri we open at 11 and close 
// On sat we open at 0 and close 