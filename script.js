let hi = document.getElementById("alert-hi");
let bye = document.getElementById("alert-bye");
let blocking = document.getElementById("blocking");
let nonBlocking = document.getElementById("non-blocking");

hi.addEventListener("click", function () {
  console.log("Hi!");
});

bye.addEventListener("click", function () {
  console.log("Bye!");
});

blocking.addEventListener("click", function(){
  console.log('Blocking Operation started...');
  blockingTimeConsumingFunction(10000);
});
nonBlocking.addEventListener("click", function(){
  console.log('Non-blocking Async Operation started...')
  nonBlockingAsyncTimeConsumingFunction(10000);
});

function nonBlockingAsyncTimeConsumingFunction(milliseconds){
  setTimeout(function () {
    console.log('Non-blocking Async Operation completed...')
    return `AsynchronousWait completed after ${milliseconds}ms.`
  }, milliseconds);
}

function blockingTimeConsumingFunction(milliseconds) {
  var start = Date.now(),
      now = start;
  while (now - start < milliseconds) {
    now = Date.now();
  }
  console.log('Blocking Operation completed...')
}