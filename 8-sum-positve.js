function positiveSum(arr) {
  return arr
    .filter((number) => number > 0)
    .reduce((accumulator, current) => accumulator + current, 0);
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
