'use strict';

const runOnce = function () {
    console.log('This runs once');
};
runOnce();

// IIFE
(function () {
    console.log('This runs once too');
})();

// arrow 
(() => console.log('This will also run once'))(); // This will also run once