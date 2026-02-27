const hamburger = document.getElementById("hamburger");
const navContainer = document.getElementById("nav-container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navContainer.classList.toggle("show");
});
