// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
let btn = document.querySelector("button") //事件點擊按鈕，計算BMI
function BMI(height, weight) {
  let h = parseInt(height) / 100 //parseInt()解析一個字串，然後返回一個整數
  let w = parseInt(weight)
  let bmi = (w / (h * h)).toFixed(2) //toFixed() 4捨5入至小數點第2位
  return bmi //回傳結果
}
function calculateBMI() {
  let heightInput = document.querySelector("#bodyHeight").value //取輸入身高
  let weightInput = document.querySelector("#bodyWeight").value //取輸入體重
  let result = document.querySelector("#resultText") //顯示的結果
  result.innerHTML = BMI(heightInput, weightInput)
}

btn.addEventListener("click", calculateBMI) //事件監聽
