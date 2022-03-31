// this 只跟怎麼被呼叫有關
// 1. 誰呼叫，誰就是 this
const cat = {
  name: "kitty",
  age: 18,
  hello: function () {
    console.log(this);
    // this 是 cst : { name: 'kitty', age: 18, hello: [Function: hello] }
  },
};

cat.hello();

// 2. 沒人呼叫（前面沒有小數點），this -> windows 全域物件
function hi() {
  console.log(this); // 全域物件
}
hi(); // 沒人呼叫

function hi() {
  function hey() {
    console.log(this); // 全域物件
  }
  hey(); // 沒人呼叫
}
hi();

// 3. 箭頭函式沒有自己的 this 跟 arguments，所以會往外找 this
const arguments = 123;
const a = () => {
  console.log(this);
};
a("aa", "bb", "cc");

setTimeout(() => {
  console.log(this); // 全域物件
}, 3000);

// 符合沒人呼叫的規則，因為setTimeout只是延遲時間，真正呼叫 fn 是 windows
setTimeout(function () {
  console.log(this); // 全域物件
}, 3000);
