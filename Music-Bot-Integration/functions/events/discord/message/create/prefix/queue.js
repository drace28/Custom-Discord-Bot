const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

let message = context.params.event.content;

let searchString = message.split(' ').slice(1).join(' ');

try {
  let youtubeLink;
  if (!searchString) {
    return lib.discord.channels['@0.3.0'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: `Abe aage bhi likhna hota hai iske, gawar kahi ka!`,
    });
  }
  if (!searchString.includes('youtube.com')) {
    let results = await ytSearch(searchString);
    if (!results?.all?.length) {
      return lib.discord.channels['@0.3.0'].messages.create({
        channel_id: `${context.params.event.channel_id}`,
        content: `Ye nahi mil raha, dusra koi dekh`,
      });
    }
    youtubeLink = results.all[0].url;
  } else {
    youtubeLink = searchString;
  }
  let queueKey = `${context.params.event.guild_id}:musicQueue`;
  let currentQueue = await lib.utils.kv['@0.1.16'].get({
    key: queueKey,
    defaultValue: []
  });
  currentQueue.push(youtubeLink);
  await lib.utils.kv['@0.1.16'].set({
    key: queueKey,
    value: currentQueue
  });
  //start
  // Get the list of tracks in the queue
  let trackList = currentQueue.map((track, index) => {
    return `${index + 1}. ${track}`;
  }).join('\n');
  
  // Send a message to the server with the list of tracks
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Ye jo neeche gaane hai yahi chalaunga\n${trackList}`
  });
  //end
}
catch (e) {
  // ... error message logic
}