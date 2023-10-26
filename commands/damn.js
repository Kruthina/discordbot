module.exports = {
    name: "damn",
    description: "you'll be damned",
    execute(message, args) {
        message.channel.send(`${message.author} sure it is, my boi`);
    },
};