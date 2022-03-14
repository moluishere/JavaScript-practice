//印出 [4,5] filter
const list = [1, 2, 3, 4, 5];

let result = list.filter(function (number) {
  return number > 3;
});
console.log(result);

//印出單數 [ 1, 3, 5, 7, 9 ] filter
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = list.filter(function (number) {
  return number % 2 == 1;
});
console.log(result);

// map是把"內容做運算"後蒐集成一個結果，filter是做"條件判斷"後蒐集成一個結果

// reduce
const list = [1, 2, 3, 4, 5];
let a = list.reduce(function (acc, cv) {
  return acc + cv;
}, 100); // acc有設定初始值，從設定的初始值開始；沒有設定，則從陣列第一個元素開始
console.log(a);

// reduce 找出最大值
const list = [19, 23, 3, 2, 24];
let a = list.reduce(function (acc, cv) {
  if (cv > acc) {
    return cv;
  }
  return acc;
});

console.log(a);

const list = [19, 23, 3, 2, 24, 8];
let a = list.reduce(function (acc, cv) {
  console.log("acc=", acc, "cv=", cv);
  if (cv > acc) {
    return cv;
  }
  return 1;
});

console.log(a);
