$(document).ready(function () {

  let channel = urlParams.get("streamer");
  let mainAccount = channel;

  // Sort function
  function sortByProperty(property) {
    return function (a, b) {
      if (a[property] < b[property])
        return 1;
      else if (a[property] > b[property])
        return -1;
      return 0;
    }
  }

  let client = '';

  // onload set the local storage for clip_id to false.
  localStorage.setItem('clip_id', '');
  client = new tmi.Client({
    options: {
      debug: true,
      skipUpdatingEmotesets: true
    },
    connection: {reconnect: true},
    channels: [mainAccount]
  });

  client.connect().catch(console.error);

  // Create new video element
  let curr_clip = document.createElement('video');
  let clip_index = 0;
  $(curr_clip).appendTo('#clips');

  // Play a clip when scene is active
  loadClip(channel[clip_index]);

  function loadClip(channelName) {

    let clips_json = "";
    let limit = 50;
    // Json data - Ajax calls
    clips_json = JSON.parse($.getJSON({
      'url': "https://twitchapi.teklynk.com/getuserclips.php?channel=" + channelName + "&creator_name=" + channelName,
      'async': false
    }).responseText);

    // Sort array by created_at
    clips_json.data.sort(sortByProperty('created_at'));

    // If no user clips exist, then skip to the next channel
    if (!clips_json.data || typeof clips_json.data === 'undefined' || clips_json.data.length === 0) {
      console.log('channel: ' + channel);
      console.log('no clips exist for channel: ' + channel);

      nextClip(true); // skip clip
      return false;
    }

    // Grab a random clip index anywhere from 0 to the clips_json.data.length.
    randomClip = Math.floor((Math.random() * clips_json.data.length - 1) + 1);

    // log output from each clip for debugging
    console.log('Playing clip Channel: ' + clips_json.data[randomClip]['broadcaster_name']);
    console.log('Playing clip index: ' + randomClip);
    console.log('Playing clip ID: ' + clips_json.data[randomClip]['id']);
    console.log('data length: ' + clips_json.data.length)

    // Checks if clip_id in localStorage matches the clip id from the json data.
    // This helps prevent the same clip from playing again when using Random.
    if (clips_json.data.length > 0 && clips_json.data[randomClip]['id'] === localStorage.getItem('clip_id')) {
        console.log('Clip was previously played. Skipping...');
        nextClip(true); // skip clip
        return false;
    }

    // If clip id exists, save it in localStorage
    if (clips_json.data.length > 0 && clips_json.data[randomClip]['id']) {
        localStorage.setItem('clip_id', clips_json.data[randomClip]['id']);
    } else {
        localStorage.setItem('clip_id', '');
    }

    // Create video element and load a new clip

    // adding a poster will help reduce the gap between clips.
    // set &delay=1 in the url if you want an intentional delay/gap between clips.
    if (parseInt(delay) === 0) {
        // higher resolution thumbnail image for poster. Removes -480x272 from thumbnail url.
        poster = clips_json.data[randomClip]['thumbnail_url'].replace('-480x272','');
        curr_clip.poster = poster;

    }
    curr_clip.src = clips_json.data[randomClip]['clip_url'];
    curr_clip.autoplay = true;
    curr_clip.controls = false;
    curr_clip.volume = 1.0;
    curr_clip.load();

    // Move to the next clip when the current one finishes playing
    curr_clip.addEventListener("ended", nextClip);
  }
});