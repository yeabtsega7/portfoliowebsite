// ========= style switch toggle=========

const colorstoggle = document.querySelector(".toggle");
const styleS = document.querySelector(".style_swicher");

colorstoggle.addEventListener("click", () => {
  styleS.classList.toggle("open");
});
// ======== scroll toggle=====================
window.addEventListener("scroll", () => {
  if (styleS.className === "style_swicher open") {
    styleS.className = "style_swicher";
  }
});

//==================theme colors===================

const theme = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  theme.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// ============== day_night===========

const daynight = document.querySelector(".day_night");
daynight.addEventListener("click", () => {
  daynight.querySelector("i").classList.toggle("fa-sun");
  daynight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});





const navlinks = document.querySelectorAll(".nav-kink");
navlinks.forEach((nav) => {
  nav.addEventListener("click", () => {
    navlinks.forEach((navc) => {
      navc.className = "nav-kink";
    });
    var offset;
    if (nav.querySelector("i").className === "fa fa-home") {
      offset = 0;
    }
    if (nav.querySelector("i").className === "fa fa-user") {
      offset = 1;
    }
    if (nav.querySelector("i").className === "fa fa-list") {
      offset = 2;
    }
    if (nav.querySelector("i").className === "fa fa-briefcase") {
      offset = 3;
    }
    if (nav.querySelector("i").className === "fa fa-comment") {
      offset = 4;
    }
    const slides = document.querySelector("[data-slides]");
    const activeslide = slides.querySelector(".data-active");

    activeslide.className = "section";
    slides.children[offset].classList = "section data-active";

    nav.classList.toggle("active");
    if (window.innerWidth < 1000) {
      console.log(12)
      document.querySelector(".main-container").classList.toggle("open");
      document.querySelector(".aside").classList.toggle("open");
      document.querySelector(".nav-toggler").classList.toggle("open");
    }
  });
});

// =======nav toggle======

const navtoggler = document.querySelector(".nav-toggler");
console.log(navtoggler);
navtoggler.addEventListener("click", () => {
  document.querySelector(".main-container").classList.toggle("open");
  document.querySelector(".aside").classList.toggle("open");
  document.querySelector(".nav-toggler").classList.toggle("open");
});

// var typed = new Typed(".typed",()=>{
//     strings:["wab designer","app developer","wab developer"],
//     typespeed:100,
//     backspeed:60;
// });

// const themescontrol = document.querySelectorAll("themes");
// themescontrol.forEach((theme) => {
//   theme.addEventListener("click", () => {
//     theme.classList.toggle("1111111111");
//   });
// });
