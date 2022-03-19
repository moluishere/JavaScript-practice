// 鍵盤事件 enter(keycode 13 = Enter)：按 enter 新增
// click 事件：點選 ddBtn 新增，點選 closeBtn 刪除

// 新增 ul 節點，放在 main(todo-app) 最下面，掛上 class "todo-list"
const ul = document.createElement("ul")
ul.setAttribute("class", "todo-list")
document.querySelector(".todo-app").appendChild(ul)

// 建立一個事件發生後，後長出 list 的函式，新輸入的值要在前面
// 輸入後要讓輸入欄為空
// 把刪除的函式也寫進去，才能抓到在該FN內動態生成的標籤
function addNewList() {
  // 先抓輸入的值，建立 li 節點，掛上class(todo-item)，帶入輸入值跟樣式，放入 ul
  const inputValue = document.querySelector("#taskInput").value
  const li = document.createElement("li")
  li.setAttribute("class", "todo-item")
  li.innerHTML = `
  <span class="item">${inputValue}</span>
  <button class="closeBtn">X</button>`
  ul.insertAdjacentElement("afterbegin", li)
  // 完成新增後，清空輸入欄的資料
  document.querySelector("#taskInput").value = " "

  // 點擊 button (closeBtn) -> 刪除資料
  const close = document.querySelector(".closeBtn")
  close.addEventListener("click", () => {
    const removeList = document.querySelector(".todo-item")
    // if (removeList) {
    removeList.remove()
    // }
  })
}

// 點擊 button (ddBtn) -> 新增資料
const add = document.querySelector("#addBtn")
add.addEventListener("click", () => {
  addNewList()
})

// 按 enter -> 新增資料
const enter = document.querySelector("#taskInput")
enter.addEventListener("keypress", (e) => {
  if (e.which === 13) {
    addNewList()
  }
})

/* <section>
<ul class="todo-list">
  <li class="todo-item">
    <span class="item">待辦事項1</span>
    <button class="closeBtn">X</button>
  </li>
  <li class="todo-item">
    <span class="item">待辦事項2</span>
    <button class="closeBtn">X</button>
  </li>
</ul>
</section> */
