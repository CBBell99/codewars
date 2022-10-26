function sumMul(n, m) {
  let r = 0;
  for (let i = 1; i * n < m; i++) {
    r += i * n;
  }
  return r > 0 ? r : "INVALID";
}
