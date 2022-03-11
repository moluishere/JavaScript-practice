// 印出99乘法表

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(i + "*" + j + "=" + i * j);
  }
}

// 印出 5階 半三角形

let str1 = "";
for (let i = 1; i <= 5; i++) {
  //外部：控制行數 + 換行
  for (let j = 0; j < i; j++) {
    //內部：控制*數
    str1 += "*";
  }
  str1 += "\n";
}
console.log(str1);

// 印出 5階 半三角形-repeat解
// str.repeat(count) 指示重複字串次數
let star1 = "*";
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

// 印出 5階 等腰三角形

let str2 = "";
for (let i = 0; i <= 5; i++) {
  let space = "";
  for (let h = 1; h <= 5 - i; h++) {
    //列印空格
    space += " ";
  }
  let star = "";
  for (let m = 1; m <= 2 * i - 1; m++) {
    //列印*號
    star += "*";
  }
  str2 += space + star + "\n";
}
console.log(str2);

// 印出 5階 等腰三角形-reapeat解
let star2 = "*";
let space = " ";
for (let i = 1; i <= 5; i++) {
  console.log(space.repeat(5 - i) + star2.repeat(2 * i - 1));
}

// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

const list = [19, 5, 42, 2, 77];

// 實作程式碼寫在這裡

// 最終結果應該要印出 7
