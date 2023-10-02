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
messagePart = document.getElementsByClassName("message-part")[0];
sendBtn = document.getElementById("send-btn");
inputMessage = document.getElementsByName("input-message")[0];
sendBtn.addEventListener("click", function () {
  newMessage = document.createElement("div");
  newMessage.classList.add("message-part-me");
  textMessage = document.createTextNode(inputMessage.value);
  if (textMessage != null && textMessage != " ") {
    newMessage.appendChild(textMessage);
    messagePart.appendChild(newMessage);
  }
  inputMessage.value = "";
});



let addBtn=document.getElementById("add-btn")
addBtn.addEventListener("click",function(){
  
})
