"use strict"

let count = 0;

function cc(card) {
  // Only change code below this line

  if (/[2-6]/.test(card)) {
    count ++;
  } else if (card === 10 || /[JQKA]/.test(card)) {
  	count --;
  }

  if (count > 0) return count + " Bet";
  return count + " Hold";
  // Only change code above this line
}

console.log(cc('2'));
console.log(cc('J'));
console.log(cc('9'));
console.log(cc('2'));
console.log(cc('7'));