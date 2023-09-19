const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let modStr = str.slice(3) + str.slice(0,3);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Using pseudo-pig latin to tranform the word "${str}", turns it into "${modStr}"`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let usersWord = input.question("Let's tranform a word using pseudo-pig latin.\n Enter a word: ")
let numberLetters = input.question(`You word is ${usersWord.length} characters long.\nEnter a number less than ${usersWord.length} to set the number of letter to move: `);


//let newUsersWord = usersWord.slice(numberLetters) + usersWord.slice(0,numberLetters);
//console.log(newUsersWord);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(numberLetters < usersWord.length) {
    newUsersWord = usersWord.slice(numberLetters) + usersWord.slice(0,numberLetters);
    console.log(newUsersWord)
} else {
    let newUsersWord = usersWord.slice(3) + usersWord.slice(0,3);
    console.log("You entered a number the same size or greater than the length of your word. So we will just use '3' instead: " + newUsersWord)
}
