const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    // You're doing too much in this test. Ideally, a test should only test one
    // condition. That way, you can tell which thing is broken if the test fails.
    it("should return false is shift is less than -25, greater than 25, or 0", () => {
        const expected = false;
        const actual = caesar("irrelevant", 0);
        const act2 = caesar("irrelevant", -26);
        const act3 = caesar("irrelevant", 26);
        expect(actual).to.eql(expected);
        expect(act2).to.eql(expected);
        expect(act3).to.eql(expected);
    });
    it("should shift each letter the specified number of positions", () => {
        const expected = "oik";
        const actual = caesar("ice", 6);
        expect(actual).to.eql(expected);
    });
    
    // It might make more sense to put this test near the "return correctly
    // shifted number" test above, since these test very similar functionality.
    it("should return correct shift with negative arg", () => {
        const expected = "g";
        const actual = caesar("n", -7);
        expect(actual).to.eql(expected);
    });
    it("should return non-alphabet characters no different", () => {
        const expected = "b!c!d";
        const actual = caesar("a!b!c", 1);
        expect(actual).to.eql(expected);
    });
    it("should maintain any spaces in input", () => {
        const expected = "oik oy iurj";
        const actual = caesar("ice is cold", 6);
        expect(actual).to.eql(expected);
    });
    it("should start over from top of alphabet if shifted past z", () => {
        const expected = "d";
        const actual = caesar("t", 10);
        expect(actual).to.eql(expected);
    });
    it("should return upper case letters in lower case", () => {
        const expected = "oik oy iurj!";
        const actual = caesar("Ice is Cold!", 6);
        expect(actual).to.eql(expected);
    });
    it("should return correct shift with negative arg and start over from end of alphabet", () => {
        const expected = "w";
        const actual = caesar("c", -6);
        expect(actual).to.eql(expected);
    });
    it("should take in coded phrases and decode it using the provided corresponding shift number", () => {
        const expected = "ice is cold!";
        const actual = caesar("oik oy iurj!", 6, false);
        expect(actual).to.eql(expected);
    });
  });