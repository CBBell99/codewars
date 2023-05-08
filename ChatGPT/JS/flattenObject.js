function flattenObject(obj) {
  const result = {};
  const stack = [[obj, '']];

  while (stack.length > 0) {
    const [currentObj, currentKey] = stack.pop();
    Object.entries(currentObj).forEach(([key, value]) => {
      const newKey = currentKey ? `${currentKey}.${key}` : key;
      if (typeof value === 'object') {
        stack.push([value, newKey]);
      } else {
        result[newKey] = value;
      }
    });
  }

  return result;
}

const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
};

console.log(flattenObject(obj));

// {
//   "a": 1,
//   "b.c": 2,
//   "b.d.e": 3,
//   "b.d.f": 4
// }
