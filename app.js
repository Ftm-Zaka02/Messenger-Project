const logintab = document.getElementById("login-tab");
const signuptab = document.getElementById("signup-tab");
console.log(logintab.classList[0]);
if (logintab.classList[1] == "tab-active") {
  signuptab.addEventListener("mouseover", function (e) {
    e.preventDefault();
    signuptab.classList.add("tab-hover");
    signuptab.style.transition = "all 1s";
  });

  signuptab.addEventListener("mouseleave", function (e) {
    e.preventDefault();
    signuptab.classList.remove("tab-hover");
    logintab.style.transition = "all 1s";
  });
} else if (signuptab.classList[1] == "tab-active") {
  logintab.addEventListener("mouseover", function (e) {
    e.preventDefault();
    logintab.classList.add("tab-hover");
    logintab.style.transition = "all 1s";
  });

  logintab.addEventListener("mouseleave", function (e) {
    e.preventDefault();
    logintab.classList.remove("tab-hover");
  });
}
