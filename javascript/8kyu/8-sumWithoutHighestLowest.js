function sumArray(array) {
  if (array === null || array.length < 2) return 0;
  let max = Math.max(...array);
  let min = Math.min(...array);
  console.log("max", max);
  console.log("min", min);
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum - max - min;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([1, 2]));
console.log(sumArray(null));
