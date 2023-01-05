const hamburgerMenu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const scrollBtn = document.querySelector(".scroll-btn");
hamburgerMenu.addEventListener("click", function () {
  container.classList.toggle("change");
});
scrollBtn.addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
console.log(scrollBtn);

window.onload = function () {
  setTimeout(function () {
    document.querySelector("body").classList.add("display");
  }, 4000);
};
