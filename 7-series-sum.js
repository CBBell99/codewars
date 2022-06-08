function SeriesSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (i * 3 + 1);
  }
  return sum.toFixed(2);
}
