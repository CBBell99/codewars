function oddOrEven(array) {
  return array.reduce((prev, curr) => prev + curr, 0) % 2 ? "odd" : "even";
}
