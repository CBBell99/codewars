function index(array, n) {
  let length = array.length;
  if (n >= length) return -1;
  return array[n] ** n;
}
console.log(index([1, 2, 3, 4], 2));
console.log(index([1, 2, 3], 3));
