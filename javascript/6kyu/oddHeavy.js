const isOddHeavy = nums => {
  const odds = nums.filter(num => num % 2 === 1);
  const even = nums.filter(num => num % 2 === 0);
  const highEven = Math.max(...even);
  for (let i = 0; i < odds.length; i++) {
    if (odds[i] > highEven) return true;
  }
  return false;
};

console.log(isOddHeavy([0, 2, 19, 4, 4])); //true
console.log(isOddHeavy([1, -2, -1, 2])); //false)
console.log(isOddHeavy([11, 4, 9, 2, 8])); //truue
