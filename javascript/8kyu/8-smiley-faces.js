//return the total number of smiling faces in the array
function countSmileys(arr) {
  const matches = arr.join("").match(/[:;][-~]?[D)]/g);
  return matches ? matches.length : 0;
}

console.log(countSmileys([":)", ";(", ";}", ":-D"])); // should return 2;
console.log(countSmileys([";D", ":-(", ":-)", ";~)"])); // should return 3;
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // should return 1;
