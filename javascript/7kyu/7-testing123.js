var number = function (array) {
  return array.map((el, i) => `${i + 1}: ${el}`);
};

let arr = ["a", "b", "c"];

console.log(number(arr));
