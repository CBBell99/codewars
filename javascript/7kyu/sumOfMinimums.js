const sumOfMinimums = array => {
  return array
    .map(row => Math.min(...row))
    .reduce((prev, curr) => prev + curr, 0);
};
const twoDArray = [
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [20, 21, 34, 56, 100],
];

console.log(sumOfMinimums(twoDArray));
