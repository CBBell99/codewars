const vowelCount = string => {
  let count = 0;
  let vowels = /[aeiouAEIOU]/;
  for (let i = 0; i < string.length; i++) {
    if (vowelCount.test(string[i])) {
      count++;
    }
  }
  return count;
};
