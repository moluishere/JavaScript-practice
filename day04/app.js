// 箭頭函式
const add = (a, b) => {
  return a + b;
};

// 移除大括號，可以不使用return
const add = (a, b) => a + b;

// 下面函式會出現 undefine ，{}裡面為函式，需要有return
const add = (a, b) => {
  a + b;
};
let result = add(1, 2);
console.log(result);

//物件簡寫 key跟value的變數名字一樣時，可以直接寫名字
// 小技巧：故意把key跟value取一樣的名字
let name = "KK";
let age = 18;

const cat = {
  name,
  age,
};

console.log(cat);

// 物件解構: 把一包物件，解構成單獨的變數取用
// 使用情境：網路抓取資料，需要單獨使用value，以及這些資料的key需要修改的狀況，都可以使用物件解構
const cat = {
  name: "KK",
  age: 18,
};
// let a = cat.name;　// 33 34 行等同於 35 行
// let b = cat.age;
let { name: petname, age } = cat;
// 此處為解構宣告，使用key的名稱，不再另立變數，使用key的名稱取用
// 但可以給它一個別名

// console.log(a, b); //原來的方法，印出 kk 18
console.log(petname, age); //印出 kk 18

// const > let > var

// 物件解構：function 參數也可以做解構
function hello({ name: petname, age }) {
  // 2. 甚至可以在參數位置直接做解構
  //   let { name: petname, age } = h; // 1.可以直接在函式裡做物件解構，也可給別名
  console.log(petname, age); //印出 kk 18
}

const hero = {
  name: "kk",
  age: 18,
};

hello(hero);

// 點點點
// 1.spread operator 展開內容，丟出元素　2. rest parameter 放在參數列吸收多餘的引數，組成陣列

// 1. spread operator
const a = [1, 2, 3];
const b = [4, 5, 6];
// const c = a.concat(b)　// 只能串兩個陣列
// const c = [...a, ...b]; //炸開物件，設置[]接收炸開的內容，達到串接的效果 //可達到串接多個陣列
// console.log(c); // [ 1, 2, 3, 4, 5, 6 ]
function sayHello(x, y, z) {
  console.log(x, y, z);
}
// sayHello(a); // 印出 [ 1, 2, 3 ] undefined undefined
sayHello(...a); // 印出 123

// 2. rest parameter
function hi(a, b, ...c) {
  // C 吃掉剩下的引數
  console.log(a);
  console.log(b);
  console.log(c);
}
hi(1, 2, 3, 4, 5); // 印出 1 2 [ 3, 4, 5 ]
hi(1, 2); // 印出  1 2 []
