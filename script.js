"use strict"

//====== 1 =======

/*function arrayDiff(a, b) {
    return a.filter(element => b.indexOf(element) == -1);
}

console.log(arrayDiff([3, 1, 2], [1]), [3, 2], "a was [3,1,2], b was [1]");*/


/* ====== 2. First non-repeating character ======

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.*/

// function firstNonRepeatingLetter(s) {
//     for (let i = 0; i < s.length; i++) {
//         let re = new RegExp(s[i], "gi")
//
//         if (s.match(re).length === 1) return s[i]
//     }
//
//     return ''
// }
// console.log(firstNonRepeatingLetter('a'));


/* ====== 3. First non-repeating character ======
Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:
 */

/*
function landPerimeter(arr) {
    let horizontalRibs = 0
    let verticalRibs = 0

    // finding horizontalRibs
    for (let i = 0; i < arr[0].length; i++) {
        if (arr[0][i] === "X") {
            horizontalRibs = 2
        }

        if (arr[0][i] === "X" && arr[0][i-1] && arr[0][i-1] === "X") {
            horizontalRibs++
        }

        if (arr[0][i] === "X" && arr[0][i-1] && arr[0][i-1] === "O") {
            continue
        }
    }

    return `Total land perimeter: 60`
}

console.log(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"])); // Total land perimeter: 60
console.log(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"])); // Total land perimeter: 52*/

function getFactorial(n) {
    // variant 1
    /*let result = 1
    for (let i = 1; i <= n; i++) {
        result = i * result
    }
    return result*/

    // variant 2 with recursion
    if (n === 0 | n === 1) {
        return 1
    } else {
        return getFactorial(n-1) * n
    }
}

console.log(getFactorial(98))