// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).slice(-2);
}

console.log(twoOldestAges([1, 2, 10, 8]));
