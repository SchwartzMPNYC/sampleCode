// Split string into array of chars -> use reduce to assemble return string. If current char == '!' check to see if n > 0.
// If both are true, decrement n and add '' instead of current char.
const removeExclamations = (s, n) => [...s].reduce((str, curChar) => str + (curChar === "!" ? (n-- > 0 ? "" : curChar) : curChar), "");


// testing w/ Mocha.js
const assert = require("assert");

describe("Test removeExclamations", function() {
	it('removeExclamations("!!!Hi !!hi!!! !hi", 10) returns "Hi hi hi"', function() {
		assert.equal(removeExclamations("!!!Hi !!hi!!! !hi", 10), "Hi hi hi");
	});
	it('removeExclamations("!!!Hi !!hi!!! !hi", 1) returns "!!Hi !!hi!!! !hi"', function() {
		assert.equal(removeExclamations("!!!Hi !!hi!!! !hi", 1), "!!Hi !!hi!!! !hi");
	});
	it('removeExclamations("!!!Hi !!hi!!! !hi", 4) returns "Hi !hi!!! !hi"', function() {
		assert.equal(removeExclamations("!!!Hi !!hi!!! !hi", 4), "Hi !hi!!! !hi");
	});
});
