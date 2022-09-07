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
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
        },
        {
            name: "accès",
            description: "les rôles qui auront accès au channel. (faites /accesGuide)", // TODO: faire la commande expliquant comment ça marche.
            required: true,
        }
    ],


    callback: ({interaction}) => {

        const embed = new MessageEmbed()

        embed.setAuthor({name: interaction.member?.user.username??'', iconURL: interaction.user.avatarURL()??''})

        if(interaction.options.getString("type") == "defAC"){
            embed.setThumbnail("https://cdn3.emoji.gg/emojis/8383-blocked.png")
                 .setFields(
                    {
                        name: "Définition d'accès",
                        value: ""
                    }
                 )
        }

        if(interaction.options.getString("type") == "askAC"){

        }

        if(interaction.options.getString("type") == "deleteAC"){

        }
    }


    /**
     * TODO : Ajouter les rôles à choisir, ajouter un changement de permission dans le channel actif, (sauf si un fichier est sélectionné)
     * 
     * 
     * https://cdn3.emoji.gg/emojis/9800-hnt.png
    */

}as ICommand