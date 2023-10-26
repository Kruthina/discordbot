const Discord = require("discord.js");

module.exports = {
    name: "happy",
    description: "happy command",
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor(0x4fce5a)
            .setTitle("be happy")
            .setFooter("hell yeah bruh");
        message.channel.send(embed);
    },
};