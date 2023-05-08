const findLongestWord = words => {
  let result = '';
  for (let word of words) {
    if (word.length > result.length) {
      result = word;
    }
  }
  return result.length;
};

console.log(findLongestWord(['cat', 'dog', 'elephant', 'giraffe'])); // returns 8
