// 4. 是否使用嚴格模式 "use strict"

// 嚴格模式
"use strict";
function hello() {
  console.log(this); //undefined
}

function hello() {
  "use strict";
  console.log(this); //undefined
}

// 使用字串的原因：判斷瀏覽器是否支援
