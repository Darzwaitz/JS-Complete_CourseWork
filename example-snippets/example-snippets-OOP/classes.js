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

class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    // parameters from/same as parent
    super(firstName, birthYear); // from parents class constructor
    this.course = course;
  }

  introduce() {
    console.log(`My name iz ${this.firstName}, studying ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear + 10}`);
  }
}

const martha = new StudentCl("Martha Jonez", 2012, "Computer Science");
console.log(martha.introduce()); // My name iz Martha Jonez, studying Computer Science
// console.log(martha.calcAge()); // 25

console.log(martha.calcAge()); // I'm 35
