require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");

client.commands = new Discord.Collection();
const commandFiles = fs
    .readdirSync("./commands/")
    .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("message", (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    cmd = client.commands.get(command);

    if (command === "beep") {
        cmd.execute(message, args);
    }

    if (command === "shit") {
        cmd.execute(message, args);
    }

    if (command === "sad") {
        cmd.execute(message, args);
    }

    if (command === "happy") {
        cmd.execute(message, args);
    }

    if (command === "damn") {
        cmd.execute(message, args);
    }

    if (command === "nice") {
        cmd.execute(message, args);
    }

    if (command === "id") {
        cmd.execute(message, args);
    }

    if (command === "total") {
        cmd.execute(message, args);
    }
    if (command === "69") {
        cmd.execute(message, args);
    }
    if (command === "cat") {
        cmd.execute(message, args);
    }
    if (command === "mofo") {
        cmd.execute(message, args);
    }
    if (command === "intro") {
        cmd.execute(message, args);
    }
    if (command === "danger") {
        cmd.execute(message, args);
    }
    if (command === "saymyname") {
        cmd.execute(message, args);
    }
    if (command === "right") {
        cmd.execute(message, args);
    }
    if (command === "cj") {
        cmd.execute(message, args);
    }
    if (command === "latency") {
        cmd.execute(message, args);
    }
    if (command === "joke") {
        cmd.execute(message, args);
    }
    if (command === "help") {
        cmd.execute(message, args);
    }
});

client.login(process.env.BOT_TOKEN)
    .then(function() {
    console.log(`Logged in as the ${client.user.tag}!`);
    console.log(`${config.botinfo.name} is version ${config.botinfo.version}`);
    client.user
        .setActivity("Genshin Impact", { type: "PLAYING" })
        .then((param) => {
            console.log(`activity set to ${param.activities[0].name}`);
        })
})
    .catch(function (error) {
        console.log(error);
    }); // process basically includes everything about the machine