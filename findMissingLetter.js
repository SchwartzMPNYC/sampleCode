// Given a sorted array of lowercase letters, find the letter that has been skipped.

findMissingLetter = array =>
	String.fromCharCode(
		array
			// get array of char codes
			.map(letter => letter.charCodeAt(0))
			// if the next letter's char code is more than 1 greater than the current char code, there must be a skipped letter.
			// return that char code to String.fromCharCode to get the letter in question.
			.filter((charCode, index, numArray) => numArray[index + 1] - charCode > 1)[0] + 1
	);

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
