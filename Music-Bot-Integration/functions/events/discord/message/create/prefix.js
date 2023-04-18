// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg-static');
const opus = require('opusscript');

let message = context.params.event.content;
{
  const voiceChannel = message.member.voice.channel;

  if (!voiceChannel) {
    return message.channel.send(
      'You need to be in a voice channel to skip the song!'
    );
  }

  const connection = await voiceChannel.join();
  const dispatcher = connection.dispatcher;

  if (!dispatcher) {
    return message.channel.send('No music is currently playing!');
  }

  dispatcher.end();
  message.channel.send('Skipping the current song!');
}
