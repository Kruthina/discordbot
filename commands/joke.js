const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: 'joke',
    description: 'random joke command generator',

    async execute(message, args) {

        const response = await message.channel.send('joke incoming...');
        let { body } = await superagent.get('https://official-joke-api.appspot.com/random_joke');

        if (!body) {
            message.channel.send('my bad');
        }

        const embed = new Discord.MessageEmbed()
            .setColor(0xff0000)
            .setTitle(body.setup)
            .setDescription(body.punchline)
            .setFooter(`for: ${message.author.username}`)

        message.channel.send(embed);
    }
}