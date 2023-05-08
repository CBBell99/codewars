const findDuplicates = arr => {
  const seen = {};
  let newArr = [];
  for (let i of arr) {
    if (seen[i]) {
      newArr.push(i);
    } else {
      seen[i] = true;
    }
  }
  return newArr;
};

console.log(findDuplicates([1, 2, 3, 2, 5, 4, 4, 6])); // should return [2, 4]
console.log(findDuplicates([1, 1, 1, 1])); // should return [1]
console.log(findDuplicates([1, 2, 3, 4])); // should return []
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 5, 6, 6])); // should return [2, 5, 6]
console.log(findDuplicates(['apple', 'banana', 'pear', 'banana', 'kiwi'])); // should return ['banana']
console.log(findDuplicates([1, 2, 3, 4, 5])); // should return []
