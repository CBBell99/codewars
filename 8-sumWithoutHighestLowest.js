const sumNums = (acc, cur) => acc + cur;

function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce(sumNums, 0) - Math.min(...array) - Math.max(...array)
    : 0;
}
