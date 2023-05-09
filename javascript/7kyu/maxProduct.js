const maxProduct = array => {
  let result = 0;
  for (let i = 0; i < array.length - 1; i++) {
    let product = array[i] * array[i + 1];
    if (product > result) {
      result = product;
    }
  }
  return result;
};
