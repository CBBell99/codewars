const getUniqueKeys = val => {
  let result = new Set();
  console.log(val);
};

const arr = [
  { a: 1, b: 2 },
  { b: 3, c: 4 },
  { c: 5, d: 6 },
];

console.log(getUniqueKeys(arr)); // ['a', 'b', 'c', 'd']
