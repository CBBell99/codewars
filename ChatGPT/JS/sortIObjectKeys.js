const sortObjectKeys = obj => {
  let result = {};
  const keys = Object.keys(obj).sort();
  keys.forEach(key => {
    console.log(key);
    result[key] = obj[key];
  });
  return result;
};

const obj = {
  b: 2,
  a: 1,
  c: 3,
};

console.log(sortObjectKeys(obj));
