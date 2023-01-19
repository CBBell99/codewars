// Create a function called args_count that returns the number of arguments provided
const args_count = (...args) => {
  return args.length;
};

console.log(args_count(1, 2));
console.log(args_count());
console.log(args_count(1, 2, 3, 4, 5));
