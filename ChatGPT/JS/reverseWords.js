// const reverseWords = string => string.split(' ').reverse().join(' ');
const reverseWords = string => {
  let array = string.split(' ');
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.unshift(array[i]);
  }
  return result.join(' ');
};

console.log(reverseWords('hello world')); // 'world hello'
console.log(reverseWords('this is a test')); // 'test a is this'
