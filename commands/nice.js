module.exports = {
    name: "nice",
    description: "simple command",
    execute(message, args) {
        message.channel.send(`yessir`);
    },
};