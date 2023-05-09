const menFromBoys = array => {
  let evens = [];
  let odds = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
    } else {
      odds.push(array[i]);
    }
  }
  evens = [...new Set(evens)].sort((a, b) => a - b);
  odds = [...new Set(odds)].sort((a, b) => b - a);
  return [...evens, ...odds];
};

console.log(menFromBoys([82, 91, 72, 76, 76, 100, 85]));
console.log(menFromBoys([-32, -39, -35, -41]));
