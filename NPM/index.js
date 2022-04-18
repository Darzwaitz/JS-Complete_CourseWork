// Using cloneDeep from loadash to make sure a clone object is the original object

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
// Parcel shortens the code here
import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

// Parcel code
if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = "S'up";
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const Darz = new Person("Darz");

console.log("Darz" ?? null);

import "core-js/stable";
