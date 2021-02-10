const substitution = require("../src/substitution");
const expect = require("chai").expect;

/* available test alphabets */
// Your alphabet strings could stand to be given more descriptive variable names
const capAlpha = "zyxwVUTSrqPONmlkjIHGfedcba";
const backAlpha = "zyxwvutsrqponmlkjihgfedcba";
const symAlpha = "klmn*pqr!tuvwxyzab#defghij";
const rees = "abcabcabcabcabcabcabcabcab";
const pAlpha = "abcdefghijklmnopqrstuvwxy";
const gAlpha = "abcdefghijklmnopqrstuvwxyz*";

describe ("substitution()", () => {
    // nested describes! that's beautiful!
    describe("Should return false when:", () => {
        it("nothing is given for the alphabet", () => {
            const actual = substitution("irrelevant"); // pahaha
            expect(actual).to.eql(false);
        });
        it("alphabet given is smaller than 26", () => {
            const actual = substitution("irrelevant", pAlpha);
            expect(actual).to.eql(false);
        });
        it("alphabet given is larger than 26", () => {
            const actual = substitution("irrelevant", gAlpha);
            expect(actual).to.eql(false);
        });
        it("alphabet given has repeating characters (but does not include unique characters", () => {
            const actual = substitution("irrelevant", rees);
            expect(actual).to.eql(false);
        });
    });
    describe("Should correctly ENCODE when:", () => {
        it("given an input and an alphabet", () => {
            const expected = "rxv";
            const actual = substitution("ice", backAlpha);
            expect(actual).to.eql(expected);
        });
        it("there are capital letters in alphabet", () => {
            const expected = "rxv";
            const actual = substitution("ice", capAlpha);
            expect(actual).to.eql(expected);
        });
        it("there are capital letters in input", () => {
            const expected = "rxv";
            const actual = substitution("IcE", backAlpha);
            expect(actual).to.eql(expected);
        });
        it("given a message with spaces (should maintain spaces)", () => {
            const expected = "rxv rh xlow";
            const actual = substitution("ice is cold", backAlpha);
            expect(actual).to.eql(expected);
        });
        it("given an alphabet containing symbols", () => {
            const expected = "!m* !# myvn";
            const actual = substitution("ice is cold", symAlpha);
            expect(actual).to.eql(expected);
        });
    });
    describe("Should correctly DECODE when:", () => {
        it("given an input and an alphabet", () => {
            const expected = "rxv";
            const actual = substitution("ice", backAlpha, false);
            expect(actual).to.eql(expected);
        });
        it("there are capital letters in alphabet", () => {
            const expected = "ice";
            const actual = substitution("rxv", capAlpha, false);
            expect(actual).to.eql(expected);
        });
        it("there are capital letters in input", () => {
            const expected = "ice";
            const actual = substitution("RxV", backAlpha, false);
            expect(actual).to.eql(expected);
        });
        it("given a message with spaces (should maintain spaces)", () => {
            const expected = "ice is cold";
            const actual = substitution("rxv rh xlow", backAlpha, false);
            expect(actual).to.eql(expected);
        });
        it("given an alphabet containing symbols", () => {
            const expected = "ice is cold";
            const actual = substitution("!m* !# myvn", symAlpha, false);
            expect(actual).to.eql(expected);
        });
    });
});

