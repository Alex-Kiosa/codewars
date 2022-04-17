"use strict"

// RGB to HEX conversion
function inRange(x) {
	if ((x - 0) * (x - 255) <= 0) {
		return x;
	} else if (x < 0) {
		return 0;
	} else {
		return 255;
	}
}

function rgb(r, g, b) {
	let itemsBase16 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
	let arr1 = [], arr2 = [], arr3 = [], 
		q1 = inRange(r),
		q2 = inRange(g),
		q3 = inRange(b);

	for (let i = 2; i > 0; i--) {
		arr1.unshift(itemsBase16[q1 % 16]);
		q1 = Math.floor(q1 / 16);
	}

	for (let i = 2; i > 0; i--) {
		arr2.unshift(itemsBase16[q2 % 16]);
		q2 = Math.floor(q2 / 16);
	}

	for (let i = 2; i > 0; i--) {
		arr3.unshift(itemsBase16[q3 % 16]);
		q3 = Math.floor(q3 / 16);
	}

	return arr1.concat(arr2, arr3).join('');
}

rgb(0, 0, -20) // returns 000000
rgb(300,255,255) // returns FFFFFF
rgb(173,255,47) // returns ADFF2Fs
