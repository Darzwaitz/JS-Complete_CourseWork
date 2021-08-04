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

// BIND
// just like call, Bind also allows for us to manually set the this keyword - Bind returns a new function though, where the this keyword is bound (which we pass into bind)
// book.call(eurowings, 24, 'Sam K'); // Sam K booked a seat on Eurowings flight EW24

const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams'); // Steven Williams booked a seat on Eurowings flight EW23

const bookLH = book.bind(lufthansa);
bookLH(20, 'Toe Bar'); // Toe Bar booked a seat on Lufthansa flight LH20

// can pass multiple params to bind - to use as default values
// this is called 'PARTIAL APPLICATION' - when there is a predefined value or valuez
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Darz'); // Darz booked a seat on Eurowings flight EW23

// fully set as defaults
const bookEW23Name = book.bind(eurowings, 23, 'test');
bookEW23Name(); // test booked a seat on Eurowings flight EW23

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// Object { airline: "Lufthansa", iataCode: "LH", bookings: (4) […], book: book(flightNum, name), planes: 300, buyPlane: buyPlane()
//  }
// 301

// 'PARTIAL APPLICATION' - preset parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

// only calculate VAT - 1st arg is the this - in this case we don't need it, so we set to null
// when bind is used, we usually set it to a new value/function
// order of args is important
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100)); // 123

const addVATAllParams = addTax.bind(null, 0.23, 200);
console.log(addVATAllParams()); // 246

// rewrite with function returning function - works the same as bind
const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); // 123
console.log(addVAT2(200)); // 246