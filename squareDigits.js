// square every digit of a number individually. (IE, for 24, you square 4, then square 2, then place them next to each other, for 416)

function squareDigits(num) {
	let returnValue = 0,
		place = 1;

	while (num > 0) {

		// Get the last digit
		let numberToBeSquared = num % 10;

		// add the squared value times the place (this places the correct amount of zeroes after
		// the number we are currently adding so that we don't collide with the last iteration)
		returnValue += (numberToBeSquared ** 2) * place;

		// determine if we will need one or two digits of space for this number on the next iteration
		place *= (numberToBeSquared < 4) ? 10 : 100;

		// shave off the digit we used in this iteration
		num = Math.floor(num / 10);
	}

	return returnValue;
}

console.log(squareDigits(910192));