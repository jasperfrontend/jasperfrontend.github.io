# OBS Video Player Overlay
This is an OBS overlay. It plays video thanks to [teklynk/twitch_clips_player](https://github.com/teklynk/twitch_clips_player). 

## Default implementation
Add `?streamer=streamernamehere` to the end of the URL to show clips!
[https://jasperfrontend.github.io/soon.html?channel=xqc](https://jasperfrontend.github.io/soon.html?channel=xqc)

Remove the logo, change the text, remove the chat, remove the background\*
[https://jasperfrontend.github.io/soon.html?channel=xqc&logo=0&text=Custom%20Text!&chat=0&background=0](https://jasperfrontend.github.io/soon.html?channel=xqc&logo=0&text=Custom%20Text!&chat=0&background=0)

Just custom text, remove everything else.
[https://jasperfrontend.github.io/soon.html?background=0&text=Just%20Custom%20Text&logo=0&chat=0&clips=0](https://jasperfrontend.github.io/soon.html?background=0&text=Just%20Custom%20Text&logo=0&chat=0&clips=0)

\* Custom background coming in a future update.

## Controlling this with Streamer.bot
Since it's just some URL manipulation, you can go **wild** with Streamer.bot on this overlay. Manipulate streamer name, box text, enable/disable parts of the overlay. It's all within your powers. 

## URL Params
```js
const background = urlParams.get("background"); // accepts anything to HIDE the background
const channel = urlParams.get("channel"); // accepts a channel name (your twitch username)
const textbox = urlParams.get("textbox"); // accepts 0 to HIDE the textbox
const padding = urlParams.get("padding"); // accepts 0 to HIDE the padding (this is a bit borked still)
const text = urlParams.get("text"); // accepts any text that will display in the textbox (unless you've hidden it)
const chat = urlParams.get("chat"); // accepts 0 to HIDE the chat
const clips = urlParams.get("clips"); // accepts 0 to HIDE the clips player
const shuffle = urlParams.get("shuffle"); // accepts true to shuffle your clips playback
```
