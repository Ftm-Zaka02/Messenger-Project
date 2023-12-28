// import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";
const body = document.getElementById("body");
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
  let divs = document.getElementsByClassName(".menu-item");
  let labels = document.querySelectorAll(".menu-item label");
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
let inputMessage = document.getElementsByName("msg")[0];

function send() {
  let text = inputMessage.value;
  if (text.length > 0) {
    snjBtn.style.display = "block";
    mcpBtn.style.display = "block";
    sendBtn.style.display = "none";
    creatMessageDiv(text);
  }
  snjBtn.style.display = "block";
  mcpBtn.style.display = "block";
  sendBtn.style.display = "none";
}
function creatMessageDiv(text) {
  if (text.length > 0) {
    const textMessage = document.createTextNode(text);
    const newMessage = document.createElement("div");
    newMessage.classList.add("message-part-me");
    newMessage.appendChild(textMessage);
    messagePart.appendChild(newMessage);
  }
}

inputMessage.addEventListener("keydown", function () {
  snjBtn.style.display = "none";
  mcpBtn.style.display = "none";
  sendBtn.style.display = "block";
});

$(document).ready(function () {
  $("#formoid").submit(function (event) {
    event.preventDefault();
    var values = $(this).serialize();
    $.ajax({
      type: "get",
      url: "assets/Php/index.php",
      data: values,
      success: function (res) {
        alert(
          "Sending Was Successfull! \n" + "Your Message is :  " + res + "\n"
        );
        send();
        inputMessage.value = "";
      },
    });
  });
});

//! fetch data from database

$("#refresh-btn").click(() => {
  $.ajax({
    type: "get",
    url: "assets/Php/mySQL/fetch.php",
    dataType: "json",
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        let text = data[i];
        creatMessageDiv(text);
      }
    },
  });
});


//!emoji
// const emjBtn = document.getElementById("emoji-btn");
// const { createPicker } = window.picmo;
// inputMessage = document.getElementsByName("input-message")[0];
// const rootElement = document.querySelector("#picker");
// emjBtn.addEventListener("click", function () {
//   rootElement.style = "display:block";
//   const picker = createPicker({
//     rootElement,
//   });
//   picker.addEventListener("emoji:select", (selection) => {
//     inputMessage.value += selection.emoji;
//   });
// });
// inputMessage.addEventListener("mousedown", function () {
//   rootElement.style = "display:none";
// });

// //!voice
// let microBtn = document.getElementById("micro-btn");
// microBtn.addEventListener("mousedown", function () {
//   let voiceBox = document.createElement("div");
//   let container = document.createElement("div");
//   container.classList.add("wave");
//   voiceBox.classList.add("voiceBox");
//   let playIcon = document.createElement("img");
//   let pauseIcon = document.createElement("img");
//   playIcon.src = "images/play.png";
//   pauseIcon.src = "images/Pause.png";
//   playIcon.classList.add("play-icon");
//   pauseIcon.classList.add("pauseIcon");
//   voiceBox.appendChild(playIcon);

// const sendDiv = document.getElementsByClassName("send-div")[0];
// const sendInput = document.getElementById("send-input");
// sendDiv.removeChild(emjBtn);
// sendDiv.removeChild(sendInput);
// sendDiv.removeChild(snjBtn);
// const text = document.createElement("label");
// const redMicro = document.createElement("img");
// redMicro.classList.add("red-micro");
// redMicro.src = "images/micro-red.png";
// text.classList.add("text");
// text.innerHTML = "دکمه را رها کنید تا ضبط پایان یابد!";
// const timer = document.createElement("label");
// let realTime;
// timer.classList.add("timer");
// sendDiv.appendChild(redMicro);
// sendDiv.appendChild(text);
// sendDiv.appendChild(timer);
// timer.innerHTML = "00:00";
// let secound = 0;
// let min = 0;
// const recordTimer = setInterval(() => {
//   secound++;
//   timer.innerHTML = `0${min}:0${secound}`;
//   if (secound > 9) {
//     timer.innerHTML = `0${min}:${secound}`;
//   }
//   if (secound > 60) {
//     secound = 0;
//     min++;
//     timer.innerHTML = `0${min}:${secound}`;
//   }
//   realTime = `0${min}:0${secound}`;
// }, 1000);
// const start = async () => {
//   let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//   let recorder = new RecordRTCPromisesHandler(stream, {
//     type: "audio",
//   });
//   recorder.startRecording();
//   microBtn.addEventListener("mouseup", async () => {
//     clearInterval(recordTimer);
//     sendDiv.removeChild(redMicro);
//     sendDiv.removeChild(text);
//     sendDiv.removeChild(timer);
//     sendDiv.appendChild(snjBtn);
//     sendDiv.appendChild(sendInput);
//     sendDiv.appendChild(emjBtn);
//     await recorder.stopRecording();
//     let blob = await recorder.getBlob();
//     const recordedUrl = URL.createObjectURL(blob);
//     const wavesurfer = WaveSurfer.create({
//       container: container,
//       waveColor: "#fff",
//       progressColor: "#fff",
//       height: 60,
//       width: 120,
//       url: recordedUrl,
//       cursorColor: "#a0b3b0",
//     });
//     let playTimer;
//     secound = 0;
//     min = 0;
//     playIcon.addEventListener("click", () => {
//       if (secound == 0) {
//         timer.innerHTML = `00:00`;
//       }
//       wavesurfer.play();
//       voiceBox.removeChild(playIcon);
//       voiceBox.appendChild(pauseIcon);
//       playTimer = setInterval(() => {
//         secound++;
//         timer.innerHTML = `0${min}:0${secound}`;
//         if (secound > 9) {
//           timer.innerHTML = `0${min}:${secound}`;
//         }
//         if (secound > 60) {
//           secound = 0;
//           min++;
//           timer.innerHTML = `0${min}:${secound}`;
//         }
//       }, 1000);
//     });
//     pauseIcon.addEventListener("click", () => {
//       wavesurfer.pause();
//       voiceBox.removeChild(pauseIcon);
//       voiceBox.appendChild(playIcon);
//       clearInterval(playTimer);
//     });
//     wavesurfer.addEventListener("finish", () => {
//       voiceBox.removeChild(pauseIcon);
//       voiceBox.appendChild(playIcon);
//       clearInterval(playTimer);
//       timer.innerHTML = realTime;
//     });
//     console.log(secound);
//     voiceBox.appendChild(container);
//     timer.classList.add("time");
//     voiceBox.appendChild(timer);
//     if (timer.innerHTML != "00:00") messagePart.appendChild(voiceBox);
//   });
// };
// start();
// });

//! edit and add box
let editForm = document.getElementById("editForm");
let addForm = document.getElementById("addForm");
const closeBtn = document.getElementsByClassName("close");
closeBtn[0].addEventListener("click", () => {
  body.removeChild(editForm);
});
closeBtn[1].addEventListener("click", () => {
  body.removeChild(addForm);
});

function showBox(box) {
  box.style.visibility = "visible";
  let width = 100;
  let height = 100;
  let timer = setInterval(function () {
    if (width > 350) {
      clearInterval(timer);
    } else {
      width += 50;
      height += 50;
      box.style.width = width + "px";
      box.style.height = height + "px";
    }
  }, 25);
}

const editBtn = document.getElementById("edit-btn");
const editBox = document.getElementById("editBox");
editBtn.addEventListener("click", () => {
  showBox(editBox);
});

const addBtn = document.getElementById("add-btn");
const addBox = document.getElementById("addBox");
addBtn.addEventListener("click", () => {
  showBox(addBox);
});
