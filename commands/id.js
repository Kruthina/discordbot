module.exports = {
    name: "id",
    description: "getting the user's id",
    execute(message, args) {
        message.channel.send(`${message.author}'s id is ${message.author.id}`);
    },
};