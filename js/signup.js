// ------------------------------------ LOGIN BUTTON --------------------------------

document.querySelector(".links").addEventListener("click", () => {
  window.location.href = "login.html";
});

// ------------------------------------ NEXT BUTTON --------------------------------

document.querySelector("button").addEventListener("click", () => {
  let email = document.querySelector("#email").value;
  localStorage.setItem("tempEmail", email);
  window.location.href = "signupPassword.html";
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
  let checked = document.querySelector("input[type='checkbox']");
  let btn = document.querySelector("#container button");
  event.target.classList.remove("inEmail");

  if (
    !event.target.validity.typeMismatch &&
    event.target.validity.valid &&
    checked.checked
  ) {
    btn.classList.add("btn");
    btn.disabled = false;
  } else {
    btn.classList.remove("btn");
    btn.disabled = true;
  }
});
// ---------------------------------- Checkbox Validation --------------------------

document
  .querySelector("input[type='checkbox']")
  .addEventListener("change", (event) => {
    let vEmail = document.querySelector("#email");
    let btn = document.querySelector("#container button");
    if (
      event.target.checked &&
      !vEmail.validity.typeMismatch &&
      vEmail.validity.valid
    ) {
      btn.classList.add("btn");
      btn.disabled = false;
    } else {
      btn.classList.remove("btn");
      btn.disabled = true;
    }
  });
