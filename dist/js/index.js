//extend about text to overflow in text box.
function readMore() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("textBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//TYPEWRITER EFFECT on READ MORE
let i = 0;
const txt =
  "The courses really pushed me to my limits and taught me a multitude of languages, frameworks, databases and architectural designs of websites. I am currently learning how to become more skilled in React and SASS. Outside of frontend development I enjoy playing my instruments and producing music, trying new restaurants and skateboarding. I strive towards bettering my skills everyday so that I can make an impact in me and my family's lives. Hope you enjoy my portfolio! Have a blessed day."; /* The text */
const speed = 30; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("more").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// SWIPER JS CAROUSEL FOR PROJECTS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  grabCursor: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Skills glow
const glow = document.querySelectorAll(".tech-stack");
//stops animation then after delay animation resumes on all elements. better way is to do invidual delay times for different affect.
glow.forEach(function aniD(el, index) {
  setTimeout(function aniD() {
    el.style.animationDelay = "12s";
  }, index * 2000);
});

//NAVBAR SCROLL TRANSITION get navbar and y position of window to affect it on scroll.
const navbar = document.querySelector("nav");

window.onscroll = () => {
  //if y axis scroll is pass/greater than 20px (down)
  if (window.scrollY > 20) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};

console.log(navbar);
