function add (a, b) {
	return a+b;
}

function subtract (a, b) {
	return a-b;
}

function sum (a) {
	let sum = 0;
	for ( let i=0; i < a.length; i++) {
		sum += +a[i];
	}
	return sum;
}

function multiply (a) {
	let product = 1;
	for ( let i=0; i < a.length; i++) {
		product *= +a[i];
	}
	return product;
}

function power(a, b) {
	return a**b;
}

function factorial(a) {
	let factorial = 1;
	if (a==0) {
		return 1;
	} else {
		for (let i = 1; i <= a; i++) {
		factorial *= i;
		}
		return factorial;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}