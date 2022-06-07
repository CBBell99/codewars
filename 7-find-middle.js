function gimme(triplet) {
  let sorted = [...triplet].sort((a, b) => a - b);
  return triplet.indexOf(sorted[1]);
}

console.log(gimme([2, 3, 1]));
console.log(gimme([5, 10, 14]));
