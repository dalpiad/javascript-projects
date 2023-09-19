const input = require('readline-sync');  //Load the module. pulls in functions that allow input data from user.

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
// // console.log(selectedItems);

// let school = [
//   ["science", "computer", "art"],
//   ["Jones", "Willoughby", "Rhodes"]
// ];

// school[0].push("dance");
// console.log(school);
// school[1].push("Holmes");
// console.log(school);

// let phrase = "JavaScript rocks!";
// console.log(phrase.length);
// console.log(phrase[phrase.length - 8]);

// cityName = "Vienna";

// stateName = "Virginia";

// location = cityName + ", " + stateName;

// console.log(location);

// console.log(location.length);

// let language = "JavaScript";
// console.log(language.slice(1,6));
// language.slice(0,5);
// console.log(language);

// let org = "       The LaunchCode Foundation ";
// let trimmed = org.trim();

// console.log(trimmed);

// console.log('Launch\nCode');


// let pluralNoun = "cows";
// let name = "Katie";
// let verb = "flip";
// let adjective = "nice";
// let color = "brown";

// console.log(`JavaScript provides a ${color} collection of tools — including ${adjective} syntax and ${pluralNoun}
// — that allows ${name} to ${verb} with strings.`);


// let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
// let selectedItems = [];

// selectedItems = groceryBag.slice(2, 5).sort();
// console.log(selectedItems);

// const school = [
//   ["science", "computer", "art"],
//   ["Jones", "Willoughby", "Rhodes"]
// ];
// school[0].push("dance");
// school[1].splice(0,0,"Holmes");
// console.log(school);

// const input = require('readline-sync');

// let myString = "Where does the .push() method put things in an array?";

// console.log(myString.indexOf("y"));
// console.log(myString.length);

// console.log(myString[0]);

// let phrase = "Chili Cook-off";

// for (let i = 0; i < phrase.length - 1; i = i + 3) {
//    console.log(phrase[i]);
// }

let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

  // TODO 1.1b: Ask for candidate's name //
 let candidateName = input.question("What is your name? ");


  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
  }
