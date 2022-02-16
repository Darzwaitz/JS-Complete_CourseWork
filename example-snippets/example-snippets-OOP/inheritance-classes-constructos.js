const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking prototypez
Student.prototype = Object.create(Person.prototype); // empty at this point

// static method
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
// console.log(mike);
mike.introduce(); // My name is Mike and I study Computer Science

mike.calcAge(); // 17

Student.prototype.constructor = Student;
