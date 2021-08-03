'use strict';
// setting the this keyword manually with call and apply

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function(){}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(234, 'Darzer'); // Darzer booked a seat on Lufthansa flight LH234

// new airline
const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

// grab the method from lufthansa object - its now a function..
const book = lufthansa.book;
// ..use it here.. explicitly tell JS engine what the this should be with call method
// call the object containing the method we want to use
book.call(lufthansa, 24, 'Sam K'); // Sam K booked a seat on Lufthansa flight LH24
book.call(eurowings, 24, 'Sam K'); // Sam K booked a seat on Eurowings flight EW24

book.call(lufthansa, 248, 'Nana Married'); // Nana Married booked a seat on Lufthansa flight LH248

const swiss = {
    airline: 'Swiss Airlinez',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 480, 'Nana Tina'); // Nana Tina booked a seat on Swiss Airlinez flight LX480
console.log(swiss);
// Object { airline: "Swiss Airlinez", iataCode: "LX", bookings: (1) […] }
// ​airline: "Swiss Airlinez"
// ​bookings: Array [ {…} ]
// ​​0: Object { flight: "LX480", name: "Nana Tina" }
// ​​length: 1
// ​​<prototype>: Array []
// ​iataCode: "LX"

// USING apply method
// apply method is nearly exact same as call, except it takes in an array of args
const flightData = [584, 'George O'];
book.apply(swiss, flightData); // George O booked a seat on Swiss Airlinez flight LX584

// (not much used, as we can now use the spread operator, with call method here)
book.call(swiss, ...flightData); // George O booked a seat on Swiss Airlinez flight LX584