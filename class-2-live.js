// firstName, lastName, language
// function sayNam(){console.log('My Name is Vivek')}
// sayLanguage


let firstName;
firstName = "Vivek";

firstName = 'Abrahim';
console.log(firstName)

var lastName;
lastName = "Agarwal"


const language = 'Javascript' ;
// language = 'c++' // trying to re-assign

const marks = {
  javascript: 100,
  react: 100,
  node: 100,
  java: 50
}

// marks = {
//   abc: 'def'
// } // re-assignment

marks.java = 100; // mutation


console.log(marks)



function sayName() {
  console.log('My Name is Vivek')
}



var sayLanguage = function() {
  console.log('My favorite language is Javascript')
}






/**
 *  checking truthy / falsey
 * undefined , null , NaN , 0 , "" (empty string), and false
 */

// let a = undefined;

// if (a) {
//   console.log(`The value is Truthy.`)
// } else {
//   console.log(`The value is Falsey.`)
// }

/**
 * String conversion 
 */

// let original = true;
// let converted = String(original);

/**
 * Numeric conversion
 */

let original = "1Rs.";
let converted = Number(original);



//  console.log(Boolean("ABC")); // true
//  console.log(Boolean("")); // false

//  console.log(!!("ABC")); // true
//  console.log(!!("")); // false

// let defaultUser = false;
// let user = "Akash"
// console.log(defaultUser || user)


// 4. var is hoisted & auto assigned a value of `undefined`
// this value can be accessed even before the assignment. 
// let does-not work this way.
// console.log(varVariable)

if (true) {
  var varVariable = 'hello from var'
}

// 2. var can be re-assigned by re-declaring
// var varVariable = 'hello from re-declared and re-assigned var.'

// console.log(varVariable) // hello from var


if (true) {
  let letVariable = 'hello from let'
  // 3. letVariable can not be re-assigned by re-declaring
  // let letVariable = 'hello from re-declared and re-assigned let.'
}

// 1. letVariable is not available outside of the block scope
// console.log(letVariable) 


// are we defining or executing the function?
// is it a "function declaration" or expression?
function add(a, b) {
  return a + b;
}

// are we defining or executing the function?
// is it a "function declaration" or expression?
let subtract = function(a,b) {
  let c = a - b;
}


// are we defining or executing the function?
add(1,2)
subtract(5,1);


let student1 = {
  name: 'Vivek'
}

let student2 = student1;
student2.name = 'Bassam'


// -------------------------------------------------

let userName = '';
let defaultUsername = 'Anonymous';

// if username is undefined , null , NaN , 0 , "" (empty string), and false
// return defaultUsername
// let printName = userName || defaultUsername;


// if username is undefined , null
// return defaultUsername
let printName = userName ?? defaultUsername;

// console.log(printName)



const student = {
  firstName: 'Vivek',
  rank: 1,
  age: 36
}

for (let key in student) {
  // console.log(key);
  // console.log(student[key]);
}

const subjects = ['javascript', 'html', 'css'];

for (let index in subjects) {
  // console.log(index);
  // console.log(subjects[index]);
}

for (let subject of subjects) {
  // console.log(subject);
}

// -------------------------------------------------


// function greet(greeting, name) {
//   return `${greeting}, from ${name}`;
// }


let greet = () => ({name: 'Anmol',greeting: 'Hi'})


let result = greet();
// console.log(result)


// -------------------------------------------------

let a = 'Vishal';
let b = 'Abhay';

let obj = {
  a,b
}

// console.log(obj)

// -------------------------------------------------

// (function addMe(a,b) { console.log(a + b)})(2,3)



