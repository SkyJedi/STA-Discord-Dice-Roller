const config = require('./config');
const _ = require('lodash');
const seedrandom = require('seedrandom');
const rng = seedrandom('added entropy.', {entropy: true});

const dice = sides => Math.floor(rng() * sides) + 1;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const buildParams = message => {
	let params = message.content.split(' ');
	if (!params[0].startsWith(config.prefix)) {
		let newParams = false;
		params.forEach((param, index) => {
			if (param.startsWith(config.prefix)) newParams = params.slice(index);
		});
		if (!newParams) return;
		params = newParams;
	}
	//remove user mentions
	params.forEach((param, index) => {
		if (param.includes('<') && param.includes('>')) params.splice(index, 1);
	});

	return params;
};

const buildCommand = params => {
	//create command
	if (!params[0]) return [false, params];
	let command = params[0].slice(1);
	params = params.slice(1);
	return [_.toLower(command), params];
};

const buildDescriptor = params => {
	let beg, end;
	let desc = [];
	params.forEach((param, index) => {
		if (param.includes('\"') || param.includes('“') | param.includes('\'')) {
			if (beg === undefined) {
				beg = index;
				end = index;
			} else end = index;
		}
	});

	if (beg !== undefined && end !== undefined) {
		desc = params.slice(beg, end + 1);
		params.splice(beg, end + 1 - beg);
		desc.forEach((word, index) => desc[index] = word.replace(/['"`“]/g, ''));
		desc = desc.join(' ');
	}
	return [desc, params];
};

exports.buildCommand = buildCommand;
exports.buildDescriptor = buildDescriptor;
exports.buildParams = buildParams;
exports.dice = dice;
exports.sleep = sleep;


