// 程式碼寫這裡

const bikeApi =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
const sercherList = document.querySelector(".siteList")

// 取消 form 表單默認事件 + 判斷是否為空字串 + 回到搜尋清單清空狀態 + 呼叫API函式（參數為API以及輸入值/關鍵字）
document.querySelector("#searchForm").addEventListener("submit", (e) => {
  e.preventDefault()
  const inputWord = document.querySelector("#searchKeyword")
  const inputWordValue = inputWord.value
  if (inputWordValue.trim() === "") {
    alert("請輸入關鍵字搜尋路名")
  } else {
    sercherList.textContent = "" /*可以放在資料塞進去前 以防使用者沒有輸入成功*/
    getAdressData(bikeApi, inputWordValue)
  }
})

// API 串接 + 以輸入值/關鍵字進行 includes() 條件判斷，回傳一個新陣列 + 呼叫長出資料的函式（參數為回傳的新陣列）
async function getAdressData(url, keyWordValue) {
  const response = await fetch(url)
  const rawData = await response.json()
  /* fetch() json() 會回傳 promise 物件，經過 await 才能夠使用*/
  /* Joson() 成功解析後，就會轉成 JS 可利用的物件，如果解析失敗，會出現錯誤訊息*/
  const includeValue = rawData.filter((data) => {
    return data.ar.includes(keyWordValue)
  })
  addAddressData(includeValue)
}

// 使用 forEach 遍歷含輸入值/關鍵字的陣列，抓出指定的站名、地址、YouBike 資料 + 長出資料
function addAddressData(value) {
  const addressData = value.forEach((e) => {
    const address = e.ar
    const station = e.sna
    const number = e.sbi
    const newList = `<li class="list-group-item fs-5">
        <i class="fas fa-bicycle"></i>
        ${station.replace("YouBike2.0_", "")}(${number})<br/>
        <small class="text-muted">${address}</small>
      </li>`
    sercherList.insertAdjacentHTML("beforeend", newList)
  })
}
