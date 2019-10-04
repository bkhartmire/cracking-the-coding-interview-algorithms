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

  describe("replaceSpaces", () => {
    it("should throw error if first argument isn't a string", () => {
      expect(() => replaceSpaces(true, 12)).to.throw(
        "first argument must be a string"
      );
      expect(() => replaceSpaces(40, 50)).to.throw(
        "first argument must be a string"
      );
    });
    it("should throw an error if the second argument isn't a number", () => {
      expect(() => replaceSpaces("two", "strings")).to.throw(
        "second argument must be a number indicating length of string"
      );
      expect(() => replaceSpaces("two", "strings")).to.throw(
        "second argument must be a number indicating length of string"
      );
      expect(() => replaceSpaces("no number")).to.throw(
        "second argument must be a number indicating length of string"
      );
    });
    it("should replace spaces in a string with %20", () => {
      expect(replaceSpaces("Mr John Smith     ", 13)).to.equal(
        "Mr%20John%20Smith"
      );
    });
  });

  describe("compress", () => {
    it("should throw an error if the input isn't a string", () => {
      expect(() => compress(null)).to.throw;
      expect(() => compress(100)).to.throw;
      expect(() => compress(undefined)).to.throw;
      expect(() => compress(true)).to.throw;
      expect(() => compress(false)).to.throw;
      expect(() => compress([])).to.throw;
      expect(() => compress({})).to.throw;
    });
    it("should compress string with counts of repeated characters", () => {
      expect(compress("aabcccccaaa")).to.equal("a2b1c5a3");
      expect(compress("zzzzzzzz")).to.equal("z8");
    });
    it("should return original string if the compressed version isn't shorter", () => {
      expect(compress("aa")).to.equal("aa");
      expect(compress("abcdefg")).to.equal("abcdefg");
    });
  });

  describe("rotateImage", () => {
    it("should rotate the matrix input 90 degrees clockwise", () => {
      const input = [
        ["a", "a", "a", "a"],
        ["b", "b", "b", "b"],
        ["c", "c", "c", "c"],
        ["d", "d", "d", "d"]
      ];
      const expected = [
        ["d", "c", "b", "a"],
        ["d", "c", "b", "a"],
        ["d", "c", "b", "a"],
        ["d", "c", "b", "a"]
      ];
      expect(rotateImage(input)).to.deep.equal(expected);
    });
  });

  describe("zerosInMatrix", () => {
    it("should fill rows and columns with zeros whereever a zero is located in the matrix input", () => {
      const input = [
        [1, true, 0, "hi"],
        [null, "apple", 12, "hola"],
        ["orange", 1, false, "konnichiwa"]
      ];
      const expected = [
        [0, 0, 0, 0],
        [null, "apple", 0, "hola"],
        ["orange", 1, 0, "konnichiwa"]
      ];
      expect(zerosInMatrix(input)).to.deep.equal(expected);
    });
  });
});
