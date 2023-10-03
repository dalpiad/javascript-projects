const input = require('readline-sync');  //Load the module. pulls in functions that allow input data from user.

// for (let i = 0; i < 51; i++) {
//   console.log(i);
// }

//  let code = '';

//  /// Code your Bonus Mission Solution here ///
//  string1 = "AaBbCcDdEeFfGgHhIiJjKkLl";
//  string2 = "1!2@3#4$5%6^7&8*9?0~";

// let codeLength = input.question("How many characters would you like you password? Must be an even integer: ")
// codeArray = [];

// for (let i = 0; i < (codeLength/2); i++) {
//  codeArray.push(string1[Math.floor(Math.random()*string1.length)] + string2[Math.floor(Math.random()*string2.length)]); 
// }

// code = codeArray.join('');

// console.log(code);

// let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
// let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
// let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
// let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
// let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

// let pantry = [protein, grains, veggies, beverages, desserts];
// let meals = [];

// let numMeals = input.question("How many meals would you like to make?");

// /// Part A #2: Write a ``for`` loop inside this function
// /// Code your solution for part A #2 below this comment (and above the return statement) ... ///
// for (let i = 0; i < numMeals; i++) {
//   meals[i] = [pantry[0][i],pantry[1][i],pantry[2][i],pantry[3][i],pantry[4][i]];
// }

// console.log(meals);
// let charTest = 'apple'
// if (typeof charTest == 'string') {
//     console.log('yes')
// }

let students = {
    names: ["Gerard Darris", "Banana Cat", "Apple Dog", "Mango Zebra", "Kiwi Kiwi"],
    scores: [100, 95, 74, 82, 91]
};

// for (let i = 0; i < students.names.length; i++) {
//     for (let key in students) {
//         console.log(`${key}: ${students[key][i]}`)
//     }
// };

for (let i = 0; i < students["names"].length; i++) {
    let output = "";

    for (items in students) {
        output += `${students[items][i]}: `
    }
    console.log(output.slice(0, -2));
}
console.log(Math.round(Math.random()*1000)/10)