const burger = document.querySelector(".hamburger");
const off = document.querySelector(".off");
burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  off.classList.toggle("active");
});
