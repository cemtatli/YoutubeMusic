const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

let header = document.querySelector(".header-section");
window.addEventListener("scroll", function () {
  header.classList.toggle("navbar-sticky", window.scrollY > 180);
});
window.addEventListener("scroll", function () {
  navbar.classList.remove("active", window.scrollY > 0);
});
