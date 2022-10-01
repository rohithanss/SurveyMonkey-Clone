// -----------------------------  Back button --------------------------------

document.querySelector(".links").style.textAlign = "left"; // align BACK button left

document.querySelector(".links").addEventListener("click", () => {
  window.location.href = "signup.html";
});

// ----------------------------- Email from Local Storage -----------------------------

let tempEmail = localStorage.getItem("tempEmail");
document.querySelector("h5").innerText = tempEmail;

// ----------------------------- Password Validation ----------------------------------

document.querySelector("#password").addEventListener("input", (event) => {
  let cPassword = document.querySelector("#cpassword");
  cPassword.classList.remove("inPass");

  if (event.target.value.length >= 8) {
    cPassword.classList.add("pass");
    cPassword.disabled = false;
  } else {
    cPassword.classList.remove("pass");
    cPassword.disabled = true;
    cPassword.value = "";
  }
});

//  Password matching
document.querySelector("#cpassword").addEventListener("input", (event) => {
  let password = document.querySelector("#password");
  let btn = document.querySelector("#container button");
  event.target.classList.remove("inPass");

  if (event.target.value == password.value) {
    btn.classList.add("btn");
    btn.disabled = false;
  } else {
    btn.classList.remove("btn");
    btn.disabled = true;
  }
});

document.querySelector("#cpassword").addEventListener("change", (event) => {
  let password = document.querySelector("#password");

  if (event.target.value == "" || event.target.value == password.value) {
    event.target.classList.remove("inPass");
  } else {
    event.target.classList.add("inPass");
  }
});

// ------------------------------ SIGN UP BUTTON --------------------------------
document.querySelector("#container button").addEventListener("click", () => {
  let email = tempEmail;
  let password = document.querySelector("#password").value;
  let users = JSON.parse(localStorage.getItem("jollyUsers")) || [];
  let obj = {
    email,
    password,
  };
  users.push(obj);
  localStorage.setItem("jollyUsers", JSON.stringify(users));
  let flag = true;
  localStorage.setItem("signupSuccess", flag);
  window.location.href = "login.html";
});
