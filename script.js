"use strict"

function isNarcissistic(n){
	let str = n.toString();
	let result = 0;
	for (let i = 0; i < str.length; i++) {
		result += Math.pow(str[i], str.length);
	}
 	return result === n;
}

console.log(isNarcissistic(370), true);
console.log(isNarcissistic(324), false);
console.log(isNarcissistic(371), true);
console.log(isNarcissistic(4328), false);
console.log(isNarcissistic(407), true);
console.log(isNarcissistic(3248), false);
console.log(isNarcissistic(54748), true);
console.log(isNarcissistic(92727), true);
console.log(isNarcissistic(93084), true);

/*function isValidIP(str) {
	let regexp = /[1-2]{0,}[0-5]{0,}[0-5]/;
	
	return regexp.test(str);
}*/

/*function isValidIP(str) {
	let octet = str.split(".");
	let result;

	for (let i = 0; i < octet.length; i++) {
		let isValidNumber = (octet[i] >= 0 && octet[i] <= 255);
		if (!isValidNumber || octet[i] == '' || /^0\d/.test(octet[i]) || !octet.length == 4) {
			result = false;
			break;
		} else {
			result = true;
		}
	}

	return result;
}*/

/*console.log(isValidIP("0.0.0.0"), true); // true
console.log(isValidIP("02.03.04.0"), false); // false
console.log(isValidIP("12.255.56.1"),true); // 
console.log(isValidIP("137.255.156.100"), true); // true
console.log(isValidIP(''), false); // false
console.log(isValidIP('abc.def.ghi.jkl'), false); // false
console.log(isValidIP('123.456.789.0'), false); // false
console.log(isValidIP('12.34.56'), false); // false*/
