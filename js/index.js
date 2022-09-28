//  --------------------------------------- NAVBAR DROP DOWN MENU -------------------------------
let dropMenu = document.querySelector("nav>div:last-child");
let dropBtns = document.querySelectorAll(".navbar > div > h3");
let flag = false;
dropBtns.forEach((el) => {
  el.addEventListener("click", (event) => {
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

// ---------------------------------------- SURVEY TEMPLATES --------------------------------------------------------

let templates = [
  {
    url: "https://prod.smassets.net/assets/cms/sm/uploads//customer-satisfaction-survey-template-1.png",
    category: "Customers",
    text: "Customer Satisfaction survey template",
  },
  {
    url: "https://prod.smassets.net/assets/cms/sm/uploads//Product-Survey.png",
    category: "Education",
    text: "Market research - product survey",
  },
  {
    url: "https://prod.smassets.net/assets/cms/sm/uploads//360-Degree-Employee-Evaluation.png",
    category: "Employees",
    text: "360-degree employee evaluation",
  },
  {
    url: "https://prod.smassets.net/assets/cms/sm/uploads//Brand-Awareness.png",
    category: "Events",
    text: "Brand awareness survey template",
  },
  {
    url: "https://prod.smassets.net/assets/cms/sm/uploads//product-testing-survey-template.png",
    category: "Healthcare",
    text: "Product Testing",
  },
  {
    url: "https://prod.smassets.net/assets/cms/sm/uploads//employee-engagement-survey-template.png",
    category: "Market Research",
    text: "Employee Engagement",
  },
  {
    url: "https://prod.smassets.net/assets/cms/sm/uploads//customer-service-survey-template.png",
    category: "Nonprofit",
    text: "Customer Service",
  },
  {
    url: "https://prod.smassets.net/assets/cms/sm/uploads//Website_surveys.png",
    category: "Other",
    text: "Website Feedback Survey template",
  },
  {
    url: "https://prod.smassets.net/assets/cms/sm/uploads//management-performance-survey-template.png",
    category: "Other",
    text: "Management Performance",
  },
];
function disTemp(templates) {
  document.querySelector(".templates > div:last-child").innerHTML = "";
  for (let i = 0; i < 90; i++) {
    templates.forEach((el) => {
      let div = document.createElement("div");
      div.style.backgroundImage = `url(${el.url})`;
      div.setAttribute("class", "templates-cards");
      let h3 = document.createElement("h3");
      h3.innerText = el.text;
      div.append(h3);

      document.querySelector(".templates > div:last-child").append(div);
    });
  }
}
disTemp(templates);
// ---------------------------------------- FILTER SURVEY TYPES --------------------------------------------------------

let types = {
  name: [
    "Customers",
    "Education",
    "Employees",
    "Events",
    "Healthcare",
    "Market Research",
    "Nonprofit",
    "Other",
  ],
  number: [36, 24, 70, 11, 24, 58, 5, 46],
};

types.name.forEach((el, i) => {
  let div = document.createElement("div");
  let input = document.createElement("input");
  input.type = "checkbox";
  input.value = el;
  let span = document.createElement("span");
  span.innerText = types.number[i];
  div.append(input, el);
  // div.innerHTML = input + el;
  div.append(span);
  document.querySelector(".templates > div:first-child").append(div);
});

// ---------------------------------------------- BANNER ANIMATION --------------------------------------------------

setInterval(function () {
  document.querySelector(".banner h1").style.animation =
    "typing 3.5s steps(40, end)";
}, 2000);
setInterval(function () {
  document.querySelector(".banner h1").style.animation = "";
}, 5000);

// ------------------------------------- FILTER BY TYPE ------------------------------------

let checks = {};
let checkCount = 0;
let checkboxes = document.querySelectorAll(".templates input[type='checkbox']");
checkboxes.forEach((el) => {
  el.addEventListener("click", (event) => {
    let val = event.target.value;
    if (event.target.checked == true) {
      checks[val] = val;
      checkCount++;
    } else {
      delete checks[val];
      checkCount--;
    }
    if (checkCount == 0) {
      disTemp(templates);
    } else {
      let filteredTemp = templates.filter((el) => {
        let count = 0;
        for (let k in checks) {
          if (k == el.category) {
            count = 1;
          }
        }
        if (count == 1) {
          return true;
        } else {
          return false;
        }
      });
      disTemp(filteredTemp);
    }
  });
});
