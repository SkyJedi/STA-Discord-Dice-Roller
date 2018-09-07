const functions = require('./functions');
const Discord = require('discord.js');
const client = new Discord.Client();
const _ = require('lodash');
const config = require('./config');
const modules = require('./modules');
const version = require('./package').version;

client.login(config.token).catch(error => console.error(error));

client.on('ready', () => {
	console.log(`Bot version ${version}`);
	console.log(`Logged in as ${client.user.username}!`);
}, error => console.error(error));

//Called whenever a users send a message to the server
client.on('message', message => {
	let params, command, desc;
	//Ignore messages sent by the client
	if (message.author.bot) return;

	//check to see if client can send messages on channel
	if (message.channel.type !== 'dm') {
		if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) return;
	}

	//build params
	params = functions.buildParams(message);

	if (!params) return;

	//build command
	[command, params] = functions.buildCommand(params);
	if (!command) return;

	//make the descriptor
	[desc, params] = functions.buildDescriptor(params);

	//set the rest of params to lowercase
	params = params.filter(Boolean);
	params.forEach((param, index) => params[index] = _.toLower(param));

	console.log(`${message.author.username}, message: ${message}, command: ${command}, params: ${params}`);

//************************COMMANDS START HERE************************

	switch (command) {
		case 'ver':
			message.channel.send(`${client.user.username}: version: ${version}`).catch(error => console.error(error));
			break;
		case 'poly':
		case 'p':
			modules.poly(message, params);
			break;
		case 'roll':
		case 'r':
			modules.roll(message, params);
			break;
		case 'help':
		case 'h':
			modules.help(message, params[0]);
			break;
	}
}, error => console.error(error));
