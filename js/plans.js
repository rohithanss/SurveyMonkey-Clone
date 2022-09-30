// SIGN UP-button
document.querySelector(".navbarW button").addEventListener("click", () => {
  window.location.href = "signup.html";
});

//  --------------------------------------- NAVBAR DROP DOWN MENU -------------------------------
let dropMenu = document.querySelector(".drop-menu");
let dropBtns = document.querySelectorAll(".navbarW > div > h3");
let flag = false;
dropBtns.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.path[0].children[1].classList.toggle("yo2");
    if (!flag) {
      dropMenu.style.display = "flex";
      event.path[0].children[0].setAttribute("class", "fa-solid fa-caret-up");

      flag = true;
    } else {
      event.path[0].children[0].setAttribute("class", "fa-solid fa-caret-down");

      dropMenu.style.display = "none";
      flag = false;
    }
  });
});
// --------------------------------------------- Medium Screen --------------------------

//  --------HAMBURGER HOVER----------------
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("mouseover", () => {
  let divs = document.querySelectorAll(".hamburger > div");
  divs.forEach((el) => {
    el.classList.add("hamburger-over");
  });
});

hamburger.addEventListener("mouseout", () => {
  let divs = document.querySelectorAll(".hamburger > div");
  divs.forEach((el) => {
    el.classList.remove("hamburger-over");
  });
});

//  --------HAMBURGER CLICK ---------------
hamburger.addEventListener("click", () => {
  document.querySelector(".hamburger-menu").classList.toggle("show-menu");
  // document.querySelector("body").classList.toggle("bodyY");
  document
    .querySelector(".hamburger > div:nth-child(1)")
    .classList.toggle("line1");
  document
    .querySelector(".hamburger > div:nth-child(2)")
    .classList.toggle("line2");
  document
    .querySelector(".hamburger > div:nth-child(3)")
    .classList.toggle("line3");
});

//  --------------------------------  HAMBURGER SUB MENU ---------------------------------------

let menuBtns = document.querySelectorAll(".hamburger-menu>div>h3");
menuBtns.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.target.nextElementSibling.classList.toggle("view-submenu");
  });
});
// -----------------------------------  PLANS' CARDS List items ------------------------------------------------
let items = document.querySelectorAll(".card li");
items.forEach((el) => {
  if (el.innerText != "") {
    el.setAttribute("class", "liStyle");
  }
});
