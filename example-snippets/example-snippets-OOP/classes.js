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

// another class example
class Account {
  // Public fields - added to instancez
  locale = navigator.language;

  // Private field
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property - underscore naming convention
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    // console.log("thankz..");
  }

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved");
      return this;
    }
  }

  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
  // static method only available on the class, not the instance
  static helper() {
    console.log("Helper");
  }
}

const acc1 = new Account("Darz", "EUR", 4444);

// acc1.movements.push(240);
// acc1.movements.push(-40);

acc1.deposit(240);
acc1.withdraw(70);
acc1.requestLoan(1000);
console.log(acc1);
console.log(acc1.pin);

console.log(acc1.getMovements());
console.log(Account.helper()); // Helper

// console.dir(acc1.#approveLoan()); // Private methods not yet implemented

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
