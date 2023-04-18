// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

//else statement

await lib.discord.voice['@0.0.1'].tracks.pause({
  guild_id: `${context.params.event.guild_id}`
});
return lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `Haan bhai chup hu mein, gaana bhi pause hai`,
});