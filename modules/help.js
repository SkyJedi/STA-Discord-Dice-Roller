const config = require('../config');

function help(message, topic) {
	switch (topic) {
		case 'coin':
			message.channel.send(`\`\`\`prolog
${config.prefix}Coin: displays the current coin pool

\`\`\``);
			break;
		case 'roll':
			message.channel.send(`\`\`\`prolog
${config.prefix}Roll DiceIdentifiers
DICE IDENTIFIERS
   
	    
Examples:
    ${config.prefix}roll ddeemp (must use single character identifiers)
    ${config.prefix}roll 2d 2e 1m (must specify a number before each identifier)
\`\`\``);
			break;
		case 'poly':
			message.channel.send(`\`\`\`prolog
${config.prefix}Poly: rolls any combination of polyhedral dice with modifier
Examples:
    poly 1d4 2d6+1 1d100-60 
\`\`\``);
			break;
		default:
			message.channel.send(`\`\`\`prolog
type '${config.prefix}Help [topic]' for further information
${config.prefix}Poly: rolls any combination of polyhedral dice
${config.prefix}Ver: displays bot version
${config.prefix}Help: displays help for topics

${config.prefix}Roll: rolls any combination of dont rest your head dice
${config.prefix}Coin: manages Hope and Despair Pool
\`\`\`
for more information or help join the FFG NDS Assistant Bot server https://discord.gg/G8au6FH

Star Trek Adventures by Modiphius Entertainment
<https://www.modiphius.net/collections/star-trek-adventures>
<https://www.drivethrurpg.com/product/214552/Star-Trek-Adventures-Core-Rulebook?affiliate_id=1131280>

`);
			break;
	}
}

exports.help = help;