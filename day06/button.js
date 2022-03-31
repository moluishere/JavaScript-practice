// this -> 抽象化指涉對象

const hello = document.querySelector(".hello");
hello.addEventListener("click", function () {
  this.textContent = "this是button!";
  console.log(this);
});


