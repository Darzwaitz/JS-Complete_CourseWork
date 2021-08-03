// this works because of closure

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

// greeterHey is now the greet function
const greeterHey = greet('Hey');
greeterHey('Darz'); // Hey Darz
greeterHey('Ciarz'); // Hey Ciarz

// pertaining to functional programming
greet('Hello')('Darz'); // Hello Darz

// greet as arrow function
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Whatzup')('Darzy'); // Whatzup Darzy