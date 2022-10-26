function sum(numbers) {
  return numbers.reduce((prev, curr) => prev + curr, 0);
}

console.log(sum([1, 5.2, 4, 0, -1])); // 9.2
console.log(sum([])); // 0
console.log(sum([-2.398])); // -2.398
