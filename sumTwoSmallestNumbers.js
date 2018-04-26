// Get sum of smallest two numbers in an array.
function sumTwoSmallestNumbers(numbers) {
	[a, b] = numbers.sort((a, b) => a - b);
	return a + b;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
