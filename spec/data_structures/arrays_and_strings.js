const { expect } = require("chai");
const {
  isUnique,
  reverseString,
  isPermutation,
  replaceSpaces,
  compress,
  rotateImage,
  transformZeros,
  zerosInMatrix,
  isSubstringAlternative,
  isRotation
} = require("../../index/data_structures/arrays_and_strings");

describe("arrays and strings algorithms", () => {
  describe("isUnique", () => {
    it("should return whether all characters in a string are unique", () => {
      expect(isUnique("hello")).to.be.false;
      expect(isUnique("helium")).to.be.true;
      expect(isUnique("unique")).to.be.false;
      expect(isUnique("uniqlo")).to.be.true;
    });
    it("should throw an error if the input isn't a string", () => {
      expect(() => isUnique(null)).to.throw;
      expect(() => isUnique(100)).to.throw;
      expect(() => isUnique(undefined)).to.throw;
      expect(() => isUnique(true)).to.throw;
      expect(() => isUnique(false)).to.throw;
      expect(() => isUnique([])).to.throw;
      expect(() => isUnique({})).to.throw;
    });
  });

  describe("reverseString", () => {
    it("should return reversed version of string input", () => {
      expect(reverseString("abcdefg")).to.equal("gfedcba");
      expect(reverseString("hello!!")).to.equal("!!olleh");
    });
    it("should throw an error if the input isn't a string", () => {
      expect(() => reverseString(null)).to.throw;
      expect(() => reverseString(100)).to.throw;
      expect(() => reverseString(undefined)).to.throw;
      expect(() => reverseString(true)).to.throw;
      expect(() => reverseString(false)).to.throw;
      expect(() => reverseString([])).to.throw;
      expect(() => reverseString({})).to.throw;
    });
  });

  describe("isPermuation", () => {
    it("should throw an error if both inputs aren't strings", () => {
      expect(() => isPermutation(null)).to.throw;
      expect(() => isPermutation(100, "string")).to.throw;
      expect(() => isPermutation("pineapple")).to.throw;
      expect(() => isPermutation("valid", false)).to.throw;
      expect(() => isPermutation(false)).to.throw;
      expect(() => isPermutation(["hello", "I'm in an array"])).to.throw;
      expect(() => isPermutation({ a: 22 })).to.throw;
    });
    it("should return whether one string is a permuation of the other", () => {
      expect(isPermutation("hello", "lolhe")).to.be.true;
      expect(isPermutation("hello", "goodbye")).to.be.false;
      expect(isPermutation("school master", "the classroom")).to.be.true;
      expect(isPermutation("elvis", "lives")).to.be.true;
      expect(isPermutation("apple", "pineapple")).to.be.false;
    });
  });
});
