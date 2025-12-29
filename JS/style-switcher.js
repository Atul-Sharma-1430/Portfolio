// // Toggle style switcher
// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener("click", ()=> {
//     document.querySelector(".style-switcher").classList.toggle("open");
// })

// // Hide style switcher on scroll
// window.addEventListener("scroll", () => {
//     if(document.querySelector(".style-switcher").classList.contains("open")) {
//         document.querySelector(".style-switcher").classList.remove("open");
//     }
// })

// // Theme colors
// const alternateStyles = document.querySelectorAll(".alternate-style");
// function setActiveStyle(color) {
//     alternateStyles.forEach((style) => {
//         if (color === style.getAttribute("title")) {
//             style.removeAttribute("disabled");
//         } else {
//             style.setAttribute("disabled", "true");
//         }
//     });
// }

// // Dark-Light Theme
// const dayNight = document.querySelector(".day-night");
// dayNight.addEventListener("click", () => {
//     dayNight.querySelector("i").classList.toggle("fa-sun");
//     dayNight.querySelector("i").classList.toggle("fa-moon");
//     document.body.classList.toggle("dark");
// })

// window.addEventListener("load", () => {
//     if (document.body.classList.contains("dark")) {
//         dayNight.querySelector("i").classList.add("fa-sun");
//     } else {
//         dayNight.querySelector("i").classList.add("fa-moon");
//     }
// })

// // const dayNight = document.querySelector(".day-night");
// // const icon = dayNight.querySelector("i");

// // dayNight.addEventListener("click", () => {
// //   document.body.classList.toggle("dark");

// //   if (document.body.classList.contains("dark")) {
// //     icon.classList.remove("fa-moon");
// //     icon.classList.add("fa-sun");
// //   } else {
// //     icon.classList.remove("fa-sun");
// //     icon.classList.add("fa-moon");
// //   }
// // });

// // window.addEventListener("load", () => {
// //   if (document.body.classList.contains("dark")) {
// //     icon.classList.add("fa-sun");
// //   } else {
// //     icon.classList.add("fa-moon");
// //   }
// // });

// Style Switcher Toggle
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

styleSwitcherToggler.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
});

// Theme Colors
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(colorTitle) {
  alternateStyles.forEach((style) => {
    if (style.getAttribute("title") === colorTitle) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
  localStorage.setItem("color", colorTitle); // remember color
}

// Apply saved color on reload
const savedColor = localStorage.getItem("color");
if (savedColor) {
  setActiveStyle(savedColor);
}

// Day/Night Mode Toggle
const dayNight = document.querySelector(".day-night");
const dayNightIcon = dayNight.querySelector("i");

dayNight.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateIcon();
  // save mode
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

function updateIcon() {
  if (document.body.classList.contains("dark")) {
    dayNightIcon.classList.remove("fa-moon");
    dayNightIcon.classList.add("fa-sun");
  } else {
    dayNightIcon.classList.remove("fa-sun");
    dayNightIcon.classList.add("fa-moon");
  }
}

// Apply saved theme on reload
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}
updateIcon();

// Hide style switcher on scroll
allSection.forEach((section) => {
  section.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains("open")) {
      styleSwitcher.classList.remove("open");
    }
  });
});

// // Hide style switcher on scroll
// window.addEventListener("scroll", () => {
//   if(styleSwitcher.classList.contains("open")){
//     styleSwitcher.classList.remove("open");
//   }
// });
