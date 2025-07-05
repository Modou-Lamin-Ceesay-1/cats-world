// script.js
const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close-icon");
const nav = document.getElementById("primary-nav");

hamburger.addEventListener("click", () => {
  nav.classList.add("show");
  hamburger.style.display = "none";
  closeIcon.style.display = "inline";
});

closeIcon.addEventListener("click", () => {
  nav.classList.remove("show");
  hamburger.style.display = "inline";
  closeIcon.style.display = "none";
});
