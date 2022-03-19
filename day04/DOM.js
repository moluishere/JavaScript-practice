// 增加節點新增內容，加入父節點的最後一個位置
const box = document.querySelector("#hello"); // 抓到位置

const h = document.createElement("h1"); //建立節點h，為h1
h.textContent = "hello"; //節點h加入內容

box.appendChild(h); // appendChild()加入可視區

// 移除內容 remove()
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const lastOne = document.querySelector("#list :last-child");
  lastOne.remove();
});

// 取得上層DOM
// parentElement parentNode ; 建議使用 Element，會比較簡單
// Element 也是一種 Node，表達它是一種元素
// Element 是可被渲染、操作的內容，前端通常都與 Elemet 互動
// Element 繼承自 Node， Node 有的功能，Element 都會有

// 取得下層DOM
// children -> HTMLcollection 抓到 Element 的集合  -> 實務上比較適合使用
//childNodes -> NodeList 抓到註解(comment)、換行(text)......等內容
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const pa = document.querySelector("ul");
  console.log(pa.children); // 取得Element
  console.log(pa.childNodes); // 取得Node
});

// 取得兄弟姊妹的DOM
const lastOne = document.querySelector("ul :list-child");
console.log(lastOne.previousElementSibling); // 取得同階層前一個 Element
console.log(lastOne.previousSibling); // 取得同階層前一個 node
console.log(lastOne.nextElementSibling); // 取得同階層下一個 Element
console.log(lastOne.nextSibling); //取得同階層下一個 node

// 在指定位置安插DOM
// insertAdjacentElement()，安插元素
// beforebegin afterbegin beforeend afterend
const list = document.querySelector("#list");

const newList = document.createElement("li");
newList.textContent = "x";

list.insertAdjacentElement("beforebegin", newList);

// insertAdjacentHTML 安插html
const list = document.querySelector("#list");

let msg = "X";
const newList = `<li>${msg}</li>`;

list.insertAdjacentHTML("afterend", newList);
