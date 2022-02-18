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

// creating a class with Object.create()

const PersonProto = {
  calcAge() {
    console.log(2030 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
// console.log(steven);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name iz ${this.firstName} etc..`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");
jay.introduce(); // My name iz Jay etc..
jay.calcAge(); // 20
