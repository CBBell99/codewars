const capitalizeWords = arr => {
  return arr.map(a => a.charAt(0).toUpperCase() + a.slice(1));
};

console.log(capitalizeWords(['foo', 'bar', 'baz'])); // returns ["Foo", "Bar", "Baz"]
