const Discord = require("discord.js");

module.exports = {
    name: "intro",
    description: "intro command",
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor(0x00008b)
            .setTitle("Hello i'm skynet")
            .setFooter("you'll like me for sure");
        message.channel.send(embed);
    },
};