// class expression
// const PersonCl = class {};

// class declaration (preferred)
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // add methods outside constructor - no commas to separate

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Yo ${this.firstName}`);
  }
}

const sally = new PersonCl("Sally", 1996);
// console.log(sally);
sally.calcAge(); // 41

console.log(sally.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`Yo ${this.firstName}`);
// };
sally.greet(); // Yo Sally
