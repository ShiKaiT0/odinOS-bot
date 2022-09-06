import { ICommand } from "wokcommands";
import DiscordJS, { MessageEmbed } from "discord.js"

export default{

    category: "Rôle-Play",
    description: "Définir,demander ou retirer des accès aux fichiers.",
    slash: true,
    testOnly: true,
    options: [
        {
            name: "type",
            description: "Type d'action",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
            choices: [
                {
                    name: "définir",
                    value: "defAC"
                },

                {
                    name: "demander",
                    value: "askAC"
                },

                {
                    name: "retirer",
                    value: "deleteAC"
                }
            ]
        },
        {
            name: "fichier",
            description: "le fichier en question",
            type: DiscordJS.ApplicationCommandOptionTypes.STRING,
        }
    ],


    callback: ({interaction}) => {

        embed.setAuthor({name: interaction.member?.user.username, iconURL: interaction.user.avatarURL()??''})

        if(interaction.options.getString("type") == "defAC"){
            
        }

        if(interaction.options.getString("type") == "askAC"){

        }

        if(interaction.options.getString("type") == "deleteAC"){

        }
    }


}as ICommand