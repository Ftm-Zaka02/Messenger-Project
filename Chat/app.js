const searchBtn = document.getElementById("search-btn");
const searchDiv = document.getElementById("search-div");
const searchInput = document.createElement("input");
const searchCircle = document.createElement("button");
searchInput.placeholder = "Search";
searchInput.classList.add("input-search");
searchCircle.classList.add("search");
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  searchDiv.appendChild(searchInput);
  searchDiv.appendChild(searchCircle);
});
const activeItem = document.getElementsByClassName("active-item")[0];
const chatImg = document.createElement("img");
chatImg.src = "images/chat.icon.png";
chatImg.classList.add("chat-img");
activeItem.appendChild(chatImg);
