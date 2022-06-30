function stairsIn20(stairs) {
  return (
    20 *
    stairs.reduce(
      (prev1, curr1) =>
        prev1 + curr1.reduce((prev2, curr2) => prev2 + curr2, 0),
      0
    )
  );
}
