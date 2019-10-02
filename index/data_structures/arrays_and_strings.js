// 1.1 Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
const isUnique = string => {
  const characters = {};
  for (const char of string) {
    if (characters[char]) {
      return false;
    } else {
      characters[char] = 1;
    }
  }
  return true;
};
// console.log(isUnique("hello")) // should be false
// console.log(isUnique("helium")) // should be true
// console.log(isUnique("unique")) // should be false
// console.log(isUnique("uniqlo")) // should be true

// 1.2 Implement a function void reverse(char*str) in C or C++ which reverses a null-terminated string.

// 1.3 Given two strings, write a method to decide if one is a permutation of the other.
const isPermutation = (stringA, stringB) => {
  if (typeof stringA !== "string" || typeof stringB !== "string")
    throw new Error("must pass in two strings as arguments");
  return (
    JSON.stringify(stringA.split("").sort()) ===
    JSON.stringify(stringB.split("").sort())
  );
};
// console.log(isPermutation("hello", "lolhe")) // should be true
// console.log(isPermutation("hello", "goodbye")) // should be false
// console.log(isPermutation(1, "throw error")) // should throw error
// console.log(isPermutation("only one argument")) // should throw error

// 1.4 Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end of the string to hold the additional characters, and that you are given the 'true' length of the string.
// EXAMPLE
// Input: "Mr John Smith     ", 13
// Output: "Mr%20John%20Smith"

const replaceSpaces = (string, length) => {
  if (typeof string !== "string")
    throw new Error("first argument must be a string");
  if (typeof length !== "number")
    throw new Error(
      "second argument must be a number indicating length of string"
    );
  let result = "";
  for (let i = 0; i < length; i++) {
    string[i] === " "
      ? (result = result.concat("%20"))
      : (result = result.concat(string[i]));
  }
  return result;
};
// console.log(replaceSpaces("Mr John Smith     ", 13)) // should be "Mr%20John%20Smith"

// 1.5 Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only upper and lower case letters (a-z)

const compress = string => {
  if (typeof string !== "string") throw new Error("must pass in string");
  let compressedString = string[0];
  let count = 1;
  for (const char of string.slice(1)) {
    if (compressedString[compressedString.length - 1] === char) {
      count++;
    } else {
      compressedString = compressedString.concat(count, char);
      count = 1;
    }
  }
  compressedString = compressedString.concat(count);
  return compressedString.length < string.length ? compressedString : string;
};
// console.log(compress("aabcccccaaa")); // should be "a2b1c5a3"
// console.log(compress("aa")); // should be "aa"

// 1.6 Given an image represented by an NxN marix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

const rotateImage = matrix => {
  const rotatedMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    rotatedMatrix.push([]);
  }
  for (let index = 0; index < matrix.length; index++) {
    for (const row of rotatedMatrix) {
      row.unshift(matrix[index][index]);
    }
  }
  return rotatedMatrix;
};

// const matrix = [
//   ["a", "a", "a", "a"],
//   ["b", "b", "b", "b"],
//   ["c", "c", "c", "c"],
//   ["d", "d", "d", "d"]
// ];
// const rotatedMatrix = [
//   ["d", "c", "b", "a"],
//   ["d", "c", "b", "a"],
//   ["d", "c", "b", "a"],
//   ["d", "c", "b", "a"]
// ];
// console.log(rotateImage(matrix)); // should be rotatedMatrix

// 1.7 Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

//helper method
const transformZeros = (matrix, row, column) => {
  //figure out better way to make independent copy of deeply nested array
  const result = JSON.parse(JSON.stringify(matrix));
  result[row] = result[row].map(() => 0);
  for (const row of result) {
    row[column] = 0;
  }
  return result;
};

const zerosInMatrix = matrix => {
  //figure out better way to make independent copy of deeply nested array
  let result = JSON.parse(JSON.stringify(matrix));
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      if (matrix[row][column] === 0) {
        result = transformZeros(result, row, column);
      }
    }
  }
  return result;
};
// const input = [
//   [1, true, 0, "hi"],
//   [null, "apple", 12, "hola"],
//   ["orange", 1, false, "konnichiwa"]
// ];
// const output = [
//   [0, 0, 0, 0],
//   [null, "apple", 0, "hola"],
//   ["orange", 1, 0, "konnichiwa"]
// ];
// console.log(zerosInMatrix(input)); //should be output

// 1.8 Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
// (e.g., "waterbottle" is a rotation of "erbottlewat").

const isSubstring = (s1, s2) => {
  if (typeof s1 !== "string" || typeof s2 !== "string")
    throw new Error("must pass in two strings as arguments");
  return s1.includes(s2) || s2.includes(s1);
};

const isRotation = (s1, s2) => {
  if (typeof s1 !== "string" || typeof s2 !== "string")
    throw new Error("must pass in two strings as arguments");
};

console.log(isSubstring("water", "waterbottle")); // should be true
console.log(isSubstring("waterbottle", "water")); // should be true
console.log(isSubstring("water", "coffee")); // should be false
console.log(isSubstring("waterbottle", "erbottlewat")); //should be false
console.log(isRotation("waterbottle", "erbottlewat")); //should be true
console.log(isRotation("waterbottle", "water")); // should be false
