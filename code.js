const board = [
  [0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0],
];

function validMoves(x, y, steps, currentSteps) {
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

  const validQueue = [];

  moves.forEach((move) => {
    const xMove = x + move[0];
    const yMove = y + move[1];
    if (xMove < 0 || xMove > 8 || yMove < 0 || yMove > 8) {
      // Do nothing
      // console.log(xMove, yMove);
    } else
      validQueue.push([
        xMove,
        yMove,
        steps + 1,
        [...currentSteps, [xMove, yMove]],
      ]);
  });

  return validQueue;
}

function knightMoves(from, to) {
  const [startX, startY] = from;
  const [endX, endY] = to;

  const queue = [[startX, startY, 0, [[startX, startY]]]];

  while (true) {
    const [x, y, steps, currentSteps] = queue.shift();
    if (x == endX && y == endY) {
      console.log(`It took ${steps}steps. Here was your path:`);
      currentSteps.forEach((step, index) => {
        console.log(`${index}: [${step[0]},${step[1]}]`);
      });
      break;
    }
    queue.push(...validMoves(x, y, steps, currentSteps));
  }
}

knightMoves([0, 0], [3, 3]); // 1, 2 or 2, 1 to 3, 3
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
knightMoves([0, 0], [1, 0]);
