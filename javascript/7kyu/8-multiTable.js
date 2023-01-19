function multiTable(number) {
  let multiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result;
  multiplier.map((el) =>
    el === 10
      ? (result += `${el} * ${number} = ${el * number}`)
      : (result += `${el} * ${number} = ${el * number}\n`)
  );
  return result;
}

console.log(multiTable(5));
