// 鍵盤事件 enter(keycode 13 = Enter)：按 enter 新增
// click 事件：點選 ddBtn 新增，點選 closeBtn 刪除
const ul = document.createElement("ul")
ul.classList.add("todo-list")
document.querySelector(".todo-app").appendChild(ul)

function addNewList() {
  const li = document.createElement("li")
  li.classList.add("todo-item")
  const inputValue = document.querySelector("#taskInput").value
  if (inputValue.trim() === "") {
    alert("寫資料啊")
  } else {
    li.innerHTML = `
    <span class="item">${inputValue}</span>
    <button class="closeBtn">X</button>`
    ul.insertAdjacentElement("afterbegin", li)
    document.querySelector("#taskInput").value = " "
  }
  const close = document.querySelector(".closeBtn")
  close.addEventListener("click", () => {
    li.remove()
  })
}

// 點擊btn 新增資料
const add = document.querySelector("#addBtn")
add.addEventListener("click", () => {
  addNewList()
})

// 按 enter 新增資料
const enter = document.querySelector("#taskInput")
enter.addEventListener("keypress", (e) => {
  if (e.which === 13) {
    addNewList()
  }
})
