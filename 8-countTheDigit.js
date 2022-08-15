function nbDig(n, d) {
  let result = "";
  for (let i = 0; i <= n; i++) {
    result += i ** 2;
  }
  return result.split(d).length - 1;
}
