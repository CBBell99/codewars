function digitize(num) {
  return num.toString().split('').reverse().map(Number);
}