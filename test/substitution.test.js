const substitution = require("../src/substitution");
const expect = require("chai").expect;

/* available test alphabets */
const caseTestAlpha = "zyxwVUTSrqPONmlkjIHGfedcba";
const backwardsAlpha = "zyxwvutsrqponmlkjihgfedcba";
const alphaWithSymbols = "klmn*pqr!tuvwxyzab#defghij";
const alphaWithRepeats = "abcabcabcabcabcabcabcabcab";
const smallAlpha = "abcdefghijklmnopqrstuvwxy";
const largeAlpha = "abcdefghijklmnopqrstuvwxyz*";

describe ("substitution()", () => {
    describe("Should return false when:", () => {
        it("nothing is given for the alphabet", () => {
            const actual = substitution("irrelevant");
            expect(actual).to.eql(false);
        });
        it("alphabet given is smaller than 26", () => {
            const actual = substitution("irrelevant", smallAlpha);
            expect(actual).to.eql(false);
        });
        it("alphabet given is larger than 26", () => {
            const actual = substitution("irrelevant", largeAlpha);
            expect(actual).to.eql(false);
        });
        it("alphabet given has repeating characters (but does not include unique characters", () => {
            const actual = substitution("irrelevant", alphaWithRepeats);
            expect(actual).to.eql(false);
        });
    });
    describe("Should correctly ENCODE when:", () => {
        it("given an input and an alphabet", () => {
            const expected = "rxv";
            const actual = substitution("ice", backwardsAlpha);
            expect(actual).to.eql(expected);
        });
        it("there are capital letters in alphabet", () => {
            const expected = "rxv";
            const actual = substitution("ice", caseTestAlpha);
            expect(actual).to.eql(expected);
        });
        it("there are capital letters in input", () => {
            const expected = "rxv";
            const actual = substitution("IcE", backwardsAlpha);
            expect(actual).to.eql(expected);
        });
        it("given a message with spaces (should maintain spaces)", () => {
            const expected = "rxv rh xlow";
            const actual = substitution("ice is cold", backwardsAlpha);
            expect(actual).to.eql(expected);
        });
        it("given an alphabet containing symbols", () => {
            const expected = "!m* !# myvn";
            const actual = substitution("ice is cold", alphaWithSymbols);
            expect(actual).to.eql(expected);
        });
    });
    describe("Should correctly DECODE when:", () => {
        it("given an input and an alphabet", () => {
            const expected = "rxv";
            const actual = substitution("ice", backwardsAlpha, false);
            expect(actual).to.eql(expected);
        });
        it("there are capital letters in alphabet", () => {
            const expected = "ice";
            const actual = substitution("rxv", caseTestAlpha, false);
            expect(actual).to.eql(expected);
        });
        it("there are capital letters in input", () => {
            const expected = "ice";
            const actual = substitution("RxV", backwardsAlpha, false);
            expect(actual).to.eql(expected);
        });
        it("given a message with spaces (should maintain spaces)", () => {
            const expected = "ice is cold";
            const actual = substitution("rxv rh xlow", backwardsAlpha, false);
            expect(actual).to.eql(expected);
        });
        it("given an alphabet containing symbols", () => {
            const expected = "ice is cold";
            const actual = substitution("!m* !# myvn", alphaWithSymbols, false);
            expect(actual).to.eql(expected);
        });
    });
});

