// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", () => {

  // Write your unit tests here!

  test("Check the launchcode object contains 'nonprofit' under the 'organization' key.", () => {
    let output = launchcode.organizaion;
    expect(output).toBe("nonprofit");
   });

   test("Check the launchcode object contains 'Jeff' under the 'executiveDirector' key.", () => {
    let output = launchcode.executiveDirector;
    expect(output).toBe("Jeff");
   });

   test("Check the launchcode object contains the number 100, under the 'percentageCoolEmployees' key.", () => {
    let output = launchcode.percentageCoolEmployees;
    expect(output).toBe(100);
   });

   test("Checks the content of the array under the 'programsOffered' key", () => {
    let output = launchcode.programsOffered;
    expect(launchcode.programsOffered.includes("Web Development")).toBe(true);
    expect(output.includes("Data Analysis")).toBe(true);
    expect(output.includes("Liftoff")).toBe(true);
    expect(output.length).toBe(3);   
   });

   test("Check the launchOutput returns the correct values based on the input.", () => {
    let output = launchcode.launchOutput;
    expect(output(2)).toBe('Launch!');
    expect(launchcode.launchOutput(3)).toBe('Code!');
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
    expect(launchcode.launchOutput(29)).toBe("Rutabagas! That doesn't work.");
   });
  
});