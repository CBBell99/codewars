function arithmetic(a, b, operator) {
  //your code here!
  const operation = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };
  return operation[operator];
}
