function findDifference(a, b) {
  return Math.abs(
    a.reduce((prev, curr) => prev * curr) -
      b.reduce((prev, curr) => prev * curr)
  );
}
console.log(findDifference([2, 2, 3], [5, 4, 1]));
