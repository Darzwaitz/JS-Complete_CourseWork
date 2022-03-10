"use strict";

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw iz happnin");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You Win!"); // marks as resolved - pass in result of Promise, will be used on .then
    } else {
      reject(new Error("Ya lost"));
    }
  }, 2000);
});

lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// Promisifying and encapsulation
const wait = function (seconds) {
  return new Promise(function (resolve) {
    // no reject param needed here
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log("1 second past");
    return wait(1);
  })
  .then(() => {
    console.log("2 seconds past");
    return wait(1);
  })
  .then(() => {
    console.log("3 seconds past");
    return wait(1);
  })
  .then(() => {
    console.log("4 seconds past");
    return wait(1);
  });

// Static method on Promise constructor
Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("Testy")).catch((x) => console.error(x));
