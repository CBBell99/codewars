const getProperties = (obj, array) => {
  let result = {};
  for (let i of array) {
    if (obj.hasOwnProperty(i)) {
      result[i] = obj[i];
    }
  }
  return result;
};

const obj = { a: 1, b: 2, c: 3 };
const properties = ['a', 'c', 'd'];

console.log(getProperties(obj, properties)); // { a: 1, c: 3 }
