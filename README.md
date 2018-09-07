# STA-Discord-Dice-Roller
CREDIT: SkyJedi made dis

A Discord Bot Roller for the Star Trek Adventures RPG

## Usage

- !Roll DiceIdentifiers
    - DICE IDENTIFIERS

  	    
  Examples:
      !roll  (must use single character identifiers)
      !roll  (must specify a number before each identifier)

## Installation and Setup

1. First you will need to have NodeJS installed on your machine. You can find the latest version [here](https://nodejs.org/en/)
2. Next create a discord account for your bot. You can do this [here](https://discordapp.com/developers/applications/me)
  1. Click "New App"
  2. Provide a Name (this is the name people will see when the bot joins a channel) and Description
  3. Click "Create App"
  4. On the new screen click "Create a Bot User"
  5. Open Notepad
  6. Under the heading "App Bot User" you will see "Token:click to reveal" Click to reveal it and copy the resulting text and paste it in notepad. Be sure to keep this token private.
  7. Under the heading "App Details" Copy the number after "Client ID:" and paste this in notepad as well.
  8. Replace "CLIENT_ID_GOES_HERE" in the following link with the Client ID you copied in the above step https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID_GOES_HERE&scope=bot&permissions=0
  9. Paste the edited link into a web browser, select the discord server you wish to add the bot to, and click "Authorize".
3. Click "Clone or Download" at the top of this page. Click "Download Zip" and extract the files.
4. Open config.js with a text editor program of your choice (wordpad > notepad).
5. Replace "BOT TOKEN" with your bot token you copied in step 2.6
6. Save file
7. Your bot is now configured and ready to launch.

## Running the bot

To run the bot, Just execute the file "start.bat" on a windows or "start.command" on mac.

## Updating the bot

To update the bot, Just execute the file "UPDATE.bat" on a windows or "UPDATE.command" on mac. Your config.js file will be backed up and restored automatically

## Configuration File config.js

  config.js has properties

  1. token
    - this is the login token for your bot
  2. prefix
    - this is the symbol the bot uses to recognize commands. This is set to "!" by default
  3. maxRollsPerDie
    - This is the max number per dice type that can be rolled in a given roll command. Set to 100 by default. Commands that don't respect the roll limit will be aborted and send an error message to the discord chat. 


## Patrons
- Xavi Santamaria
- Flobio
- Scott McNeil

[Patreon](https://www.patreon.com/SkyJedi)

[Modiphius Entertainment](https://www.modiphius.net/collections/star-trek-adventures)