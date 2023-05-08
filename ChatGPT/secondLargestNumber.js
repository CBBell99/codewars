const secondLargestNumber = array => {
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    }
  }
  return secondLargest;
};

const num = [1, 2, 3, 4, 5];
console.log(secondLargestNumber(num));
