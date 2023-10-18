import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";
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
let messagePart = document.getElementsByClassName("message-part")[0];
let inputMessage = document.getElementsByName("input-message")[0];

inputMessage.addEventListener("keydown", function () {
  snjBtn.style.display = "none";
  mcpBtn.style.display = "none";
  sendBtn.style.display = "block";
});

sendBtn.addEventListener("click", function () {
  text = inputMessage.value;
  if (text.length > 0) {
    snjBtn.style.display = "block";
    mcpBtn.style.display = "block";
    sendBtn.style.display = "none";
    creatMessageDiv(text);
  }
  inputMessage.value = "";
  snjBtn.style.display = "block";
  mcpBtn.style.display = "block";
  sendBtn.style.display = "none";
});

function creatMessageDiv(text) {
  textMessage = document.createTextNode(text);
  newMessage = document.createElement("div");
  newMessage.classList.add("message-part-me");
  newMessage.appendChild(textMessage);
  messagePart.appendChild(newMessage);
}

//

//! change message with contants
let contacts = document.getElementsByClassName("contacts")[0];
contacts.addEventListener("click", function (e) {
  let elm = e.target.id;
  uploadMessage(elm);
});

function uploadMessage(num) {
  for (let i = 0; i < contacts.children.length - 1; i++) {
    if (num == i) {
      document
        .getElementsByClassName("active-item")[0]
        .classList.remove("active-item");
      contacts.children[i].classList.add("active-item");

      fetch("../Jsons/myMessage.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let messageDivs = document.getElementsByClassName("message-part-me");
          for (let j = 0; j < messageDivs.length; j++) {
            messageDivs[j].innerHTML = data[i][j];
          }
        });

      fetch("../Jsons/theirMessage.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let messageDivs = document.getElementsByClassName("message-part-you");
          for (let j = 0; j < messageDivs.length; j++) {
            messageDivs[j].innerHTML = data[i][j];
          }
        });
    }
  }
}

//!emoji
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

//!voice
let microBtn = document.getElementById("micro-btn");
let container = document.createElement("div");
container.classList.add("voiceBox");
microBtn.addEventListener("mousedown", function () {
  const start = async () => {
    let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    let recorder = new RecordRTCPromisesHandler(stream, {
      type: "audio",
    });
    recorder.startRecording();
    microBtn.addEventListener("mouseup", async () => {
      await recorder.stopRecording();
      let blob = await recorder.getBlob();
      const recordedUrl = URL.createObjectURL(blob);
      const wavesurfer = WaveSurfer.create({
        container: container,
        waveColor: "#fff",
        progressColor: "#fff",
        height: 60,
        url: recordedUrl,
      });

      wavesurfer.on("interaction", () => {
        wavesurfer.play();
      });
      messagePart.appendChild(container);
    });
  };
  start();
});
