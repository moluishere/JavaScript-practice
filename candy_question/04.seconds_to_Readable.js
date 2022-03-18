// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

// 修正處：使用padStart()填充字串；改用重音符+&{}連接字串；減少變數
function humanReadableTimer(seconds) {
  let hours = String(Math.floor(seconds / (60 * 60))).padStart(2, 0);
  let minutes = String(Math.floor((seconds - hours * 60 * 60) / 60)).padStart(
    2,
    0
  );
  let sec = String(
    Math.floor(seconds - hours * 60 * 60 - minutes * 60)
  ).padStart(2, 0);
  return `${hours}:${minutes}:${sec}`;
}
console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(59)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59

// function humanReadableTimer(seconds) {
//   let hours = Math.floor(seconds / (60 * 60)); // 總秒數/1小時的秒數，再取整數，得到總小時
//   let minutes = Math.floor((seconds - hours * 60 * 60) / 60); // (總秒數 - 總小時的秒數)/1分鐘的秒數，再取整數，得到總分鐘
//   let sec = Math.floor(seconds - hours * 60 * 60 - minutes * 60); //總秒數 - 總小時的秒數 - 總分鐘的秒數，得到剩餘秒數
//   if (hours < 10) {
//     hours = "0" + String(hours);
//   }
//   if (minutes < 10) {
//     minutes = "0" + String(minutes);
//   }
//   if (sec < 10) {
//     sec = "0" + String(sec);
//   }
//   return hours + ":" + minutes + ":" + sec;
// }
// console.log(humanReadableTimer(0)); // 印出 00:00:00
// console.log(humanReadableTimer(59)); // 印出 00:00:59
// console.log(humanReadableTimer(60)); // 印出 00:01:00
// console.log(humanReadableTimer(90)); // 印出 00:01:30
// console.log(humanReadableTimer(3599)); // 印出 00:59:59
// console.log(humanReadableTimer(3600)); // 印出 01:00:00
// console.log(humanReadableTimer(45296)); // 印出 12:34:56
// console.log(humanReadableTimer(86399)); // 印出 23:59:59
// console.log(humanReadableTimer(86400)); // 印出 24:00:00
// console.log(humanReadableTimer(359999)); // 印出 99:59:59
