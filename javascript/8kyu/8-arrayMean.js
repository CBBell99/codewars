var findAverage = function (nums) {
  return nums.reduce((accum, curr) => accum + curr) / nums.length;
};

console.log(findAverage([1]));
console.log(findAverage([1, 3, 5, 7]));
