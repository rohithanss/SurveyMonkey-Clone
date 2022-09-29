//  --------------------------------------- NAVBAR DROP DOWN MENU -------------------------------
let dropMenu = document.querySelector(".drop-menu");
let dropBtns = document.querySelectorAll(".navbarW > div > h3");
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
// ---------------------------------------------- BANNER ANIMATION --------------------------------------------------

setInterval(function () {
  document.querySelector(".banner h1").style.animation =
    "typing 3.5s steps(40, end)";
}, 2000);
setInterval(function () {
  document.querySelector(".banner h1").style.animation = "";
}, 5000);

// ------------------------------------------PLANS SLIDER -----------------------------------------
document.querySelector(".btn1").addEventListener("click", () => {
  document.querySelector(".cards").style.justifyContent = "start";
});
document.querySelector(".btn2").addEventListener("click", () => {
  document.querySelector(".cards").style.justifyContent = "end";
});

// ---------------------------------------- FILTER SURVEY TYPES --------------------------------------------------------

let checks = {};

let typeArr = [
  { typeName: "Customers", numbers: 90 },
  { typeName: "Education", numbers: 90 },
  { typeName: "Employees", numbers: 90 },
  { typeName: "Events", numbers: 90 },
  { typeName: "Healthcare", numbers: 90 },
  { typeName: "Market Research", numbers: 90 },
  { typeName: "Nonprofit", numbers: 90 },
  { typeName: "Other", numbers: 180 },
];

function disType(typeName) {
  document.querySelector(
    ".templates > div:first-child>div:last-child"
  ).innerHTML = "";
  typeName.forEach((el) => {
    let div = document.createElement("div");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.value = el.typeName;
    for (let k in checks) {
      if (k == el.typeName) {
        input.checked = true;
        break;
      }
    }
    input.addEventListener("click", filterChecked);
    let span = document.createElement("span");
    span.innerText = el.numbers;
    div.append(input, el.typeName);
    div.append(span);
    document
      .querySelector(".templates > div:first-child>div:last-child")
      .append(div);
  });
}
disType(typeArr);
// ---------------------------------------- SEARCH SURVEY TYPES --------------------------------------------------------
document
  .querySelector(".search-bar>input")
  .addEventListener("input", (event) => {
    let val = event.target.value;
    let searched = typeArr.filter((el) => {
      let name = el.typeName.toLowerCase();
      return name.includes(val, 0);
    });
    disType(searched);
  });

// ------------------------------------- FILTER BY TYPE And FILTER COUNT ------------------------------------

function filterChecked(event) {
  let val = event.target.value;
  if (event.target.checked == true) {
    checks[val] = val;
  } else {
    delete checks[val];
  }
  if (Object.keys(checks).length == 0) {
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
  console.log(checks, Object.keys(checks).length);
}

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
  let countDis = document.querySelector(
    ".templates > div:first-child > p > span"
  );
  let temps = 0;
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
      temps++;
    });
  }
  countDis.innerText = temps;
}
disTemp(templates);
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

document
  .querySelector(".hamburger-menu>button")
  .addEventListener("click", () => {
    window.location.href = "signup.html";
  });

//  --------------------------------  HAMBURGER SUB MENU ---------------------------------------

let menuBtns = document.querySelectorAll(".hamburger-menu>div>h3");
let flag2 = false;
menuBtns.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.target.nextElementSibling.classList.toggle("view-submenu");

    if (!flag2) {
      event.path[0].children[0].setAttribute("class", "fa-solid fa-caret-up");
      flag2 = true;
    } else {
      console.log("af");
      event.path[0].children[0].setAttribute("class", "fa-solid fa-caret-down");
      flag2 = false;
    }
  });
});
