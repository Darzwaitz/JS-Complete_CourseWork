'use strict';
// default parameters for functions

const bookings = [];

// es6 version of setting default values - set within the parenthesis
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // // es5 version
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    // enhanced object literal syntax
    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123'); // before default params // Object { flightNum: "LH123", numPassengers: undefined, price: undefined }
//overwrite defaults
createBooking('LH123', 2); // Object { flightNum: "LH123", numPassengers: 2, price: 398 }
createBooking('LH123', 2, 800); // Object { flightNum: "LH123", numPassengers: 2, price: 800 }

// params are set in order - if we want to skip a parameter, and set the other ones- undefined can be used
createBooking('LH123', undefined, 1000); // Object { flightNum: "LH123", numPassengers: 1, price: 1000 }