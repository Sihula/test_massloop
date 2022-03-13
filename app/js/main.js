const burger = document.querySelector(".burger__menu");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});

let a = document.querySelector("#input-one");
let b = document.querySelector("#input-two");

document.querySelector(".summa").innerText = 12;
