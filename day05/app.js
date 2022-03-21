// 非同步處理
// Call stack 呼叫堆疊
// web API / roundtime
// Queue

// http://latentflip.com/loupe/

$.on("button", "click", function onClick() {
  setTimeout(function timer() {
    console.log("You clicked the button!");
  }, 2000);
});

console.log("Hi!");

setTimeout(function timeout() {
  console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");
