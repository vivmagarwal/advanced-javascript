import Person, { Engineer, Teacher } from "./local_modules/Person.js";

// snowman
// let p1 = new Person('Harsh');
// console.log(p1.sayHello());

// let t1 = new Teacher('Vivek', 'Javascript');
// console.log(t1.sayHello())
// console.log(t1.teach())

// let e1 = new Engineer('Sagar');
// console.log(e1.sayHello());
// console.log(e1.earn());

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let newArr = users.reduce((acc, item)=> {
  acc[item.name] = item.id
  return acc; 
}, {})

console.log(newArr)

// {John: 1, Pete: 2, Mary: 3}

