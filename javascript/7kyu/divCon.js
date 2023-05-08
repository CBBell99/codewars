const divCon = x => {
  let nonString = x.filter(e => typeof e === 'number');
  let string = x.filter(e => typeof e === 'string');
  let total = nonString.reduce((prev, curr) => prev + curr, 0);
  let parsedString = string.map(s => +s);

  return total - parsedString.reduce((prev, curr) => prev + curr, 0);
};

console.log(divCon([9, 3, '7', '3']));
// console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));
