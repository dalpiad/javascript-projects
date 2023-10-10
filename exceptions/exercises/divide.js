const input = require('readline-sync');

// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

function divide(numr, denom) {
    if (denom === 0) {
        throw Error("You cannot divide by zero!");
    }
    return numr / denom;
}


