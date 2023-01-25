export function isReallyNaN(val: any): boolean {
  return Number.isNaN(val);
}

console.log(isReallyNaN(1));
console.log(isReallyNaN(69));
console.log(isReallyNaN(null));
console.log(isReallyNaN("sss"));
console.log(isReallyNaN(NaN));
console.log(isReallyNaN(undefined));
