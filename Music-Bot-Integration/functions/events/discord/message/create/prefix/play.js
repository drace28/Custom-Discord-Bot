// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

//music code starts here
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

let message = context.params.event.content;
//main part

let searchString = message.split(' ').slice(1).join(' ');
  
  try {
    let youtubeLink;
    if (!searchString) {
      return lib.discord.channels['@0.3.0'].messages.create({
        channel_id: `${context.params.event.channel_id}`,
        content: `Abe aage toh likh iske, gaane ka naam likh`,
      });
    }
  
    if (!searchString.includes('youtube.com')) {
      let results = await ytSearch(searchString);
      if (!results?.all?.length) {
        return lib.discord.channels['@0.3.0'].messages.create({
          channel_id: `${context.params.event.channel_id}`,
          content: `Kya bhai mtlb kuch bhi likhega? nahi hai yaha esa kuch`,
        });
      }
      youtubeLink = results.all[0].url;
    } else {
      youtubeLink = searchString;
    }
let downloadInfo = await ytdl.getInfo(youtubeLink);
//start

await lib.discord.voice['@0.0.1'].tracks.play({
  channel_id: `${process.env.VOICE_CHANNEL}`,
    
    //end
    guild_id: `${context.params.event.guild_id}`,
    download_info: downloadInfo
  });
  return lib.discord.channels['@0.3.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Ye gaana chala raha hu **${downloadInfo.videoDetails.title}**`,
  });
} catch (e) {
  return lib.discord.channels['@0.3.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Dikkat ho rahi hai, nahi chal raha!`,
  }
  );
  }