// //程式語言：JavaScript
// //題目：完成函數的內容，把陣列裡的 0 都移到最後面
// //範例：

// // for迴圈 splice() push()
// let list = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
// function moveZerosToEnd(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i, 1);
//       arr.push(0);
//     }
//   }
//   return arr;
// }

// let result = moveZerosToEnd(list);
// console.log(result);
// // [false,1,1,2,1,3,"a",0,0]

// // forEach迴圈 splice() push()
// let list = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
// function moveZerosToEnd(arr) {
//   arr.forEach(function (element, index) {
//     if (element === 0) {
//       arr.splice(index, 1);
//       arr.push(0);
//     }
//   });
//   return arr;
// }

// let result = moveZerosToEnd(list);
// console.log(result);
// // [false,1,1,2,1,3,"a",0,0]
