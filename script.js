"use strict"

function arrayDiff(a, b) {	
	a.forEach(element => {
		let index;
		for(let i = 0; i < b.length; i++) {
			index = a.indexOf(b[i]);
			if (index > -1) {
				a.splice(index, 1);
			}
		}
	});

	return a;
}

console.log(arrayDiff([3,1,2], [1]), [3,2], "a was [3,1,2], b was [1]");
console.log(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
console.log(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
console.log(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
console.log(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
console.log(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
console.log(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
