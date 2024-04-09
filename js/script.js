const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const logo = urlParams.get("logo");
const background = urlParams.get("background");
const channel = urlParams.get("channel");
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
// if(streamer) {
//     const videoPlayerSrc = "./twitch_clips_player-main/clips.html?channel="+streamer+"&limit=50&dateRange=0&shuffle=true&showText=false&customMsg=&showDetails=false&detailsText=&mainAccount="+streamer+"&so=false&command=&modOnly=false&customText=&showFollowing=false&streamerOnly=false&gameTitle=&ref=&clientId=";
//     const chatBoxSrc = "https://www.giambaj.it/twitch/jchat/v2/?channel="+streamer+"&size=1&font=2";
//     videoPlayer.src = videoPlayerSrc;
//     chatBox.src = chatBoxSrc;
// }
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