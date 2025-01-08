const adjacencyList = new Map();

const possibleMoves = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];
const ROWS = 8;
const COLS = 8;

function generatePairings() {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const key = row + "," + col;
      adjacencyList.set(key, []);

      possibleMoves.forEach(([moveX, moveY]) => {
        const x = row + moveX;
        const y = col + moveY;
        const coordStr = `${x},${y}`;

        if (x < 0 || x >= COLS || y < 0 || y >= ROWS) {
          return;
        }
        adjacencyList.get(key).push(coordStr);
      });
    }
  }
}

generatePairings();

function validInputData(x, y) {
  return !(x < 0 || x > COLS || y < 0 || y > ROWS);
}

function knightMoves([startX, startY], [endX, endY]) {
  if (!validInputData(startX, startY) || !validInputData(endX, endY)) {
    console.error("Invalid input data");
    return;
  }

  const visited = new Set();
  const startKey = startX + "," + startY;
  const endKey = endX + "," + endY;
  visited.add(startKey);
  const previous = {};
  const queue = [[startKey, 0]];
  let queueIndex = 0;

  while (queue.length > 0) {
    const [key, steps] = queue[queueIndex++];
    if (key === endKey) {
      console.log(`${steps} it took to find. Path as follows: `);
      const path = [key];
      let current = previous[key];
      while (current) {
        path.push(current);
        current = previous[current];
      }
      // As we went back through, path, we flip array
      path.reverse();
      path.forEach((step, index) => {
        console.log(`${index}: ${step}`);
      });
      return;
    }
    adjacencyList.get(key).forEach((newKey) => {
      if (!visited.has(newKey)) {
        queue.push([newKey, steps + 1]);
        visited.add(newKey);
        previous[newKey] = key;
      }
    });
  }
}

knightMoves([0, 0], [3, 3]); // 1, 2 or 2, 1 to 3, 3
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
knightMoves([0, 0], [1, 0]);
knightMoves([-1, -3], [1, 0]);
