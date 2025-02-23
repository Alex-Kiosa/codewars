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


/* ====== 4 ======
Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:
 */

// function landPerimeter(arr) {
//     // finding horizontalRibs
//     for (let y = 0; y < arr.length; y++) {
//         for (let x= 0; x< arr[i].length; x++) {

//         }
//     }

//     return `Total land perimeter: 60`
// }

// console.log(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"])); // Total land perimeter: 60
// console.log(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"])); // Total land perimeter: 52


/* ====== 5. Get factorial ======
/*
function getFactorial(n) {
    if (n === 0 || n === 1) { // базовый случай
        return 1
    } else { // рекурсивный случай, шаг рекурсии
        return getFactorial(n - 1) * n
    }
}

console.log(getFactorial(98))*/


/* ====== 6. Recursive traversal ======
let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
}

function sumSalaries(department) {
    // базовый случай
    if (Array.isArray(department)) {
        let sum = 0;
        for (let i = 0; i < department.length; i++) {
            sum += department[i].salary
        }
        return sum
    } else { // шаг рекурсии
        let sum = 0;
        for (let key in department) {
            sum += sumSalaries(department[key])
        }
        return sum
    }
}

console.log(sumSalaries(company))*/

/* ====== 7. palindrome ======*/
// function isPalindrome(string) {
//     const str = string.toLowerCase()
//
//     return str.split('').reverse().join('') === str
// }

/* ====== 8. checkCoupon ====== */
/*
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return new Date(currentDate) <= new Date(expirationDate) && enteredCode === correctCode
}*/

// ====== 9. Simple Pig Latin ======
function pigIt(str){
    const arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if(!/[^\w\s]/.test(arr[i])) {
            arr[i] = arr[i].substring(1, arr[i].length) + arr[i][0] + 'ay'
        }
    }

    // const arr = str.split(' ').map((element) => element = element.substring(1, element.length) + element[0] + 'ay')

    return arr.join(' ')
}

console.log(pigIt('Pig latin is cool')) //igPay atinlay siay oolcay
console.log(pigIt('This is my string')) //hisTay siay ymay tringsay
console.log(pigIt('Hello world !')) //elloHay orldway !