//fix nav

const navBar = document.querySelector(".navigation");
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});



const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", ()=>{
    navList.classList.add("open");

});

close.addEventListener("click",()=>{
    navList.classList.remove("open");
});



// Colors
const widget = document.querySelector(".widget");
const control = document.querySelector(".control");

widget.addEventListener("click", () => {
  control.classList.toggle("open");
});

const colors = [...document.querySelectorAll(".colors span")];
document.querySelector(":root").style.setProperty("--customColor", "#42caff");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    const currentColor = color.dataset.id;
    document
      .querySelector(":root")
      .style.setProperty("--customColor", currentColor);
  });
});

window.addEventListener("scroll", () => {
  control.classList.remove("open");
});



// Typeit

  var typed = new Typed('.element', {
    strings: ["Software Developer.", "Python Developer.", "Web Developer."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000
});


// Scroll To

const links = [...document.querySelectorAll(".scroll-link")];

links.map((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navList.classList.remove("open");
  });
});

AOS.init();



// theme
const icons = [...document.querySelectorAll(".theme-icon")];

icons.forEach((icon) => {
  if (icon) {
    icon.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        icon.innerHTML = '<i class="bx bx-sun"></i>';
        icon.style.color = "white";
      } else {
        icon.innerHTML = '<i class="bx bx-moon"></i>';
        icon.style.color = "#121713";
      }
    });
  }
});


var myVar;

function myFunction(){
    myVar = setTimeout(hiding, 3000);
    myVar = setTimeout(showPage,4000);
}

function showPage(){
    document.getElementById("preload").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

function hiding(){
    document.getElementById("preload").style.animation = "fadeout 1s ease";
    document.getElementById("myDiv").style.animation = "fadein 1s ease";
}





   