// ES6. Classes - constructor function that is sugar coted.
// its just slightly different syntax.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(this.name, 'says Hello');
  }

  sayAge() {
    console.log(this.name, 'age is ', this.age);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teach() {
    console.log(this.name, 'is Teaching ', this.subject);
  }
}

let teacher1 = new Teacher('Akash', 'Science');
teacher1.sayHello();
teacher1.teach();
