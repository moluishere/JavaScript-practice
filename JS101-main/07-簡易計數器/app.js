// 簡易計數器
// document.addEventListener("DOMContentLoaded", function () {
//   const minus_btn = document.querySelector("#minus")
//   const plus_btn = document.querySelector("#plus")
//   const counter = document.querySelector("#counter")

//   plus_btn.addEventListener("click", function () {
//     counter.value = Number(counter.value) + 1 //
//   })

//   minus_btn.addEventListener("click", function () {
//     if (counter.value > 0) {
//       counter.value = Number(counter.value) - 1
//     }
//   })
// })

// fn 獨立寫法：讓fn被動接收數字，不主動抓資料
document.addEventListener("DOMContentLoaded", () => {
  let count = 1

  // SRP
  const updateCounter = function (c) {
    document.querySelector("#counter").value = c
  } //抓counter值

  const up = () => {
    count++
    updateCounter(count)
  } // 讓count++ 呼叫updateCounter()

  const down = () => {
    if (count > 0) {
      count--
    }
    updateCounter(count)
  }
  document.querySelector("#plus").addEventListener("click", up)
  document.querySelector("#minus").addEventListener("click", down)
})
