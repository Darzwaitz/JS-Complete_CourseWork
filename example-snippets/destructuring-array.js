'use strict';
// alert('test');
// 
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring array syntax
//NB. remember to declare variables
const [x, y, z] = arr;
console.log(x, y, z); //2 3 4
//'arr' is still intact
console.log(arr); // Array(3) [ 2, 3, 4 ]

const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

//skip element with a space between commas
let [firstB, , secondB] = restaurant.categories;
console.log(firstB, secondB); // Italian Vegetarian

//switching variablez is easier with destructuring syntax (es6)
[firstB, secondB] = [secondB, firstB];
console.log(firstB, secondB); // Vegetarian Italian

// console.log(restaurant.order(2, 0)); // Array [ "Garlic Bread", "Pizza" ]

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza

//nested destructured arrayz
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested; // 2 Array [ 5, 6 ]
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1