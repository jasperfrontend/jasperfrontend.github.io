const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log("Query String: " + queryString + ". urlParams: " + urlParams);
const logo = urlParams.get("logo");
const background = urlParams.get("background");
const streamer = urlParams.get("streamer");
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

if(logo) {
    antiscuffLogo.classList.add("hidden");    
}
if(streamer) {
    const videoPlayerSrc = "./twitch_clips_player-main/clips.html?channel="+streamer+"&limit=50&dateRange=0&shuffle=true&showText=false&customMsg=&showDetails=false&detailsText=&mainAccount="+streamer+"&so=false&command=&modOnly=false&customText=&showFollowing=false&streamerOnly=false&gameTitle=&ref=&clientId=";
    const chatBoxSrc = "https://www.giambaj.it/twitch/jchat/v2/?channel="+streamer+"&size=1&font=2";
    videoPlayer.src = videoPlayerSrc;
    chatBox.src = chatBoxSrc;
}
if(textbox) {
    startingSoon.classList.add("hidden");
}
if(padding) {
    document.body.classList.add("no-padding");
}
if(chat) {
    chatContainer.classList.add("hidden");
    chatBox.classList.add("hidden");
}
if(background) {
    gradientBackground.classList.add("hidden");
}
if(text) {
    textHeading.innerHTML = text;
}
if(clips) {
    clipsPlayer.classList.add("hidden");
    videoPlayer.src = "";

}