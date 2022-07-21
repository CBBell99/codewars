function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let num;
  let nextNum;
  if (Math.sqrt(sq) % 1 === 0) {
    num = Math.sqrt(sq);
    nextNum = num + 1;
  } else {
    return -1;
  }
  return nextNum * nextNum;
}
