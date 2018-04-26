// Every odd number > 5 can be expressed as the sum of 3 (possibly repeating) primes. Find them.
// https://www.reddit.com/r/dailyprogrammer/comments/8bh8dh/20180411_challenge_356_intermediate_goldbachs/

function golbach(n) {
	// get odd numbers up to n-4 in descending order (our largest prime has to be less than n-4, because our smallest prime is 2)
	let odds = [...Array(n-4).keys()].filter(x => x % 2).sort((a, b) => b - a);

	// 1 isn't prime, but 2 is, so change last value to 2
	odds[odds.length - 1] = 2;
	let primes = [];

	// work our way through the array of odds, taking the first element
	while (odds.length > 0) {
		let x = odds.pop();
		primes.push(x);
		odds = odds.filter(y => y % x);
	}

	// n = 2b + a, where a and b are primes
	let result = primes
		.map(a => (n - a) / 2) //get possible b vals
		.filter(x => primes.includes(x)) // filter out non-prime B's
		.map(b => [n - (2 * b), b, b]); // return array with a,b,b

	// I've chosen to return multiple solutions where I have calculated them. Additionally, I am returning n alongside it just to make it easy to see what number we're looking at.
	return [n, ...result];
}

console.log([11, 35, 111, 17, 199, 287, 53].map(n => golbach(n)));
