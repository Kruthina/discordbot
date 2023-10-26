module.exports = {
    name: 'latency',
    description: 'checking the latency commnad',
    execute: async(message, args) => {
        const lat = await message.channel.send("checking...");
        message.channel.send(`Latency: ${Math.floor( lat.createdTimestamp - message.createdTimestamp)} ms.`);
    }
}