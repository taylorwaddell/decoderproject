const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar()", () => {
    describe("Should return false if given:", () => {
        it("A shift argument that is 0", () => {
            const actual = caesar("irrelevant", 0);
            expect(actual).to.eql(false);
        });
        it("A shift argument that is less than -25", () => {
            const actual = caesar("irrelevant", -26);
            expect(actual).to.eql(false);
        });
        it("A shift argument that is greater than 25", () => {
            const actual = caesar("irrelevant", 26);
            expect(actual).to.eql(false);
        });
    });
    describe("ENCODING:", () => {
        it("should correctly shift letters by specified number of positions", () => {
            const expected = "oik";
            const actual = caesar("ice", 6);
            expect(actual).to.eql(expected);
        });
        it("should encode when given negative shift argument", () => {
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
        it("should return upper case letters in lower case", () => {
            const expected = "oik oy iurj!";
            const actual = caesar("Ice is Cold!", 6);
            expect(actual).to.eql(expected);
        });
        it("should start over from front of alphabet (a) if shifted past z", () => {
            const expected = "d";
            const actual = caesar("t", 10);
            expect(actual).to.eql(expected);
        });
        it("should start over from end of alphabet (z) if shifted past a", () => {
            const expected = "w";
            const actual = caesar("c", -6);
            expect(actual).to.eql(expected);
        });
    });
    describe("DECODING:", () => {
        it("should correctly shift letters by specified number of positions", () => {
            const expected = "ice";
            const actual = caesar("oik", 6, false);
            expect(actual).to.eql(expected);
        });
        it("should encode when given negative shift argument", () => {
            const expected = "n";
            const actual = caesar("g", -7, false);
            expect(actual).to.eql(expected);
        });
        it("should return non-alphabet characters no different", () => {
            const expected = "a!b!c";
            const actual = caesar("b!c!d", 1, false);
            expect(actual).to.eql(expected);
        });
        it("should maintain any spaces in input", () => {
            const expected = "ice is cold";
            const actual = caesar("oik oy iurj", 6, false);
            expect(actual).to.eql(expected);
        });
        it("should return upper case letters in lower case", () => {
            const expected = "ice is cold!";
            const actual = caesar("OiK oy IUrj!", 6, false);
            expect(actual).to.eql(expected);
        });        
        it("should start over from front of alphabet (a) if shifted past z", () => {
            const expected = "t";
            const actual = caesar("d", 10, false);
            expect(actual).to.eql(expected);
        });
        it("should start over from end of alphabet (z) if shifted past a", () => {
            const expected = "c";
            const actual = caesar("w", -6, false);
            expect(actual).to.eql(expected);
        });
    });
});