const comp = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 1; j < array2.length; j++) {
      if (array1[i] === Math.sqrt(array2[j])) {
        return true;
      }
    }
  }
  return false;
};

// const comp = (array1, array2) => {
//   let map = {}
//   for (let i = 0; i < array1.length; i++){
//     let map[i] = array1[i]
//     console.log(map);
//   }
// }

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361],
  ),
);
