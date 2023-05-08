// Problem: Write a function that takes two arrays of numbers and returns a new array containing the unique values that appear in either array

// Example:
// input: [1, 2, 3], [2, 3, 4]
// output: [1, 2, 3, 4]

const mergeArrays = (arr1, arr2) => {
  let mergedArray = [...arr1];
  for (let i of arr2) {
    if (!arr1.includes(i)) {
      mergedArray.push(i);
    }
  }
  return mergedArray;
};

console.log(mergeArrays([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
