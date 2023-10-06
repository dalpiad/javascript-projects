const processor = require("../processor.js");

describe("transmission processor", function() {
  //  TODO: put tests here
  test("Take in a transmission string and return an object", () => {
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe("object");
  });
 
  test("Return '-1' if the string does not contain '::'.", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  test("Returned object contains an id property.", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  test("Return '-1' if the string does not contain '::'.", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  test("Return '-1' if the string does not contain '::'.", function() {
    expect(isPalindrome("a")).toBe(true);
  });


 });