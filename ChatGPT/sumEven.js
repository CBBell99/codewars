const sumEven = array => {
  const even = array.filter(item => item % 2 === 0);
  return even.reduce((prev, curr) => prev + curr, 0);
};
