function isTriangle(a, b, c) {
  return !(a + b <= c || b + c <= a || a + c <= b);
}

console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));
