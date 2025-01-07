const moves = [
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
  const queue = [[start[0], start[1], 0]];
  const visited = new Set();
  const previous = {};
  visited.add(start.toString());

  while (queue.length > 0) {
    const [x, y, steps] = queue.shift();
    if (x == end[0] && y == end[1]) {
      console.log(`${steps} steps were taken, below is your path:`);
      let current = `${x},${y}`;
      const path = [current];
      while (previous[current]) {
        path.push(previous[current]);
        current = previous[current];
      }
      // As we found found path by going in reverse, we have to reverse order
      path.reverse();

      path.forEach((move, index) => {
        console.log(`${index}: ${move}`);
      });

      return;
    }

    moves.forEach((move) => {
      const newX = x + move[0];
      const newY = y + move[1];
      const key = `${newX},${newY}`;
      if (newX < 0 || newY < 0 || visited.has(key) || newX > 8 || newY > 8) {
        // Skip
      } else {
        visited.add(key);
        previous[key] = `${x},${y}`;
        queue.push([newX, newY, steps + 1]);
      }
    });
  }
}

knightMoves([0, 0], [3, 3]); // 1, 2 or 2, 1 to 3, 3
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
knightMoves([0, 0], [1, 0]);
