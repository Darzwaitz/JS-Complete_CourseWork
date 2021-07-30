// create a function that accepts other functions as inputs

const oneWord = function (str) {
    // return a string without any spaces in it
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    // rest & destructure pattern
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {

    console.log(`Original string: ${str}`); // Original string: Javascript is the best!

    console.log(`Transformed string: ${fn(str)}`); // Transformed string: JAVASCRIPT is the best!

    // log the name of the function - which is a property on the function
    console.log(`Transformed string: ${fn.name}`); // Transformed string: upperFirstWord
}

transformer('Javascript is the best!', upperFirstWord); // output is above

transformer('Javascript is the best!', oneWord);
// Original string: Javascript is the best!
// Transformed string: javascriptisthebest! 
// Transformed string: oneWord

const high5 = function () {
    console.log('🖐');
};

// addEvent.. is the higher order function and high5 is the callback
document.body.addEventListener('click', high5);

['Darz', 'Ciarz', 'Toze'].forEach(high5); // 🖐 x 3