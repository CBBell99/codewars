function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    let gains = principal * interest - principal * interest * tax;
    principal += gains;
    years++;
  }
  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
