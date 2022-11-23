let barger = document.querySelectorAll(".menu");
let manu = document.querySelector(".navmenu");
let overlay = document.querySelector(".overlay");
let item = document.querySelector(".item");
let itemBody = document.querySelector(".userAc");
let over = document.querySelector(".overlay");
let body = document.querySelector("body");

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
  if (e.target == over) {
    manu.classList.toggle("showNav");
    overlay.classList.toggle("overlayS");
    document.body.style.overflow = "hidden";
  }
});
async function data() {
  let res = await fetch("https://jsonplaceholder.typicode.com/photos");
  let data = await res.json();

  data.forEach((v, i) => {
    let count = 100;
    window.addEventListener("scroll", (e) => {
      var top = this.scrollY;
      if (e.isTrusted) {
        count += 100;
        if (i < count) {
          let { id, title, url } = v;
          let valu = `<div class="card">
          <img src="${url}" alt="${title}" id="${id}" />
          <h1>${title}</h1>
          </div>`;
          let cont = document.querySelector(".containerVideo");
          cont.innerHTML += valu;
        }
      }
      console.log(e);
    });
    if (i < count) {
      let { id, title, url } = v;
      let valu = `<div class="card">
      <img src="${url}" alt="${title}" id="${id}" />
      <h1>${title}</h1>
      </div>`;
      let cont = document.querySelector(".containerVideo");
      cont.innerHTML += valu;
    }
    // }
  });
  // console.log(data);
}
window.onload = (e) => {
  data();
};
