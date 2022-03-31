// 物件導向

// new function
// 使用 new 呼叫函式，會回傳一個空物件，this 會指向那個空物件(所以這個 fn 雖然沒有寫回傳值，但有回傳值)
function heroCreator(name, power) {
  // this -> {}
  this.name = name;
  this.power = power;
  // return this
}

const actions = {
  attack: function () {
    console.log("attack!!");
  },
  eat: function () {
    console.log("eat!!");
  },
};

heroCreator.prototype = actions;

const h1 = new heroCreator();
h1.attack();

// JS中所有的物件都有 __proto__ 這個屬性
// JS中所有的 function 都有 .potrotype 這個屬性，同時也具有`__proto__`屬性（因為 fn 也是物件）
// default -> {} 空物件

Array.prototype.hello = function () {
  console.log("hi");
};

const list = [1, 2, 3];
list.hello(); // hi 
//一開始是 not a function，在 Array 上使用 potrotype 增加 hello()，就可以使用了
