// while 迴圈
let a = 1;
while (a < 10) {
  console.log(123);
  a++;
}

//具名函式
function hello() {
  console.log(123); // 123
  console.log(456); // 456
}
hello(); // 呼叫

// 匿名函式
const hello = function () {
  console.log(123);
};

// 箭頭函式
const hello = () => {
  console.log(123);
};
hello();

// 參數與引數
function sayHello(a, b = 1, c = 2) {
  console.log(a);
  console.log(b);
  console.log(c);
}
sayHello("hello");
sayHello("hello", "world", "!");


// return 應用
function isAudlt(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

function isAudlt(age) {
  return age >= 18; // 直接回傳 True & false
}
console.log(isAudlt(20));

function hello(n) { //n是參數
  if (n >= 0) {
    console.log(n);
  }
}
hello(10); // 10引數

function hello(n) {
  // 如果n是奇數 印出a ,不然就印出b
  if (n % 2 == 1) {
    console.log("a");
  } else {
    console.log("b");
  }
}

hello(10); // 10引數

// 不處理負數運算
function add(a, b) {
  if (a < 0 || b < 0) {
    return "err";
  } else {
    return a + b;
  }
}

console.log(add(10, 20));
console.log(add(-10, 20));

// function add(a, b) {
  if (a < 0 || b < 0) {
    // early return
    return "err";
  }
  return a + b;
}

console.log(add(10, 20));
console.log(add(-10, 20));

// 計算BMI並四捨五入到小數點第二位
function BMI(height, weight) {
  let h = height / 100;
  let bmi = weight / (h * h);
  return bmi.toFixed(2);
}

console.log(BMI(162, 52));

// 閏年判斷
function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  }
  return false;
}

console.log(isLeapYear(2000));
console.log(isLeapYear(2001));

// 閏年判斷 直接 return true or false
function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

console.log(isLeapYear(2000));
console.log(isLeapYear(2001));

// 取陣列最後一個物件
let list = ["a", "b", "c", "d"];
let n = list.length;
console.log(list[n - 1]);

list.push("e");
console.log(list); //["a","d"]

list.splice(1, 2);
console.log(list);

// splice()
let a = [1, 2, 3, 4, 5];
let b = ["a", "b", "c", "f", "k"];
function headAndTail(list) {
  let len = list.length;
  list.splice(1, len - 2);
  return list;
}

console.log(headAndTail(a)); // [1,5]
console.log(headAndTail(b)); // ["a", "k"]

let a = [1, 2, 3, 4, 5];
let b = ["a", "b", "c", "f", "k"];
function headAndTail(list) {
  let len = list.length;
  return [list[0], list[len - 1]];
}

console.log(headAndTail(a)); // [1,5]
console.log(headAndTail(b)); // ["a", "k"]

// 印出陣列元素
// for 迴圈解法
const list = ["a", "b", "c", "d"];
for (i = 0; i < list.length; i++) {
  console.log(list[i]);
}

// forEach 解法 ; interation 歷遍
// forEach 會吃一個函式當作參數
list.forEach(function (x) {
  console.log(x);
});

// 印出索引值
list.forEach(function (x, counter) {
  console.log(counter + 1, x);
});

// 函式也可以獨立出來
const logger = function (x) {
  console.log(x);
};
list.forEach(logger);

// find
const list = ["a", "b", "c", "d"];
// indexOf / includes 檢查元素是否存在
// find 可做比較多的運算
const result = list.find(function (x) {
  return x == "a"; //回傳"第一個"抓到條件為 true 的值
});

console.log(result);

const list = [1, 2, 3, 4, 5];
let result = [];
for (i = 0; i < list.length - 1; i++) {
  result[i] = list[i] * 2;
}

console.log(result);

// map
const result = list.map(function (x) {
  return x * 2;
});

// console.log(result);

const list = [1, 2, 3, 4, 5];
let newList = [];
list.forEach(function (x) {
  newList.push(2 * x);
});

console.log(newList);
