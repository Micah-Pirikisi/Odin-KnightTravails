function getKnightMoves([x, y]) {
  const moves = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];
  return moves.filter(([a, b]) => a >= 0 && a <= 7 && b >= 0 && b <= 7);
}
