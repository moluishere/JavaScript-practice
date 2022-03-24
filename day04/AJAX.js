// fetch方法
const API = "https://jsonplaceholder.typicode.com/users";

fetch(API)
  .then((resp) => {
    // then 可以當成一個符合條件的監聽器
    // promise 物件 預設有三個狀態；一開始為 pending，並發展成 fulfilled 以及 reject 狀態
    return resp.json(); // 回傳解完結果，仍是 promise
  })

  .then((data) => {
    console.log(data); // 確定解完才印出來
  })

  .catch((err) => {
    console.log(err);
  });

// async & await 寫法
const API = "https://jsonplaceholder.typicode.com/users";
async function getUsers() {
  const rawData = await fetch(API);
  const users = await rawData.json();
  users.forEach((user) => {
    console.log(user.name);
  });
}

getUsers();

//原生請求
const API = "https://jsonplaceholder.typicode.com/users";

const req = new XMLHttpRequest();
req.addEventListener("load", () => {
  const ul = document.createElement("ul");

  let users = JSON.parse(req.responseText);
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user.name;
    ul.appendChild(li);
  });
  document.querySelector("body").appendChild(ul);
});

req.open("GET", API);

req.send();
