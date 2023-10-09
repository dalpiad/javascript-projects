const checkFive = require('../checkFive');

describe("The 'checkFive' function checks to see if a number is greater than, less than, or equal to 5.", function(){

   test("Checking output when a numeral less than 5 is entered.", function() {
    let output = checkFive(2);
    expect(output).toBe("2 is less than 5.");
   });

   test("Checking output when a numeral equal to 5 is entered.", function() {
    let output = checkFive(5);
    expect(output).toBe("5 is equal to 5.");
   });

   test("Checking output when a numeral greater than 5 is entered.", function() {
    let output = checkFive(6);
    expect(output).toBe("6 is greater than 5.");
   });

});