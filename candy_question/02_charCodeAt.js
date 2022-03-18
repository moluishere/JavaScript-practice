// 程式語言：JavaScript
// 題目：寫一小段程式，印出陣列裡缺的字
// 範例：

let list1 = ["a", "b", "c", "d", "f", "g"]; // 印出 e
let list2 = ["O", "Q", "R", "S"]; // 印出 P

function lostWord(list) {
  for (i = 1; i < list1.length; i++) {
    if (list[i].charCodeAt() - list[i - 1].charCodeAt() != 1) {
      // 後減前Unicode應該都要等於 1，所以條件不等於1(這個題目是相減是等於2)的那兩個值之間缺字
      return String.fromCharCode(list[i].charCodeAt() - 1); //把後面的元素的值減1，再使用String.fromCharCode() 轉換為字串
    }
  }
}

// charCodeAt(index) 可返回指定位置的字符的 Unicode 編碼
// fromCharCode(index) 可返回指定的 Unicode 值位置的編碼
console.log(lostWord(list1));
console.log(lostWord(list2));