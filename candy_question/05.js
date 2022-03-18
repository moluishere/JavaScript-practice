// 程式語言：JavaScript
// 國字大寫：零、壹、貳、參、肆、伍、陸、柒、捌、玖
// 轉換規則不需要完美，但至少需要滿足範例中這 5 組數字

function numberToTWCurrency(amount) {
  let toString = String(amount);
  let newArray = Array.from(toString);
  return newArray;
}

console.log(numberToTWCurrency(1450)); // 印出 壹仟肆佰伍拾 圓整
console.log(numberToTWCurrency(817)); // 印出 捌佰壹拾柒 圓整
console.log(numberToTWCurrency(9527)); // 印出 玖仟伍佰貳拾柒 圓整
console.log(numberToTWCurrency(120000)); // 印出 壹拾貳萬 圓整
console.log(numberToTWCurrency(1000001)); // 印出 壹佰萬零壹 圓整
