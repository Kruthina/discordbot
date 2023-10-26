module.exports = {
    name: "total",
    description: "getting the total no. of members in the respective server",
    execute(message, args) {
        message.channel.send(`total no. of members: ${message.guild.memberCount}`);
    },
};