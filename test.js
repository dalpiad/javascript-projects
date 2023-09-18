// Testing the "typeof" operator.

//console.log(typeof "-34");

// Testing the "number" operator.

//console.log(Number('three'));

// Testing the variables and constants.

//const appName = "Get It Done";

// Testing order of operations.

//console.log(16 - 2 * 5 / 3 + 1);

//console.log(1 + 5 % 3);

//console.log(2 ** 2 ** 3 * 3);

//console.log(1 + "1");

// Testing the user input example.

//const input = require('readline-sync');  //Load the module. pulls in functions that allow input data from user.

//let name = input.question("Enter your name: "); //Prompting the user.

//console.log(typeof name);
//console.log("Hello, " + name + "!"); //Greeting the user with their name as they input the data.

//Testing understanding of if, else if, and else conditionals.
//let a = 7;
//if (a % 2 === 1) {
//   console.log("Launch");
//} else if (a > 5) {
//   console.log("Code");
//} else {
//   console.log("LaunchCode");
//}

// let num = 5;

// if (num % 2 === 0) {
//     if (num % 2 === 1) {
//         console.log("odd");
//     }
// }

// const input = require('readline-sync');

// // instantiate variables 
// let hoursInWeek = 168;

// let sleepHours = 56;
// let workHours = 40;
// let miscHours = 21;
// let studyHours = 18;

// // create variable to reduce clutter
// let necessities = sleepHours + workHours + miscHours + studyHours;

// // instantiate hours spent gaming on teh daily, then multiply by 7 to update leisureHours
// let dailyGaming = Number(input.question("How many hours a day would you like to spend playing Baldur's Gate 3? "));
// let leisureHours = dailyGaming * 7;

// // give user feedback
// console.log("\nGotcha. You want to spend at least " + dailyGaming + " hours a day playing Baldur's Gate. That comes out to " + leisureHours + " hours spent across seven daily gaming sessions.\n");

// // additional feedback based on whether they have exceeded total hours in a week
// if (necessities + leisureHours > hoursInWeek) {
//   console.log("I think you need to reconsider your priorities. There are only " + hoursInWeek + " hours in a week, and with all your other obligations you only have " + (hoursInWeek - necessities) + " hours throughout the week to spend on leisurely activities.");
// } else {
//   console.log("Cool. That sounds like a balanced schedule. You'll have about " + (hoursInWeek -necessities + leisureHours) + " hours leftover to spend how you'd like.");
// }

// let charles = ['coder', 'Tech', 47, 23, 350];
// charles.sort();
// console.log(charles);

// console.log(typeof charles[1]);

// str = 'LaunchCode students rock!';
// let strArray = str.split(' ');

// console.log(strArray);

// let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
// let selectedItems = [];

// selectedItems = groceryBag.slice(2, 5).sort();
// console.log(selectedItems);

let school = [
  ["science", "computer", "art"],
  ["Jones", "Willoughby", "Rhodes"]
];

school[0].push("dance");
console.log(school);
school[1].push("Holmes");
console.log(school);