// // 程式語言：JavaScript
// // 題目：找出陣列裡最小的兩個值的總和
// // 例如
// //   [15, 28, 4, 2, 43] 印出 6
// //   [23, 71, 33, 82, 1] 印出 24
const list = [19, 5, 42, 2, 77]; // 最終結果應該要印出 7
let length = list.length;
for (let i = 1; i < length; i++) {
  //外層控制比較輪數
  for (let j = 0; j < length; j++) {
    //內層比較大小
    if (list[j] > list[j + 1]) {
      //交換元素位置
      let k = list[j + 1];
      list[j + 1] = list[j];
      list[j] = k;
    }
  }
}
console.log(list[0] + list[1]);

// 內建 sort 解法
list.sort(function (a, b) {
  return a - b;
});
console.log(list[0] + list[1]);
