const knightMoveset = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

function knightMoves(start, end) {
  const queue = [[start[0], start[1], 0, [[start[0], start[1]]]]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    counter++;
    const [x, y, steps, currentSteps] = queue.shift();
    if (x == end[0] && y == end[1]) {
      console.log(`It took ${steps}steps. Here was your path:`);
      currentSteps.forEach((step, index) => {
        console.log(`${index}: [${step[0]},${step[1]}]`);
      });
      break;
    }

    knightMoveset.forEach((move) => {
      const newX = x + move[0];
      const newY = y + move[1];
      if (
        newX < 0 ||
        newX > 8 ||
        newY < 0 ||
        newY > 8 ||
        visited.has([newX, newY].toString())
      ) {
        // Do nothing
      } else {
        visited.add([newX, newY].toString());
        queue.push([newX, newY, steps + 1, [...currentSteps, [newX, newY]]]);
      }
    });
  }
}

knightMoves([0, 0], [3, 3]); // 1, 2 or 2, 1 to 3, 3
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
knightMoves([0, 0], [1, 0]);
