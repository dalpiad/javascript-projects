// Testing the "typeof" operator.

//console.log(typeof "-34");

// Testing the "number" operator.

//console.log(Number('three'));

// Testing the variables and constants.

//const appName = "Get It Done";

// Testing order of operations.

//console.log(16 - 2 * 5 / 3 + 1);

console.log(1 + 5 % 3);

//console.log(2 ** 2 ** 3 * 3);

//console.log(1 + "1");

// Testing the user input example.

const input = require('readline-sync');  //Load the module. pulls in functions that allow input data from user.

let name = input.question("Enter your name: "); //Prompting the user.

console.log(typeof name);
//console.log("Hello, " + name + "!"); //Greeting the user with their name as they input the data.
