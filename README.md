# chatGPT-discord-bot - NotSoToxic

> ### This is a project that provides you to build your own Discord bot using ChatGPT
>
> If this repo helps you, a star is the biggest support for me and also helps you stay up-to-date 
---
> **Warning**
> #### 2022-12-15 Update: Cloudflare are currently preventing the bot from receiving any further messages, so the bot is using the official GPT-3 API until this chaos about cat catching mice ends
> 
> 2022-12-12 Update: OpenAI added Cloudflare protections to their API in ChatGPT, there are some differences in using it on server and desktop environment
 

## Features

* `/chat [message]` Chat with ChatGPT!
* `/private` ChatGPT switch to private mode
* `/public`  ChatGPT switch to public  mode

### Chat



### Mode

* `public mode (default)`  the bot directly reply on the channel

 
* `private mode` the bot's reply can only be seen by who use the command

 

# Setup

## Install

1. `pip install -r requirements.txt`
2. **Change the file name of `config.dev.json` to `config.json`**

## Step 1: Create a Discord bot

1. Go to https://discord.com/developers/applications create an application
2. Build a Discord bot under the application
3. Get the token from bot setting

  
4. Store the token to `config.json` under the `discord_bot_token`

   
   
5. Turn MESSAGE CONTENT INTENT `ON`

  
   
6. Invite your bot to your server via OAuth2 URL Generator

   

## Step 2: Geanerate a OpenAI API key

1. Go to https://beta.openai.com/account/api-keys

2. Click Create new secret key

  

2. Store the SECRET KEY to `config.json` under the `openAI_key`

## Step 3: Run the bot on the desktop
1. Open a terminal or command prompt
2. Navigate to the directory where you installed the ChatGPT Discord bot
3. Run `python3 main.py` to start the bot

## Step 3: Run the bot with docker

1. Build the Dcoker image & Run the Docker container `docker compose up -d`
2. Inspect whether the bot works well `docker logs -t chatgpt-discord-bot`

   ### Stop the bot:

   * `docker ps` to see the list of running services
   * `docker stop <BOT CONTAINER ID>` to stop the running bot

### Have A Good Chat !

## Optional: Setup starting prompt

* A starting prompt would be invoked when the bot is first started or reset
* You can set it up by modifying the content in `starting-prompt.txt`
* All the text in the file will be fired as a prompt to the bot  
* Get the first message from ChatGPT in your discord channel!

   1. Right-click the channel you want to recieve the message, `Copy  ID`
   
       
    
   2. paste it into `config.json` under `discord_channel_id `



---

