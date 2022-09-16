function getDivisorsCnt(n) {
  let result = 0;
  for (let i = n; i > 0; i--) {
    if (n % i === 0) {
      result++;
    }
  }
  return result;
}
