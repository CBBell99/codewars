const removeProp = (obj, prop) => {
  delete obj[prop];
  return obj;
};

const person = {
  name: 'Alice',
  age: 30,
  gender: 'female',
};

console.log(removeProp(person, 'age')); // { name: 'Alice', gender: 'female' }
removeProp(person, 'hometown'); // { name: 'Alice', gender: 'female' }
