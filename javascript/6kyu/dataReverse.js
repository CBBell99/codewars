const reverseData = data => {
  const chunks = [];
  for (let i = 0; i < data.length; i += 8) {
    chunks.push(data.slice(i, i + 8));
  }
  return chunks.reverse().flat();
};

const data = [
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 1, 0,
];

console.log(reverseData(data));
