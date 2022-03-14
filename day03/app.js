// const c = document.getElementById("cc");
// console.log(c);
// //getElement / querySelector 系列
// //querySelector 要加 id 與 .
// //getElement

// const items1 = document.getElementsByClassName("items");

// const items2 = document.querySelectorAll("items");
// console.log(items1); // arr-like
// console.log(items2); // arr-like

// 讓每個字變成5倍長
// const items = document.querySelectorAll(".item");
// items.forEach((item) => {
//   let origContent = item.textContent;
//   item.textContent = origContent.repeat(5);
// });

// const t = document.querySelector("#hello");

// t.innerHTML = "<h1>HELLO</h1>";
// t.classList.add("hi");

// 讓所有的li都紅底白字
// const items = document.querySelectorAll(".item");
// items.forEach((item) => {
//   // item.textContent = "a";
//   item.classList.add("hi");
// });

// 讓所有奇數的li都紅底白字
// const items = document.querySelectorAll(".item");
// items.forEach((item, index) => {
//   if (index % 2 == 0) {
//     item.classList.add("hi");
//   }
// });

// 事件監聽
// const h = document.querySelector("#hello");
// h.addEventListener("click", function () {
//   //監聽的事件, function
//   console.log("點了");
// });

// JavaScript 位置 載入衝突解法：
// (1)放在body前 (2)加入監聽器 DOMContentLoade
// (3) <script>加入 defer，比較晚執行：<script src="app.js" defer></script>
document.addEventListener("DOMContentLoaded", function () {
  const h = document.querySelector("#hello");
  console.log(h);
  h.addEventListener("click", function () {
    //監聽的事件, function
    console.log("點了");
  });
});

// 高階函數(式) higher-order funtion
// 1. 接別的函數當參數/引數 EX: map(), forEach()
// 2. 可以回傳一個函數

// function a() {
//   function b() {
//     console.log(123);
//   }
//   return b;
// }

// //
// const cc = a();
// console.log(cc); // 呼叫 a 函式，得到回傳值 b 函式
// // ƒ b() {
// //   console.log(123);
// // }

// cc(); // 啟動 b functuon, 印出 123

// a(); // b() ->未啟動
// a()(); // b()() -> 啟動 b functuon, 印出123 -> undefine
// a()()(); //undefine() -> not a funtion

// // 把函式拉出來，當成值丟進去
// const h = document.querySelector("#hello");

// const hey = function () {
//   console.log("點了");
// };

// const hi = function () {
//   console.log("點了");
// };

// h.addEventListener("click", hey);

// // fn 在 JS ，是「一等公民」：函式在 JavaScript 可以當作一般的值，唯一不同的地方是能夠被控制
// // 事件監聽，可以加很多個
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   console.log("yes"); // 印出 yes
// });

// btn.addEventListener("click", () => {
//   console.log("no"); // 印出 no
// });

// // 侵入式：直接在屬性上灌入一個函式，屬性被修改
// // 同一個 onclick 會被覆蓋
// btn.onclick = function () {
//   console.log(123); // 被覆蓋
// };

// btn.onclick = function () {
//   console.log(456); // 印出 456
// };

// 侵入式 與 預設行為
// 超連結有預設行為：換頁

const ln = document.querySelector("#link");
const btn = document.querySelector("#btn");

ln.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hi");
});

document.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // 取消右鍵行為
  console.log(123);
});
