/*
Robot takes number steps (on a 2-D plane) listed in each instruction value and then turns right.
Robot stops when out of instructions, or when it crosses an already traversed path.
Funciton robotWalk() returns robot's final location.
*/

function robotWalk(instructions) {
	var coordinatesVisited = [[0, 0]],
		currentCoords = [0, 0],
		direction = 0;

	// directions: 0 = N, 1 = E, 2 = S, 3 = W
	// Turn robot to the right. Mod 4 allows us to cycle back around to our 0-3 direction markers
	const turn = () => ++direction % 4;

	function takeSteps(steps) {

		// (1+direction) % 2 provides proper index. directions > 2 mean south or west, so we need to subtract.
		currentCoords[(1 + direction) % 2] += (direction < 2) ? steps : -steps;

		direction = turn();
		coordinatesVisited.push([currentCoords[0], currentCoords[1]]);

		// Check to see if there has been an intersection
		// cannot cross path until at least 4th step
		if (coordinatesVisited.length > 3) {
			for (i = 0; i < coordinatesVisited.length - 1; i++) {
				var doesIntersect = checkIntersection(
					[coordinatesVisited[coordinatesVisited.length - 2],coordinatesVisited[coordinatesVisited.length - 1]],
					[coordinatesVisited[i], coordinatesVisited[i + 1]]
				);
				if (doesIntersect) return doesIntersect;
			}
		} 
		return currentCoords;
	}

	function checkIntersection(currentLine, oldLine) {
		// lines are arrays holding x and y values
		// First dimension refers to start or end point, second dimension refers to x or y value of said point

		// lines starts from last line, and cannot intersect
		if (currentLine[0] == oldLine[1]) return false;

		var intersect = true;

		// formula for line a*x + b*y + c = 0
		var a1 = currentLine[1][1] - currentLine[0][1],
			b1 = currentLine[0][0] - currentLine[1][0],
			c1 = currentLine[0][0] * currentLine[0][1] - currentLine[1][0] * currentLine[1][1],

			a2 = oldLine[1][1] - oldLine[0][1],
			b2 = oldLine[0][0] - oldLine[1][0],
			c2 = oldLine[0][0] * oldLine[0][1] - oldLine[1][0] * oldLine[1][1],

			r3 = a1 * oldLine[0][0] + b1 * oldLine[0][1] + c1,
			r4 = a1 * oldLine[1][0] + b1 * oldLine[1][1] + c1,
			r1 = a2 * currentLine[0][0] + b2 * currentLine[0][1] + c2,
			r2 = a2 * currentLine[1][0] + b2 * currentLine[1][1] + c2;

		const signsMatch = (rA, rB) => rA * rB > 0;

		// If two ends of a line are on the same side of the other line, then the two lines must not cross.
		if (r3 !== 0 && r4 !== 0 && signsMatch(r3, r4)) intersect = false;
		else if (r1 !== 0 && r2 !== 0 && signsMatch(r1, r2)) intersect = false;
		if (a1 * b2 - a2 * b1 == 0) intersect = false; // same line

		// If the lines intersect, find actual point of intersection
		if (intersect) {
			// By figuring out which which line travels horizontally and which vertically (by seeing which line has matching values for x/y
			// on the two points, we can determine where they must cross).
			const getMatchingXValue = (currentLine, oldLine) => currentLine[0][0] === currentLine[1][0] ? currentLine[0][0] : oldLine[0][0];
			const getMatchingYValue = (currentLine, oldLine) => currentLine[0][1] === currentLine[1][1] ? currentLine[0][1] : oldLine[0][1];

			return [getMatchingXValue(currentLine, oldLine), getMatchingYValue(currentLine, oldLine)];
		}
		else return false;
	}

	// Use map to follow instructions array. The last array value will be the final stopping point, so pop it.
	return instructions.map(instruction => takeSteps(instruction)).pop();


}

// testing purposes.
console.log(robotWalk([1, 2, 4]));
console.log(robotWalk([1, 2, 4, 1, 5]));
