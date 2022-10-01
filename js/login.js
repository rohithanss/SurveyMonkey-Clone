// ---------------------------- Alert -------------------------------------------
let flag = localStorage.getItem("signupSuccess");
if (flag == "true") {
  document.querySelector(".alert").classList.add("promtS");
  localStorage.setItem("signupSuccess", false);
}
document.querySelector(".alert>i").addEventListener("click", () => {
  document.querySelector(".alert").classList.remove("promtS");
  document.querySelector(".alert").classList.remove("promtF");
});
// ------------------------- Displaying SSO key button -----------------

document.querySelector(
  "#container > div > div:last-child > div > div:first-child"
).style.display = "flex";

// ------------------------------SIGN UP BUTTON --------------------------------

document.querySelector(".links").addEventListener("click", () => {
  window.location.href = "signup.html";
});

// ---------------------------------- Email Validation --------------------------

document.querySelector("#email").addEventListener("change", (event) => {
  if (
    (!event.target.validity.typeMismatch && event.target.validity.valid) ||
    event.target.value == ""
  ) {
    event.target.classList.remove("inEmail");
  } else {
    event.target.classList.add("inEmail");
  }
});

document.querySelector("#email").addEventListener("input", (event) => {
  let btn = document.querySelector("#container button");
  event.target.classList.remove("inEmail");

  if (
    !event.target.validity.typeMismatch &&
    event.target.validity.valid &&
    event.target.value != ""
  ) {
    console.log("adkfsj");
    btn.classList.add("btn");
    btn.disabled = false;
  } else {
    btn.classList.remove("btn");
    btn.disabled = true;
  }
});

// -------------------------------- NEXT BUTTON --------------------------------

document.querySelector("button").addEventListener("click", () => {
  let flag = false;
  let email = document.querySelector("#email").value;
  let users = JSON.parse(localStorage.getItem("jollyUsers")) || [];
  users.forEach((el) => {
    if (el.email == email) {
      localStorage.setItem("tempEmail", email);

      flag = true;
    }
  });
  if (flag) {
    window.location.href = "loginPassword.html";
  } else {
    document.querySelector(".alert>p").innerText = "INCORRECT EMAIL";

    document.querySelector(".alert").classList.add("promtF");
  }
});
