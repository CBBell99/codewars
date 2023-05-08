function getNestedValue(obj, path) {
  const keys = path.split('.');
  let value = obj;
  for (const key of keys) {
    if (!value.hasOwnProperty(key)) {
      return undefined;
    }
    value = value[key];
  }
  return value;
}

const obj = { a: { b: { c: 1 } } };

console.log(getNestedValue(obj, 'a.b.d')); // undefined
console.log(getNestedValue(obj, 'a.b.c')); // 1
