function saleHotdogs(n: number): number {
  if (n < 5) return n * 100;
  if (n >= 5 && n < 10) return n * 95;
  if (n >= 10) return n * 90;
  throw new Error("The method or operation is not implemented.");
}

console.log(saleHotdogs(1));
console.log(saleHotdogs(55));
console.log(saleHotdogs(100));
