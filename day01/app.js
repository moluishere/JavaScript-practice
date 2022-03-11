// let year = prompt("請輸入年份");
// console.log(year);

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log(year + "是閏年");
// } else {
//   console.log(year + "不是閏年");
// }

// 印出 1 ~ 10
// for (let a = 1; a <= 10; a++) {
//   console.log(a);
// }

// for (let a = 0; a < 10; a++) {
//   console.log(a + 1);
// }

// 印出 1~10的單數
// for (let a = 1; a <= 10; a++) {
//   if (a % 2 == 1) {
//     console.log(a);
//   }
// }

// 印出 20 以內的 雙數，倒著印
// for (let a = 20; a >= 0; a = a - 2) {
//   console.log(a);
// }

// 兩題皆使用雙迴圈，三角形題另外使用repeat解

// 印出99乘法表
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(i + "*" + j + "=" + i * j);
  }
}

// 印出 5階 半三角形

let str1 = "*";
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    str1 += "*";
  }
  str1 += "\n";
}
console.log(str1);

// 印出 5階 半三角形-repeat解
let star1 = "*";
for (let i = 1; i <= 5; i++) {
  console.log(star1.repeat(i));
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
