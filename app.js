const theForm = document.getElementById("theForm");
const rCheck = document.getElementById("rCheck");
const btn = document.getElementById("btn");
let phInput = document.getElementById("phInput");
let passInput = document.getElementById("passInput");
const passDiv = document.getElementById("passDiv");
const phDiv = document.getElementById("phDiv");
let lblErrorPh = document.createElement("label");
let lblErrorPass = document.createElement("label");
lblErrorPh.classList.add("erorr");
lblErrorPass.classList.add("erorr");
let message = "";
let validphone = false;
let validpass = false;
passDiv.appendChild(lblErrorPass);
phDiv.appendChild(lblErrorPh);
btn.addEventListener("click", function () {
  validation();
});

function validation() {
  function validPhone() {
    if (phInput.value == "" || phInput.value == null)
      message = "لطفا فیلد را پر کنید!";
    else if (isNaN(phInput.value)) message = "لطفا عدد وارد کنید!";
    else if (phInput.value.length < 11 || phInput.value.length > 11)
      message = "شماره تلفن باید 11 رقم باشد!";
    else {
      message = "";
      validphone = true;
    }
    lblErrorPh.innerHTML = message;
  }
  function validPass() {
    if (passInput.value == "" || passInput.value == null)
      message = "لطفا فیلد را پر کنید!";
    else if (passInput.value.length > 8 || passInput.value.length < 8)
      message = "رمز عبور باید 8 رقم باشد!";
    else {
      message = "";
      validpass = true;
    }
    lblErrorPass.innerHTML = message;
  }
  validPhone();
  validPass();
  function Submit() {
    if (validpass == true && validphone == true) {
      theForm.action = "Chat/index.html";
      theForm.submit()
    } else {
      theForm.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    }
  }
  Submit();
}

const logintab = document.getElementById("login-tab");
const signuptab = document.getElementById("signup-tab");
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
