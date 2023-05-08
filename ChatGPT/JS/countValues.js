const countValues = val => {
  let result = {};
  val.forEach(element => {
    const value = element.value;
    if (result.hasOwnProperty(value)) {
      result[value]++;
    } else {
      result[value] = 1;
    }
  });
  return result;
};

const arr = [
  { value: 3 },
  { value: 2 },
  { value: 3 },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 2 },
  { value: 1 },
  { value: 1 },
];

console.log(countValues(arr)); //{  1: 3,  2: 3,  3: 3,}
console.log(countValues([1, 2, 3, 3, 3, 4, 4, 5])); // {1: 1, 2: 1, 3: 3, 4: 2, 5: 1}
