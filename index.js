const {Client, Events, SlashCommandBuilder } = require("discord.js");
const {token} = require("./config.json");

const client = new Client({intents: []});

client.once(Events.ClientReady, c => {
console.log(`Logged in as ${c.user.username}`);

const ping = new SlashCommandBuilder()
.setName("hi")
.setDescription("Replies with Hello!");

client.application.commands.create(ping);
});

client.on(Events.InteractionCreate, interaction => {
if(interaction.commandName === "hi"){
   interaction.reply("Hello!");
}  
});

client.login(token);
