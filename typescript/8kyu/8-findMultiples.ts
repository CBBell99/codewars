export function findMultiples(integer: number, limit: number): number[] {
  const arr: number[] = [];
  for (let i: number = integer; i <= limit; i += integer) {
    arr.push(i);
  }
  return arr;
}

console.log(findMultiples(2, 8));
console.log(findMultiples(3, 99));
console.log(findMultiples(5, 100));
