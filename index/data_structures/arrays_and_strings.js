// 1.1 Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const isUnique = string => {
  if (typeof string !== "string") throw new Error("input must be a string");
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

// *** alternative solution that doesn't use any additional data structures:

// helper method that sorts string without converting to array:
const sort = string => {
  let changesMade = false;
  let sortedString = string;

  for (let i = 0; i < string.length - 1; i++) {
    if (sortedString[i] > sortedString[i + 1]) {
      changesMade = true;
      sortedString = sortedString
        .slice(0, i)
        .concat(
          sortedString[i + 1],
          sortedString[i],
          sortedString.slice(i + 2)
        );
    }
  }

  if (changesMade) {
    return sort(sortedString);
  } else {
    return sortedString;
  }
};

const isUniqueAlternative = string => {
  let sortedString = sort(string);
  for (let i = 0; i < string.length - 1; i++) {
    if (sortedString[i] === sortedString[i + 1]) return false;
  }
  return true;
};

// 1.2 Implement a function void reverse(char*str) in C or C++ which reverses a null-terminated string.

// first here's the most obvious solution in JavaScript
// const reverseString = string => {
//   return string
//     .split("")
//     .reverse()
//     .join("");
// };

// alternative JS solution that doesn't use built-in reverse method
const reverseString = string => {
  if (typeof string !== "string") throw new Error("input must be a string");
  let result = string.split("");
  for (let i = 0; i < string.length / 2; i++) {
    const firstOriginal = result[i];
    const secondOriginal = result[result.length - i - 1];
    result[i] = secondOriginal;
    result[result.length - i - 1] = firstOriginal;
  }
  return result.join("");
};

// 1.3 Given two strings, write a method to decide if one is a permutation of the other.
const isPermutation = (stringA, stringB) => {
  if (typeof stringA !== "string" || typeof stringB !== "string")
    throw new Error("must pass in two strings as arguments");
  return (
    JSON.stringify(stringA.split("").sort()) ===
    JSON.stringify(stringB.split("").sort())
  );
};

// 1.4 Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end of the string to hold the additional characters, and that you are given the 'true' length of the string.
// EXAMPLE
// Input: "Mr John Smith     ", 13
// Output: "Mr%20John%20Smith"

//the length of a string isn't fixed in JavaScript, but this alg removes the trailing white spaces according to the defined length

const replaceSpaces = (string, length) => {
  if (typeof string !== "string")
    throw new Error("first argument must be a string");
  if (!length || typeof length !== "number")
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

// 1.8 Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
// (e.g., "waterbottle" is a rotation of "erbottlewat").

// solution using built-in JavaScript includes method
const isSubstring = (s1, s2) => {
  if (typeof s1 !== "string" || typeof s2 !== "string")
    throw new Error("must pass in two strings as arguments");
  return s1.includes(s2) || s2.includes(s1);
};

// helper method that provides functionality of of built-in JavaScript includes method for strings for alternative isSubstring solution
const stringIncludes = (s1, s2) => {
  const charLength = s2.length;
  if (s1.length < charLength) return false;
  for (let i = 0; i < s1.length - charLength; i++) {
    if (s1.slice(i, i + charLength) === s2) return true;
  }
  return false;
};

// alternative solution that uses my own implementation of includes for strings
const isSubstringAlternative = (s1, s2) => {
  if (typeof s1 !== "string" || typeof s2 !== "string")
    throw new Error("must pass in two strings as arguments");
  return stringIncludes(s1, s2) || stringIncludes(s2, s1);
};

// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
const isRotation = (s1, s2) => {
  if (typeof s1 !== "string" || typeof s2 !== "string")
    throw new Error("must pass in two strings as arguments");
  if (s1.length !== s2.length) return false;
  return isSubstring(s1 + s1, s2);
};

module.exports = {
  isUnique,
  isUniqueAlternative,
  reverseString,
  isPermutation,
  replaceSpaces,
  compress,
  rotateImage,
  transformZeros,
  zerosInMatrix,
  isSubstringAlternative,
  isRotation
};
