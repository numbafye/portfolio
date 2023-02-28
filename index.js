function readMore() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

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
