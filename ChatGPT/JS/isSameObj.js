const isSameObj = (a, b) => {
  return a === b;
};

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = obj1;

console.log(isSameObj(obj1, obj2)); // false
console.log(isSameObj(obj1, obj3)); // true
