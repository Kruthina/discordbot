module.exports = {
    name: "beep",
    description: "beep command",
    execute(message, args) {
        message.channel.send("boop");
    },
};