const theForm = document.getElementById("theForm");
let phInput = document.getElementById("phInput");
let passInput = document.getElementById("passInput");
let rePassInput = document.getElementById("rePassInput");
const btn = document.getElementById("btn");
const passDiv = document.getElementById("passDiv");
const rePassDiv = document.getElementById("rePassDiv");
const phDiv = document.getElementById("phDiv");
let lblErrorPh = document.createElement("label");
let lblErrorPass = document.createElement("label");
let lblErrorRePass = document.createElement("label");
lblErrorPh.classList.add("erorr");
lblErrorPass.classList.add("erorr");
lblErrorRePass.classList.add("erorr");
let message = "";
let valid=false
passDiv.appendChild(lblErrorPass);
phDiv.appendChild(lblErrorPh);
rePassDiv.appendChild(lblErrorRePass);
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
        valid = true;
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
        valid = true;
      }
    lblErrorPass.innerHTML = message;
  }
  function validRePass() {
    if (rePassInput.value == "" || rePassInput.value == null)
      message = "لطفا فیلد را پر کنید!";
    else if (rePassInput.value.length > 8 || rePassInput.value.length < 8)
      message = "رمز عبور باید 8 رقم باشد!";
    else if (rePassInput.value != passInput.value)
      message = "رمز عبور و تکرار رمز باید برابر باشد!";
      else {
        message = "";
        valid = true;
      }
    lblErrorRePass.innerHTML = message;
  }
  validPhone();
  validPass();
  validRePass();
  function submit() {
    if (valid == false) {
      theForm.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    } else if (valid == true) {
      theForm.action = "../Chat/index.html";
    }
  }
  submit();
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
