# OBS Video Player Overlay
This is an OBS overlay. It plays video thanks to [teklynk/twitch_clips_player](https://github.com/teklynk/twitch_clips_player). 

## Default implementation
Add `?streamer=streamernamehere` to the end of the URL to show clips!
[https://jasperfrontend.github.io/soon.html?streamer=xqc](https://jasperfrontend.github.io/soon.html?streamer=xqc)

Remove the logo, change the text, remove the chat, remove the background\*
[https://jasperfrontend.github.io/soon.html?streamer=xqc&logo=0&text=Custom%20Text!&chat=0&background=0](https://jasperfrontend.github.io/soon.html?streamer=xqc&logo=0&text=Custom%20Text!&chat=0&background=0)

Just custom text, remove everything else.
[https://jasperfrontend.github.io/soon.html?background=0&text=Just%20Custom%20Text&logo=0&chat=0&clips=0](https://jasperfrontend.github.io/soon.html?background=0&text=Just%20Custom%20Text&logo=0&chat=0&clips=0)

\* Custom background coming in a future update.

## Controlling this with Streamer.bot
Since it's just some URL manipulation, you can go **wild** with Streamer.bot on this overlay. Manipulate streamer name, box text, enable/disable parts of the overlay. It's all within your powers. 

## URL Params
```js
const background = urlParams.get("background"); // accepts anything to HIDE the background
const streamer = urlParams.get("streamer"); // accepts a streamer name
const textbox = urlParams.get("textbox"); // accepts anything to HIDE the textbox
const padding = urlParams.get("padding"); // accepts anything to HIDE the padding (this is a bit borked still)
const text = urlParams.get("text"); // accepts any text that will display in the textbox (unless you've hidden it)
const chat = urlParams.get("chat"); // accepts anything to HIDE the chat
const clips = urlParams.get("clips"); // accepts anything to HIDE the clips player
```

## Example OBS URL
Be sure to set to 1920x1080.
Remove any css in the OBS browser source settings

[https://jasperfrontend.github.io/soon.html?streamer=xqc](https://jasperfrontend.github.io/soon.html?streamer=xqc)
