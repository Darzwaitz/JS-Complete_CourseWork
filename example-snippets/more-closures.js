'use strict';


// Ex.1 

// even when function is defined outside, when it's reassigned within this function, it will still set closure
let f;

const g = function () {
    let a = 24;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 222;
    f = function () {
        console.log(b * 2);
    }
}

g();
f(); // 48

// reassigning f function
h();
f(); // 444

// Ex.2

const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengerz`);
        console.log(`There are 3 groupz, each with ${perGroup} passengerz`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} secondz`);
    // Will start boarding in 3 secondz
};

boardPassengers(270, 3);
// We are now boarding all 270 passengerz
// There are 3 groupz, each with 90 passengerz