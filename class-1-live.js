// What does a function return if we do not return it explicitly.
// function add(a,b) {
//   let c = a + b;
// }

// let result = add();
// console.log(result)

// -------------------------------------------------

// let firstName;
// console.log('firstName :', firstName);

// -------------------------------------------------

// let firstName; 
// let lastName = 'Smith';
// firstName = 'John'
// firstName = 'Will'
// console.log(firstName, lastName)

// -------------------------------------------------

// let n1 = 123;
// let n2 = 123.45;
// console.log(typeof n1);
// console.log(typeof n2);

// -------------------------------------------------

// const aVeryBigNumber = 1234567890123456789012345678901234567890n;
// console.log(typeof aVeryBigNumber)

// -------------------------------------------------

// let firstName = "John";
// console.log( `Hello, ${firstName}!` ); 
// console.log( `the result is ${1 + 2}` ); 
// console.log(typeof firstName)

// -------------------------------------------------

// let b1 = true;
// let b2 = false;
// console.log(typeof b1);
// console.log(typeof b2);

// -------------------------------------------------
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object
// -------------------------------------------------

// let firstName = 'Will';
// let lastName = 'Smith';
// let age = 54;

// let greeting = `<replace it with your code>`;

// -------------------------------------------------

// bad | good | great
let objFeelings = {
  Vivek: 'Good',
  Akash: 'Great'
}



// how can i add a new entry for 'Rahul' who is feeling bad

// how can I add a new entry for 'Nisha' who is feeling great

let newUser = 'Bassam';
// how can I add the newUser who is feeling good? the value of newUser
// should be the key of the new entry

// console.log(feelingsData)
// console.log(feelingsData.Vivek)
// console.log(feelingsData['Akash'])

// how can I access data for Rahul

// how can I access data for the newUser


// -------------------------------------------------

let arr = [
  'HTML',
  'CSS',
  true,
  false,
  123,
  123.45,
  null,
  undefined,
  {fname: 'Will'},
  function(){console.log('Hello World!')}
]

// console.log(arr)

// how can you access the 2nd item (1st index)

// how can you access the 9th item (8th index)

// how can you execute the function that's in the 9th index

// how can you push a new string item 'Javascript'

// -------------------------------------------------

function addNumbers(n1, n2) {
  // task
  let sum = n1 + n2;
  // console.log('sum', sum)

  // return
  return sum;
}

let total = addNumbers(3,2);
// console.log('total', total)


// function declaration
function doSomething() {
  // tasks | return something
}

// function expression
let fun = function() {
  // tasks | return something
}

let arrFun = () => {
  // tasks | return something
}

// discuss variations in arrow functions

// -------------------------------------------------

let feelingData = {
  addData: function (name, feeling) {
    let uniqueName = Symbol(name);
    this.data[uniqueName] = feeling;
    // this.data[name] = feeling;
  },
  data: {}
}

let empForm = document.getElementById('emp-mood-form');
let empFormSubmit = document.getElementById('emp-mood-submit');
let fName = document.getElementById('fname');
let summary = document.getElementById('mood-summary-content');
let moodRadios = document.querySelectorAll('input[name="emp_mood"]');

empFormSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  let fname = fName.value;

  let selectedMood;
  for (const moodRadio of moodRadios) {
    if(moodRadio.checked) {
      selectedMood = moodRadio.value;
      break;
    }
  }

  feelingData.addData(fname, selectedMood);
  // alert(`feedback recorded: ${fname} is feeling ${selectedMood} today.`)
  // console.log(stringifyObjectWithSymbols(feelingData.data))
  
  summary.innerText = stringifyObjectWithSymbols(feelingData.data)
})

// -------------------------------------------------

// let sym1 = Symbol('Vivek');
// let sym2 = Symbol('Vivek');

// console.log(sym1 == sym2)

// let sym3 = Symbol.for('Akash');
// let sym4 = Symbol.for('Akash');


// -------------------------------------------------

// function sayGoodbye() {
//   console.log("Good bye! ", this);
// }

// function sayHello() {
//   console.log("Helloo! ", this);
//   sayGoodbye();
// }

// sayHello();

// -------------------------------------------------


// let n1;
// let n2;

// n1 = 12345;
// n2 = 234523452345234523452345245223452345345;

// -------------------------------------------------

let n1 = 5;
let n2 = 4;

let str1 = `${n1} + ${n2}`; // '5 + 4'
// `${n1} + ${n2}`
// `5 + ${n2}`
// `5 + 4`
// '5 + 4'



let str2 = `${n1 + n2}`; // '9'
// `${n1 + n2}`
// `${5 + 4}`
// `${9}`
// '9'

// -------------------------------------------------


// what is the value of a => undefined
// what is the type of a => undefined

// -------------------------------------------------
let instructor = {
  firstName: 'Vivek'
}

instructor.lastName = 'Agarwal';

instructor['age'] = 35;

instructor['age'] = 350;

instructor.age = 1000;

// the key can only be either string / Symbol


// guarenteed to be unique
let sym1 = Symbol('Vivek');
let sym2 = Symbol('Vivek');
let sym3 = Symbol('Vivek');

// creates a global registry
let sym4 = Symbol.for('Aman');
let sym5 = Symbol.for('Aman');


































// -------------------------------------------------
// helper methods

function stringifyObjectWithSymbols(obj) {
  let arr = [];
  let symbolKeys = Object.getOwnPropertySymbols(obj);
  let stringKeys = Object.getOwnPropertyNames(obj);

  symbolKeys.forEach(element => {
    arr.push(`${element.toString()}: ${obj[element]}`)
  });

  stringKeys.forEach(element => {
    arr.push(`${element.toString()}: ${obj[element]}`)
  });

  return arr.join("\r\n")
}

// -------------------------------------------------


