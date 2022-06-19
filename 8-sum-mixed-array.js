function sumMix(x) {
  return x
    .map((num) => +num)
    .reduce((prev, curr) => Number(prev) + Number(curr));
}
