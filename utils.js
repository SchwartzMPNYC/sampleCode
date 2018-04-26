// These are just miscellaneous functions that I find myself using sometimes

let a = ["a", "b", "c"],
	b = [1, 2, 3],
	c = [a, b, [["asd", "sdaf"], ["hdg"]]];

// Zips two arrays together. Equivalent of zip() in python.
const zip = (arr1, arr2) => arr1.map((a, index) => [a, arr2[index]]);
// console.log(zip(a, b));

// shallowly flatten an array
const flatten = array => [].concat(...array);
// console.log(c[2]);
// console.log(flatten(c[2]));
// console.log(flatten(c));

// deeply flatten an array
const deepFlatten = array => array.reduce((resultArray, currentItem) => (Array.isArray(currentItem) ? resultArray.concat(deepFlatten(currentItem)) : resultArray.concat(currentItem)), []);
// console.log(deepFlatten(c));

// generate an array of n numbers, similiar to python's range()
const range = n => [...Array(n).keys()];
// console.log(range(10));


