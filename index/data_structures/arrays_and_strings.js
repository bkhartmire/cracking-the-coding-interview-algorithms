// 1.1 Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
const isUnique = string => {
    const characters = {}
    for (const char of string) {
        if (characters[char]) {
            return false
        } else {
            characters[char] = 1
        }
    }
    return true
}
// console.log(isUnique("hello")) // should be false
// console.log(isUnique("helium")) // should be true
// console.log(isUnique("unique")) // should be false
// console.log(isUnique("uniqlo")) // should be true

// 1.2 Implement a function void reverse(char*str) in C or C++ which reverses a null-terminated string.

// 1.3 Given two strings, write a method to decide if one is a permutation of the other.

// 1.4 Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end of the string to hold the additional characters, and that you are given the 'true' length of the string.
// EXAMPLE
// Input: "Mr John Smith     ", 13
// Output: "Mr%20John%20Smith"

// 1.5 Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string wouldn ot become smaller than the original string, your method should return the original string. You can assume the string has only upper and lower case letters (a-z)

// 1.6 Given an image represented by an NxN marix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

// 1.7 Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

// 1.8 Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").