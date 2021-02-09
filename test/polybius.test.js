const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe ("polybius()", () => {
    describe("ENCODE", () => {
        it("should return a string", () => {
            const actual = polybius("irrelevant");
            expect(actual).to.be.a('string');
        });
        it("should change input letters to their corresponding number pair", () => {
            const expected = "4425114141";
            const actual = polybius("twadd");
            expect(actual).to.eql(expected);
        });
        it("should maintain spaces within input", () => {
            const expected = "423151 4234 31431341";
            const actual = polybius("ice is cold");
            expect(actual).to.eql(expected);
        });
        it("should ignore letter casing in input", () => {
            const expected = "423151 4234 31431341";
            const actual = polybius("iCE Is cOlD");
            expect(actual).to.eql(expected);
        });
        it("should return 42 for both i & j", () => {
            const expected = "42";
            const actual = polybius("i");
            const actual2 = polybius("j")
            expect(actual).to.eql(expected);
            expect(actual2).to.eql(expected);
        });
    });
    describe("DECODE", () => {
        it("should return false if length of input is odd", () => {
            const actual = polybius("42315", false);
            expect(actual).to.eql(false);
        });
        it("should return a string", () => {
            const actual = polybius("423151", false);
            expect(actual).to.be.a('string');
        });
        it("should change input numbers to their corresponding letters", () => {
            const expected = "twadd";
            const actual = polybius("4425114141", false);
            expect(actual).to.eql(expected);
        });
        it("should maintain spaces within input", () => {
            const expected = "woah there man";
            const actual = polybius("25431132 4432512451 231133", false);
            expect(actual).to.eql(expected);
        });
        it("should return i/j for 42", () => {
            const expected = "i/j";
            const actual = polybius("42", false);
            expect(actual).to.eql(expected);
        });
    });
});