function highestRank(arr) {
  return arr.sort(
    (a, b) =>
      arr.filter((i) => i === b).length - arr.filter((i) => i === a).length
  )[0];
}
