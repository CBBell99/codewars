const flattenArray = array => {
  let result = [];
  array.forEach(el => {
    result.push(...el);
  });
  return result;
};

const array = [[1, 2], [3, 4, 5], [6]];

console.log(flattenArray(array));
