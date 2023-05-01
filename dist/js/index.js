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

//Skills glow intervals
//delay works but setting it to all elements in tech-stack not working
const glow = document.querySelectorAll(".tech-stack");

for (let index = 0; index < glow.length; index++) {
  const glowItems = glow[index];

  function aniD() {
    if (glowItems) {
      glowItems.style.animationDelay = "2s";
    }
  }
}

aniD();
