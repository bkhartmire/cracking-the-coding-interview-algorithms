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
});
