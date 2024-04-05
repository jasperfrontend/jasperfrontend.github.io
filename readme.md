# Default OBS Overlay
This is an OBS overlay.

It's fully based on CSS grid (okay and 1 item is aligned with flexbox because I don't know what I did wrong - it wouldn't work with CSS grid).

## URL Params
```js
const background = urlParams.get("background");
const streamer = urlParams.get("streamer");
const textbox = urlParams.get("textbox");
const padding = urlParams.get("padding");
const text = urlParams.get("text");
const chat = urlParams.get("chat");
const clips = urlParams.get("clips");
```