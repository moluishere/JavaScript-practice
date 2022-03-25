//　物件導向
// Object.create()
// __proto__

const actions = {
  attack: function () {
    console.log("ATTACK");
  },
  eat: function () {
    console.log("YAMMY");
  },
};

function heroCreator(name, power) {
  const hero = Object.create(actions);
  hero.name = name;
  hero.power = power;

  return hero;
}

const h1 = heroCreator("kk", 100);
const h2 = heroCreator("aa", 200);
h1.attack(); //ATTACK
h2.attack(); //ATTACK
h1.eat(); // YAMMY

// JS中所有的物件都有 __proto__ 這個屬性，代表該物件的原型
console.log(h1); // { name: 'kk', power: 100 } 本身沒有 attack 跟 eat 的方法，但仍然可以呼叫
console.log(h1.__proto__); // { attack: [Function: attack], eat: [Function: eat] }
console.log(h1.__proto__.__proto__); // {}
console.log(h1.__proto__.__proto__.__proto__); // null

// function heroCreator(name, power) {
//   const hero = {
//     name,
//     power,
//     attack: function () {
//       console.log("attack");
//     },
//   };

//   return hero;
// }

// const h1 = heroCreator("kk", 100);
// const h2 = heroCreator("aa", 200);
// h1.attack();
// h2.attack();
