function noBoringZeros(n) {
  if (n === 0) return n;
  if (n % 10 === 0) return noBoringZeros(n / 10);
  else return n;
}
