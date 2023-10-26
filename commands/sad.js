const Discord = require("discord.js");

module.exports = {
    name: "sad",
    description: "sad command",
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor(0x00008b)
            .setTitle("cheer up kiddo")
            .setFooter("just let it go");
        message.channel.send(embed);
    },
};