function largestPairSum(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((a, b) => a + b, 0);
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
