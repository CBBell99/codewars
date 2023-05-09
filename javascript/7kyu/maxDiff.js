const maxDiff = list => {
  let highest = -Infinity;
  let lowest = Infinity;
  if (list.length <= 1) return 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] > highest) {
      highest = list[i];
    }
    if (list[i] < lowest) {
      lowest = list[i];
    }
  }

  return highest - lowest;
};

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])); //, 6);
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6])); //, 11);
// console.log(maxDiff([0, 1, 2, 3, 4, 5, 16])); //, 16);
// console.log(maxDiff([16])); //, 0);
// console.log(maxDiff([])); //, 0);
