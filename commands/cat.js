const Discord = require("discord.js");
// const fetch = require('node-fetch');
const superagent = require("superagent");

module.exports = {
    name: "cat",
    description: "simple cat command",
    async execute(message, args) {
        const msg = await message.channel.send("uploading...");
        let { body } = await superagent.get("http://aws.random.cat/meow");

        if (!body) {
            return message.channel.send("my bad");
        }

        const embed = new Discord.MessageEmbed()
            .setColor(0xf6d33c)
            .setTitle("cats everywhere")
            .setImage(body.file)
            .setFooter(`for: ${message.author.username}`);

        message.channel.send(embed);
    },
};