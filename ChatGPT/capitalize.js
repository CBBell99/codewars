const capitalize = array => {
  return array.map(item => item.charAt(0).toUpperCase() + item.slice(1));
};

const words = ['apple', 'banana', 'peach', 'orange'];
console.log(capitalize(words));
