const onlyA = array => {
  let result = array.filter(item => item[0] === 'a');
  return result;
};

console.log(onlyA(['apple', 'banana', 'orange']));
