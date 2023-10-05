const searchBtn = document.getElementById("search-btn");
const searchDiv = document.getElementById("search-div");
const searchInput = document.createElement("input");
const searchCircle = document.createElement("button");
//! search input & search function
searchInput.placeholder = "Search";
searchInput.classList.add("input-search");
searchCircle.classList.add("search");
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  searchDiv.appendChild(searchInput);
  searchDiv.appendChild(searchCircle);
  searchCircle.addEventListener("click", searchFunction);
});
function searchFunction() {
  divs = document.querySelectorAll(".menu-item");
  labels = document.querySelectorAll(".menu-item label");
  const text = searchInput.value.toLowerCase();
  for (let i = 0; i < labels.length; i++) {
    const item = labels[i].textContent;
    if (item.toLowerCase().indexOf(text) == -1) {
      divs[i].style.display = "none";
    }
  }
}

//!send message
let snjBtn = document.getElementById("sanjagh-btn");
let mcpBtn = document.getElementById("micro-btn");
let sendBtn = document.getElementById("send-btn");
messagePart = document.getElementsByClassName("message-part")[0];
inputMessage = document.getElementsByName("input-message")[0];

inputMessage.addEventListener("keydown", function () {
  snjBtn.style.display = "none";
  mcpBtn.style.display = "none";
  sendBtn.style.display = "block";
});

sendBtn.addEventListener("click", function () {
  newMessage = document.createElement("div");
  newMessage.classList.add("message-part-me");
  textMessage = document.createTextNode(inputMessage.value);
  if (textMessage.length>0) {
    snjBtn.style.display = "block";
    mcpBtn.style.display = "block";
    sendBtn.style.display = "none";
    newMessage.appendChild(textMessage);
    messagePart.appendChild(newMessage);
  }
  inputMessage.value = "";
  snjBtn.style.display = "block";
  mcpBtn.style.display = "block";
  sendBtn.style.display = "none";
});

let contants = document.getElementsByClassName("contants");
contants[0].addEventListener("click", function () {
  document
    .getElementsByClassName("active-item")[0]
    .classList.remove("active-item");
  this.classList.add("active-item");
});

const emjBtn = document.getElementById("emoji-btn");
const { createPicker } = window.picmo;
inputMessage = document.getElementsByName("input-message")[0];
const rootElement = document.querySelector("#picker");
emjBtn.addEventListener("click", function () {
  rootElement.style = "display:block";
  const picker = createPicker({
    rootElement,
  });
  picker.addEventListener("emoji:select", (selection) => {
    inputMessage.value += selection.emoji;
  });
});
inputMessage.addEventListener("mousedown", function () {
  rootElement.style = "display:none";
});
