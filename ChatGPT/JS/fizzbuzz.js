const fizzbuzz = () => {
  for (let i = 0; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) {
      output += 'fizz';
    }
    if (i % 5 === 0) {
      output += 'buzz';
    }
    console.log(output || i);
  }
};

console.log(fizzbuzz());

const fizzBuzz = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

console.log(fizzBuzz());

const fb = () => {
  for (let i = 0; i <= 100; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'fizz';
    }
    if (i % 5 === 0) {
      output += 'buzz';
    }
    if (output === '') {
      output = i;
    }
    console.log(output);
  }
};
