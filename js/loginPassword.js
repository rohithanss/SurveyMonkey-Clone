// -----------------------------  Back button --------------------------------

document.querySelector(".links").style.textAlign = "left";

document.querySelector(".links").addEventListener("click", () => {
  window.location.href = "login.html";
});

// ----------------------------- Email from Local Storage -----------------------------

let tempEmail = localStorage.getItem("tempEmail");
document.querySelector("h5").innerText = tempEmail;

// ----------------------------- Password Validation ----------------------------------

document.querySelector("#password").addEventListener("input", (event) => {
  let btn = document.querySelector("button");
  event.target.classList.remove("inPass");

  if (event.target.value.length >= 1) {
    btn.classList.add("btn");
    btn.disabled = false;
  } else {
    btn.classList.remove("btn");
    btn.disabled = true;
    btn.value = "";
  }
});

// -------------------------------- LOGIN BUTTON --------------------------------

document.querySelector("button").addEventListener("click", () => {
  let flag = false;
  let password = document.querySelector("#password").value;
  let users = JSON.parse(localStorage.getItem("jollyUsers")) || [];
  users.forEach((el) => {
    if (el.email == tempEmail && el.password == password) {
      flag = true;
    }
  });
  if (flag) {
    document.querySelector(".alert").classList.remove("promtF");

    document.querySelector(".alert>p").innerText = "LOGIN SUCCESS";
    document.querySelector(".alert").classList.add("promtS");
  } else {
    document.querySelector(".alert").classList.remove("promtS");

    document.querySelector(".alert>p").innerText = "INCORRECT PASSWORD";

    document.querySelector(".alert").classList.add("promtF");
  }
});

//  alert
document.querySelector(".alert>i").addEventListener("click", () => {
  document.querySelector(".alert").classList.remove("promtF");
  document.querySelector(".alert").classList.remove("promtS");
});
