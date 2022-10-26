function stray(array) {
  var sorted = array.sort((a, b) => a - b);
  return sorted[0] === sorted[1] ? sorted.pop() : sorted.shift();
}
