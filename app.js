const logintab = document.getElementById("login-tab");
const signuptab = document.getElementById("signup-tab");
console.log(logintab.classList[0]);
if (logintab.classList[1] == "tab-active") {
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
} else if (signuptab.classList[1] == "tab-active") {
  logintab.addEventListener("mouseover", function (e) {
    e.preventDefault();
    signuptab.classList.remove("tab-active");
    logintab.classList.add("tab-active");
    logintab.style.transition = "all 1s";
  });

  signuptab.addEventListener("mouseover", function (e) {
    e.preventDefault();
    logintab.classList.remove("tab-active");
    signuptab.classList.add("tab-active");
  });
  logintab.addEventListener("mouseleave", function (e) {
    e.preventDefault();
    logintab.classList.remove("tab-active");
    signuptab.classList.add("tab-active");
  });
}
