const queueTime = (customers, n) => {
  const tills = new Array(n).fill(0);

  // Iterate through customers and assign to next available till
  for (let i = 0; i < customers.length; i++) {
    const nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += customers[i];
  }

  // Return the maximum time among all tills
  return Math.max(...tills);
};

console.log(queueTime([5, 3, 4], 1)); //, 12);
console.log(queueTime([10, 2, 3, 3], 2)); //, 10);
console.log(queueTime([2, 3, 10, 2], 2)); //, 12);
