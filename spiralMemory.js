/*
Full prompt: http://adventofcode.com/2017/day/3

Each square on the grid is allocated in a spiral pattern starting at a location marked 1 and then counting up while spiraling outward.

While this is very space-efficient (no squares are skipped), requested data must be carried back to square 1 
(the location of the only access port for this memory system) by programs that can only move up, down, left, or right.
They always take the shortest path: the Manhattan Distance between the location of the data and square 1.

How many steps are required to carry the data from the square identified in your puzzle input all the way to the access port?

Puzzle input: 361527
Puzzle answer: 326

*/
const spiralMemory = memoryLocation => {
	// special case
	if (memoryLocation === 1) return 0;

	// Length of side of memory location is closest odd integer >= square root of memory location
	let sqrt = Math.ceil(Math.sqrt(memoryLocation));
	let sideLength = sqrt % 2 == 1 ? sqrt : ++sqrt;

	// Last value in ring containing memory location
	let endValueInRing = sideLength ** 2;

	// Calculate which side of the ring our mem location is on
	let sideNum = Math.floor((endValueInRing - memoryLocation) / (sideLength - 1));

	// Calculate the closest corner in our ring to the memory location
	let closestCorner = endValueInRing - (sideLength - 1) * sideNum;

	// get how many squares we need to move from end of side to get to middle
	let middleOfSideOffset = Math.ceil(sideLength / 2) - 1;

	// get middle value in side of ring that our memory location is in
	let middleOfSide = closestCorner - middleOfSideOffset;

	// how far we have to move in the ring to be in line with the center
	let distToMiddleOfSide = middleOfSide - memoryLocation;

	// how may layers out is our ring
	let distanceOfRing = (sideLength - 1) / 2;

	// total distance = abs(how far you have to move to be in line with center) + how many layers from the center you are
	let totalDistanceTraveled = distanceOfRing + Math.abs(distToMiddleOfSide);

	return totalDistanceTraveled;
};

// testing
[1, 12, 23, 1024, 361527].map(x => console.log(`${x}: ${spiralMemory(x)}`));

exports.spiralMemory = spiralMemory;
