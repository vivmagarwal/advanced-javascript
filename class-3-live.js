// -------------------------------------------------
// blocking vs non blocking
// -------------------------------------------------

// let hi = document.getElementById("alert-hi");
// let bye = document.getElementById("alert-bye");
// let blocking = document.getElementById("blocking");
// let nonBlocking = document.getElementById("non-blocking");

// hi.addEventListener("click", function () {
//   console.log("Hi!");
// });

// bye.addEventListener("click", function () {
//   console.log("Bye!");
// });

// blocking.addEventListener("click", function(){
//   console.log('Blocking Operation started...');
//   blockingTimeConsumingFunction(10000);
// });
// nonBlocking.addEventListener("click", function(){
//   console.log('Non-blocking Async Operation started...')
//   nonBlockingAsyncTimeConsumingFunction(10000);
// });

// function nonBlockingAsyncTimeConsumingFunction(milliseconds){
//   setTimeout(function () {
//     console.log('Non-blocking Async Operation completed...')
//     return `AsynchronousWait completed after ${milliseconds}ms.`
//   }, milliseconds);
// }

// function blockingTimeConsumingFunction(milliseconds) {
//   var start = Date.now(),
//       now = start;
//   while (now - start < milliseconds) {
//     now = Date.now();
//   }
//   console.log('Blocking Operation completed...')
// }

// -------------------------------------------------


// let aaaa = 'Vishal';
// let bbbb = 'Abhay';

// let obj = {
//   aaaa,bbbb
// };

// -------------------------------------------------
// Immediately invoked function expression
// -------------------------------------------------

// ;(function add (a, b) {
//   console.log(a + b)
// })(2,3)

// ;((a , b) => {
//   console.log(a - b)
// })(10,3)

// -------------------------------------------------
// let, const vs var - from scope perspective
// -------------------------------------------------

// function
function student() {
  var studentName = 'Akash';
  // console.log(studentName);
}

// console.log(studentName); // Uncaught ReferenceError: studentName is not defined

// student()

// block 
if (1 === 1) {
  var studentAge = 26;
  // console.log(studentAge) // 26
}

// console.log(studentAge) // 26

// block
for (let i = 1; i<=1; i++ ) {
  var favSubject = 'Javascript';
  // console.log(favSubject) // Javascript
}

// console.log(favSubject) // Javascript

// -------------------------------------------------
// 
// -------------------------------------------------



const user = {
  id: 339,
  name: 'John',
  age: 42,
  subjects: ['HTML', 'CSS', 'Javascript'],
  education: {
    degree: {
      name: 'BCA'
    }
  }
};

const {
  name:fname, 
  education: {degree: {name:degreeName}},
  subjects: [sub1,,sub3]
} = user;


// let, const  vs var - scopes


// let arr = [1, 2,3,4];
// let arr2 = [5,6,7];

// let arr3 = [...arr, ...arr2];
// console.log(arr3);

// let style = {
//   fontStyle: 'Bold',
//   color: 'Blue'
// }

// let newStyle = {...style, color: 'Red'};

// console.log(newStyle);


// let person = {name: 'Prince'};
// let personData = {age: '30'};

// let allData = { ...person };
// allData.name = 'Pawan';

let userObj = {
  name: 'Krishna',
  age: 38,
  hobbies: ['Coding', 'Singing'],
  education: {
    degree: {
      name: 'BCA'
    }
  }
}

let {name, hobbies: [h1,h2], education: {degree: {name:degName}} } = userObj;

// -------------------------------------------------
// this keyword
// -------------------------------------------------

;(() => {

  let person = {
    name: 'Amit',
    age: 24,
  }

  let tellMeAboutYou = function() {
    console.log(this.name);

    function sayGoodMorning() {
      console.log(this, 'Good Morning')
    }

    sayGoodMorning()

    let sayGoodBye = () => {
      console.log(this.name, 'Good Bye form Arrow.')
    }

    sayGoodBye(); // does not matter

  }

  tellMeAboutYou.call(person);

})() 