const instructorWithLongestName = instructors => {
  let result = { name: '', course: '' };
  for (let instructor of instructors) {
    let name = instructor.name;
    if (name.length > result.name.length) {
      result = instructor;
    }
  }
  return result;
};

console.log(
  instructorWithLongestName([
    { name: 'Samuel', course: 'IOS' },
    { name: 'Jeremiah', course: 'Web' },
    { name: 'Ophilia', course: 'Web' },
    { name: 'Donald', course: 'IOS' },
  ]),
);
console.log(
  instructorWithLongestName([
    { name: 'Matthew', course: 'Web' },
    { name: 'David', course: 'IOS' },
    { name: 'Domascus', course: 'IOS' },
  ]),
);
