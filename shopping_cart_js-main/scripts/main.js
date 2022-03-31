const catCards = document.querySelectorAll(".card");
const tbody = document.querySelector(".cart table tbody");
// 空物件，抓點擊數量
const nameCounts = {}; 
catCards.forEach((card) => {
  //點到購物車時，要可以抓到名字跟價格
  card.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON" || event.target.nodeName === "I") {
      // 抓名字
      const catName = event.currentTarget.children[1].querySelector(".card-title").textContent;
      // 抓價格
      const catPrice = Number(event.currentTarget.children[1].querySelector(".price").textContent.replace("$", ""));
      // 抓數量
      if(nameCounts[catName]){
        nameCounts[catName] = nameCounts[catName] + 1
      }else{
        nameCounts[catName] = 1
      }
     let counts =  nameCounts[catName]
      addCartItem(catName, catPrice, counts) ;
    }    
  });
});

// 長出購物車內容
function addCartItem(name, price, count) {

  if( count === 1){
    const item =`
    <tr>
      <td>${name}</td>
      <td><input type="number" value="${count}" /></td>
      <td>${price}</td>
      <td></td>
        <td>
        <button class="btn btn-danger btn-sm">
          <i class="fas fa-trash-alt"></i>
        </button>
      </td>
      </tr>
    `
    const tr = document.createElement("tr")
    tr.innerHTML = item
    tbody.insertAdjacentElement("afterbegin",tr);
  }else{
    const inputUpadate = document.querySelector("tr:nth-child(2) input")
  
  }

}

