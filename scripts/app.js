let barger = document.querySelectorAll(".menu");
let manu = document.querySelector(".navmenu");
let overlay = document.querySelector(".overlay");
let item = document.querySelector(".item");
let itemBody = document.querySelector(".userAc");

// input
let glass = document.querySelector(".glas");
let inputBar = document.querySelector(".serch");
let inpbox = document.querySelector(".inputsearch");
// clear secrch
let inputBox = document.querySelector("#search");
let xmark = document.querySelector(".fa-x");
xmark.addEventListener("click", (e) => {
  inputBox.value = "";
});
glass.addEventListener("click", (e) => {
  inputBar.classList.toggle("showSerch");
  inpbox.classList.toggle("inputsearchblock");
});
item.addEventListener("click", (e) => {
  itemBody.classList.toggle("showItem");
});

barger.forEach((e) => {
  e.addEventListener("click", (e) => {
    manu.classList.toggle("showNav");
    overlay.classList.toggle("overlayS");
  });
});
document.addEventListener("click", (e) => {
  let over = document.querySelector(".overlay");
  if (e.target == over) {
    manu.classList.toggle("showNav");
    overlay.classList.toggle("overlayS");
  }
});
