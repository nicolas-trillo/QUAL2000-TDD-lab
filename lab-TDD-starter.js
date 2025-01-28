/*
Lab Unit testing simple TDD with math functions
Starter file
Create the following functions as per the instructions below.
Create a folder named tests on the root folder
then create a file named lab-TDD-starter.test.js
NOTE: The name of the functions have
to match the exported names mentioned at the end of this file
in order to pass the test cases.
To run the test cases, run the following command on your terminal:
node --test
*/

//add function
const add = (a, b) => {
    return a + b;
};

//subtract function
const subtract = (a, b) => {
    return a - b;
};

//multiply function
const multiply = (a, b) => {
    return a * b;
};

//divide function
const divide = (a, b) => {
    if (b === 0) throw new Error("Zero division is not allowed.");
    else if (a === 0) return a;
    return a / b;
};

//modulas function
const modulas = (a, b) => {
    return a % b;
};

//power function
const power = (a, b) => {
    return Math.pow(a, b);
};

//square function
const squareRoot = (a) => {
    return Math.sqrt(a);
};

//floor function
const floor = (a) => {
    return Math.floor(a);
};

//ceiling function
const ceiling = (a) => {
    return Math.ceil(a);
};

////////////////////////////////////////

//export functions
//Please do not change the following line.

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulas,
    power,
    squareRoot,
    floor,
    ceiling,
};
