let spans = document.querySelectorAll(".box_control .colors span");
let localItem = localStorage.getItem("color-option");
let switcher = document.querySelector(".switcher");
let theme = localStorage.getItem("theme");

// Check Local Storage (colors)
if (localItem !== null) {
  // Get Current Color On Local Storage And Set As main-color
  document.documentElement.style.setProperty('--main-color', localItem);

  // Add Active Class To Current Color
  spans.forEach((span) => {
    span.classList.remove("active");
    if (span.dataset.color === localItem) {
      span.classList.add("active");
    }
  });
}
// Check Local Storage (theme)
if (theme !== null) {
  if (theme === "dark") {
    switcher.classList.remove("fa-moon");
    switcher.classList.add("fa-sun");
    document.body.classList.add("dark");
  } else {
    switcher.classList.remove("fa-sun");
    switcher.classList.add("fa-moon");
    document.body.classList.remove("dark");
  }
}

// Control Box
let boxBtn = document.querySelector(".box-btn");
let control = document.querySelector(".control");
let boxControl = document.querySelector(".box_control");

boxBtn.addEventListener("click", () => {
  boxBtn.classList.toggle("fa-spin");
  control.classList.toggle("open");
  boxControl.classList.toggle("open");
});
window.addEventListener("scroll", () => {
  if (boxControl.classList.contains("open")) {
    boxBtn.classList.remove("fa-spin");
    control.classList.remove("open");
    boxControl.classList.remove("open");
  }
});

// Control Colors
// Set Active Class on Targer Color
spans.forEach((span) => {
  span.addEventListener("click", () => {
    // Set Color To The Page And Save It To The Local Storage
    document.documentElement.style.setProperty('--main-color', span.dataset.color);
    localStorage.setItem("color-option", span.dataset.color);

    // Add Active Class To Current Color On Use
    spans.forEach((span) => {
      span.classList.remove("active");
    });
    span.classList.add("active");
  });
});

// Theme Dark 
switcher.addEventListener("click", () => {
  if (switcher.classList.contains("fa-moon")) {
    switcher.classList.remove("fa-moon");
    switcher.classList.add("fa-sun");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    switcher.classList.remove("fa-sun");
    switcher.classList.add("fa-moon");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

// burger button
let burgerBtn = document.querySelector(".burger_btn");
let aside = document.querySelector("aside");
burgerBtn.onclick = () => {
  burgerBtn.classList.toggle("open");
  aside.classList.toggle("show");
};


// Hide All sections Except Active One
let sections = document.querySelectorAll(".section");
sections.forEach(section => {
  if (!section.classList.contains("active")) {
    section.classList.add("hide");
  }
});

// Aside Nav
let navLis = document.querySelectorAll("aside .nav li a");
let nav = document.querySelector("aside");

document.addEventListener("click", event => {
  if (event.target.classList.contains("link")) {
    let hash = event.target.hash;

    if (hash !== "") {
      event.preventDefault();

      // Deactivate Existing Active 'Section'
      document.querySelector(".section.active").classList.add("hide");
      document.querySelector(".section.active").classList.remove("active");

      // Activate New 'Section'
      document.querySelector(hash).classList.add("active");
      document.querySelector(hash).classList.remove("hide");

      // Deactivate Existing Active nav link
      nav.querySelector("a.active").classList.remove("active");

      // Activate New  nav link
      event.target.classList.add("active");

      // Close Aside Automatically After Clicking a Link
      if (aside.classList.contains("show")) {
        aside.classList.remove("show");
        burgerBtn.classList.remove("open");
      }

      // If The Link Isn't In Aside Nav
      // if (event.target.classList.contains("out-link")) {
      //   let outLink = document.querySelectorAll(".out-link");
      //   outLink.forEach(item => {
      //     console.log(item);
      //     if (hash === item.hash) {
      //       // Activate New  nav link
      //       event.target.classList.add("active");
      //     }
      //   });
      // }
    }
  }
});

// Typing Animation
var typed = new Typed(".typing", {
  strings: ["Web Developer", "Web Designer", "Graphic Designer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
});