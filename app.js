const logintab = document.getElementById("login-tab");
const signuptab = document.getElementById("signup-tab");
signuptab.addEventListener("mouseover", function (e) {
  e.preventDefault();
  logintab.classList.remove("tab-active");
  signuptab.classList.add("tab-active");
  signuptab.style.transition = "all 1s";
});

logintab.addEventListener("mouseover", function (e) {
  e.preventDefault();
  signuptab.classList.remove("tab-active");
  logintab.classList.add("tab-active");
});
signuptab.addEventListener("mouseleave", function (e) {
  e.preventDefault();
  signuptab.classList.remove("tab-active");
  logintab.classList.add("tab-active");
});
