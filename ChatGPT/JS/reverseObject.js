const reverseObject = obj => {
  let result = {};
  let array = Object.entries(obj);
  array.map(arr => {
    arr.reverse();
    console.log(arr.reverse());
  });
};

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { x: 'apple', y: 'banana', z: 'cherry' };
const obj3 = { true: 1, false: 0 };
const obj4 = {};
const obj5 = { a: { b: { c: 'nested' } } };

console.log(reverseObject(obj1)); // {1: 'a', 2: 'b', 3: 'c'}
console.log(reverseObject(obj2)); // {'apple': 'x', 'banana': 'y', 'cherry': 'z'}
console.log(reverseObject(obj3)); // {1: 'true', 0: 'false'}
console.log(reverseObject(obj4)); // {}
console.log(reverseObject(obj5)); // {'[object Object]': 'a'}
