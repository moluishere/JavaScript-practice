// // 程式語言：JavaScript
// // 題目：找出陣列裡最小的兩個值的總和
// // 例如
// //   [15, 28, 4, 2, 43] 印出 6
// //   [23, 71, 33, 82, 1] 印出 24
// const list = [19, 5, 42, 2, 77]; // 最終結果應該要印出 7
// let length = list.length;
// for (let i = 1; i < length; i++) {
//   //外層控制比較輪數
//   for (let j = 0; j < length; j++) {
//     //內層比較大小
//     if (list[j] > list[j + 1]) {
//       //交換元素位置
//       let k = list[j + 1];
//       list[j + 1] = list[j];
//       list[j] = k;
//     }
//   }
// }
// console.log(list[0] + list[1]);

// // 內建 sort 解法
// list.sort(function (a, b) {
//   return a - b;
// });
// console.log(list[0] + list[1]);

// // 程式語言：JavaScript
// // 題目：寫一小段程式，印出陣列裡缺的字
// // 範例：

// let list1 = ["a", "b", "c", "d", "f", "g"]; // 印出 e
// let list2 = ["O", "Q", "R", "S"]; // 印出 P

// function lostWord(list) {
//   for (i = 1; i < list1.length; i++) {
//     if (list[i].charCodeAt() - list[i - 1].charCodeAt() != 1) {
//       // 後減前Unicode應該都要等於 1
//       return String.fromCharCode(list[i].charCodeAt() - 1);
//     }
//   }
// }

// // charCodeAt(index) 可返回指定位置的字符的 Unicode 編碼
// // fromCharCode(index) 可返回指定的 Unicode 值位置的編碼
// console.log(lostWord(list1));
// console.log(lostWord(list2));

//程式語言：JavaScript
//題目：完成函數的內容，把陣列裡的 0 都移到最後面
//範例：
let list = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
function moveZerosToEnd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}

let result = moveZerosToEnd(list);
console.log(result);
// [false,1,1,2,1,3,"a",0,0]

let list = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
function moveZerosToEnd(arr) {
  arr.forEach(function (element, index) {
    if (element === 0) {
      arr.splice(index, 1);
      arr.push(0);
    }
  });
  return arr;
}

let result = moveZerosToEnd(list);
console.log(result);
