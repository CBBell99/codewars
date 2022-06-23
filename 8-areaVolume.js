function getSize(width, height, depth) {
  let area = 2 * width * depth + 2 * width * height + 2 * depth * height;
  let volume = width * height * depth;
  return [area, volume];
}

console.log(getSize(4, 2, 6));
console.log(getSize(10, 10, 10));
