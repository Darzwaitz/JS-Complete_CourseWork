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

// if an unknown element (restaurant) is undefined, skip the error
// check if the first object exists, and/then the 2nd one
if (restaurant.openingHours.mon && restaurant.openingHours.mon.open) console.log(restaurant.openingHours.mon.open);

//WITH optional chaining
// will evaluate for a nullish value (null or undefined)
console.log(restaurant.openingHours.mon?.open);
// checking on 2 objects
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// loop array and log if restaurant is open or closed on each day
for (const day of days) {
    // console.log(day);
    //NB using variable name as property name here on each iteration - must use sqaure brackets here
    const open = restaurant.openingHours[day]?.open ?? 'closed'; // optional chaining and nullish coalescing working together
    console.log(`On ${day}, we open at ${open}`);
}

//Methods
// args passed in here AFTER evaluation of methods existence as: .order?.(0, 1)
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // Array [ "Focaccia", "Pasta" ]
console.log(restaurant.orderTest?.(0, 1) ?? 'Method does not exist'); // Method does not exist

// Arrays
const users = [
    { name: 'Darz', email: 'tesht@yah.com' }
];

const users2 = [

];

console.log(users[0]?.name ?? 'User array empty'); // Darz
console.log(users2[0]?.name ?? 'User array empty'); // User array empty

//old way
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty'); // Darz