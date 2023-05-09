const orderedCount = string => {
  let map = {};
  let order = [];
  for (let char of string) {
    if (!map[char]) {
      map[char] = 1;
      order.push(char);
    } else {
      map[char]++;
    }
  }
  return order.map(char => [char, map[char]]);
};

console.log(orderedCount('abracadabra'));
console.log(orderedCount('233312'));
