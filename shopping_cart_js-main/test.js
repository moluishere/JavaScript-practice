// 做一個空物件，把內容放進去
// 何時用 object[name]  object.name ?
// 需要動態組成的時候，才使用 object[name]
const list = [1, 2, 4, 2, 1, 4, 6, 8, 9, 2]

function printCount(arr) {
 const score = {}

 arr.forEach( a => {
   if( score[a]){
     score[a] = score[a] + 1
   }else{
     score[a] = 1
   }
 })
 return score
}


console.log(printCount(list))

// 希望印出：
// 1: 2
// 2: 3
// 4: 2
// 6: 1
// 8: 1
// 9: 1

