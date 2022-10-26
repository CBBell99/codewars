var summation = function (num) {
  return Array(num)
    .fill(0)
    .reduce((acc, _, index) => acc + index + 1, 0);
};
