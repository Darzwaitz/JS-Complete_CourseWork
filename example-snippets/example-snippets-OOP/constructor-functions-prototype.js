"use strict";
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const darz = new Person("Darz", 1984);
console.log(darz); // Object { firstName: "Darz", birthYear: 1984 }
console.log(darz instanceof Person); // true

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(darz.calcAge()); // 53

//  The Protoype is the Prototype of LINKED OBJECTS - so here, Person.prototype is NOT the prototype of Person
// - though ut is the prototype of the created object!

Person.prototype.newprop = "Test new prop";
console.log(darz.newprop); // Test new prop

// The property created is on the prototype, not the object
console.log(darz.hasOwnProperty("newprop")); // false

// log prototype
console.log(darz.__proto__);
// Object { calcAge: calcAge()
// , newprop: "Test new prop", … }
// calcAge: function calcAge()​
// constructor: function Person(firstName, birthYear)
// newprop: "Test new prop"
// <prototype>: Object { … }

// Object.prototype (top of chain)
console.log(darz.__proto__.__proto__);
