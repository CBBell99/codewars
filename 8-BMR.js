function bmr(weight, height, age) {
  return (66 + 6.2 * weight + 12.7 * height - 6.76 * age) * 1.37;
}

console.log(bmr(193, 70, 39));
