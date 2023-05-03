//extend about text to overflow in text box.
function readMore() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("textBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.style.border = "none";
    btnText.style.outline = "none";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.style.border = "none";
    btnText.style.outline = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//carousel function
//Create a function that will show one project at a time and have arrows to cycle through the 3 projects.

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
