const countValues = array => {
  let result = {};
  console.log(array);
  for (let i of array) {
    result.hasOwnProperty(i) ? (result[i] += 1) : (result[i] = 1);
  }
  return result;
};

console.log(countValues([1, 2, 3, 3, 3, 4, 4, 5])); // {1: 1, 2: 1, 3: 3, 4: 2, 5: 1}
