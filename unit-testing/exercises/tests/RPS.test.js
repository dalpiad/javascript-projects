const whoWon = require("../RPS.js");

describe("The 'whoWon' function compares two input of 'rock', 'paper' or 'scissor' and returns who won.", function(){

    test("Checking output when inputs match.", function() {
        let output = whoWon('rock','rock');
        expect(output).toBe('TIE!');
       });
 
       test("Checking output when inputs match.", function() {
        let output = whoWon('rock','rock');
        expect(output).toBe('TIE!');
       });

       test("Checking output when first input is 'rock' and second is 'paper'.", function() {
        let output = whoWon('rock','paper');
        expect(output).toBe('Player 2 wins!');
       });

       test("Checking output when first input is 'paper' and second is 'scissors'.", function() {
        let output = whoWon('paper','scissors');
        expect(output).toBe('Player 2 wins!');
       });

       test("Checking output when first input is 'scissors' and second is 'rock'.", function() {
        let output = whoWon('scissors','rock');
        expect(output).toBe('Player 2 wins!');
       });

       test("Checking output when first input is 'scissors' and second is 'paper'.", function() {
        let output = whoWon('scissors','paper');
        expect(output).toBe('Player 1 wins!');
       });

       test("Checking output when anything other than 'rock', 'paper', or 'scissors' is entered in the first input.", function() {
        let output = whoWon('Scissors','paper');
        expect(output).toBe('Invalid input.');
       });

       test("Checking output when anything other than 'rock', 'paper', or 'scissors' is entered in the second input.", function() {
        let output = whoWon('scissors','lizard');
        expect(output).toBe('Invalid input.');
       });

 });