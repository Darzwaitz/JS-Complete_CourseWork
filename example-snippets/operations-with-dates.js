'use strict';

const future = new Date(2037,10,19,15,23);

// console.log(Number(future));
console.log(+future);

// (1000 mlSecond * 60 secz, * 60 minz, * 24 hours)
const calcDaysPassed = (date1,date2) => Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 18));
console.log(days1); // 4