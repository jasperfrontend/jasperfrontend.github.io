const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const logo = urlParams.get("logo");
const background = urlParams.get("background");
const channel = urlParams.get("channel") || urlParams.get("streamer");
const textbox = urlParams.get("textbox");
const padding = urlParams.get("padding");
const text = urlParams.get("text");
const chat = urlParams.get("chat");
const clips = urlParams.get("clips");
const gradientBackground = document.getElementById("gradient");
const antiscuffLogo = document.getElementById("antiscuff-logo");
const videoPlayer = document.getElementById("video-player");
const startingSoon = document.getElementById("starting-soon");
const chatContainer = document.getElementById("chat");
const chatBox = document.getElementById("chat-iframe");
const textHeading = document.querySelector("#starting-soon h1");
const clipsPlayer = document.querySelector(".clips-player");

if(logo === "0") {
    antiscuffLogo.classList.add("hidden");    
}

if(textbox == 0) {
    startingSoon.classList.add("hidden");
}
if(padding == 0) {
    document.body.classList.add("no-padding");
}
if(chat == 0) {
    chatContainer.classList.add("hidden");
    chatBox.classList.add("hidden");
}
if(background == 0) {
    gradientBackground.classList.add("hidden");
    var root = document.getElementsByTagName( 'html' )[0];
    root.setAttribute( 'class', 'background-hidden' );
}
if(text) {
    textHeading.innerHTML = text;
}
if(clips == 0) {
    clipsPlayer.classList.add("hidden");
    videoPlayer.src = "";

}