// Typing animation
var typed = new Typed(".typing", {
  strings: [
    "Software Engineer",
    "Web Developer",
    "Web Designer",
    "Problem Solver",
    "Full Stack Developer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Aside all controls
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

// Click nav links
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);

    // Open/close aside on small screens
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

// Nav toggler
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// Hire me button
document.querySelector(".hire-me").addEventListener("click", function (e) {
  e.preventDefault();

  const sectionIndex = Number(this.getAttribute("data-section-index"));
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);

  // Close aside if screen is small
  if (window.innerWidth < 1200) {
    asideSectionTogglerBtn();
  }
});

// // Scroll to update nav links
// window.addEventListener("scroll", function () {
//   let scrollY = window.pageYOffset;

//   allSection.forEach((section, index) => {
//     const sectionTop = section.offsetTop - 100; // offset for better visibility
//     const sectionHeight = section.offsetHeight;

//     if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
//       navList.forEach((navItem) => {
//         navItem.querySelector("a").classList.remove("active");
//       });
//       navList[index].querySelector("a").classList.add("active");
//     }
//   });
// });

// // Optional: handle window resize to fix toggler issues dynamically
// window.addEventListener("resize", () => {
//   if (window.innerWidth >= 1200) {
//     aside.classList.remove("open");
//     navTogglerBtn.classList.remove("open");
//     allSection.forEach((sec) => sec.classList.remove("open"));
//   }
// });
