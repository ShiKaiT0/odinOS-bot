import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import DiscordJS, { Intents, Message } from 'discord.js'

export default{

    category: "Utilitaires",
    description: "Permet de faire parler le bot, pour une action Rôle-Play",
    slash: true,
    testOnly: true,
    options: [
        {
            name:"contenu",
            description: "Ce que va afficher le message système. Attention, <1024 caractères.",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
            required: true,
            max_length: 1024,
            minLength: 1,
        },
    ],

    callback: ({interaction})=>{

        const embed = new MessageEmbed()
            .setAuthor({name: "Narration", iconURL:"https://cdn.discordapp.com/attachments/902209900682313758/1011034495325048883/Photo_1661119466325.jpg?size=4096"})
            .setTitle("[ Message Système ]")
            .setFields({
                name: "Contenu : ",
                value: interaction.options.getString("contenu")??'',
            })
            .setThumbnail("https://cdn3.emoji.gg/emojis/9707-achtungicon.png")

        return embed
    }

} as ICommand