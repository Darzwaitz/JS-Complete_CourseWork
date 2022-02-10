// class expression
// const PersonCl = class {};

// class declaration (preferred)
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // add methods outside constructor - no commas to separate

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Yo ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // check for full name
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  // get to fix repeat name error (property that already existz)
  get fullName() {
    return this._fullName;
  }
}

const sally = new PersonCl("Sally Wen", 1996);
// console.log(sally);
sally.calcAge(); // 41

console.log(`Sally age: ${sally.age}`); // Sally age: 41

console.log(sally.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`Yo ${this.firstName}`);
// };
sally.greet(); // Yo Sally

const account = {
  owner: "Darz",
  movements: [200, 530, 129, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// write the get without parenthesis to get value
console.log(account.latest); // 300

account.latest = 50;
console.log(account.movements); // Array(5) [ 200, 530, 129, 300, 50 ]
