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

function firstNonRepeatingLetter(s) {
    for (let i = 0; i < s.length; i++) {
        let re = new RegExp(s[i], "gi")

        if (s.match(re).length === 1) return s[i]
    }

    return ''
}
console.log(firstNonRepeatingLetter('a'));