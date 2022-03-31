// 4. 是否有使用 call/apply/bind 改變 this

// call 方法 ： 指定 this
const cat = {
  name: "kitty",
  age: 18,
};
function hello() {
  console.log(this); //{ name: 'kitty', age: 18 }
}
hello.call(cat);

// this 指向 cat，此處重新賦值
const cat = {
  name: "kitty",
  age: 18,
};
function hello() {
  this.name = "cc";
}
hello.call(cat);
console.log(cat); // 內容被覆蓋 { name: 'cc', age: 18 }
