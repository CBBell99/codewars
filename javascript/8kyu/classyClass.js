class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo(name, age) {
    return `${this.name} age is ${this.age} `;
  }
}

const person1 = new Person('john', 34);
console.log(person1.getInfo());
