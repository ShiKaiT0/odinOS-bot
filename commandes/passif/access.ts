import { ICommand } from "wokcommands";
import DiscordJS, { MessageEmbed, Role, TextChannel } from "discord.js"

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
            name: "accès",
            description: "les rôles qui auront accès au channel. (faites /accesGuide)", // TODO: faire la commande expliquant comment ça marche.
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.ROLE,
            required: true,
        },
        {
            name: "accès2",
            description: "deuxième rôle ayant accès",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.ROLE  
        },
        {
            name: "accès3",
            description: "troisième rôle ayant accès",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.ROLE  
        },
        {
            name: "fichier",
            description: "le fichier en question",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
        },

    ],


    callback: ({interaction}) => {

        const embed = new MessageEmbed()

        embed.setAuthor({name: interaction.member?.user.username??'', iconURL: interaction.user.avatarURL()??''})

        const accessOne = (interaction.options.getRole("accès") as Role)
        const accessTwo = (interaction.options.getRole("accès2") as Role)
        const accessThree = (interaction.options.getRole("accès3") as Role)

        if(interaction.options.getString("type") == "defAC"){
            embed.setThumbnail("https://cdn3.emoji.gg/emojis/8383-blocked.png")
                 .setFields(
                    {
                        name: "Définition d'accès",
                        value: "Accès à :" + accessOne.name + ", " + accessTwo.name + "," + accessThree.name                  
                    }
                 )
            
            
            if (interaction.channel!.isThread()) return;
            
            const cChannel = interaction.channel as TextChannel

            cChannel.permissionOverwrites.edit((accessOne), {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
            })
            
            cChannel.permissionOverwrites.edit(cChannel.guild.roles.everyone, {
                VIEW_CHANNEL: false
            })

            
           interaction.reply({
            embeds: [embed]
           })
            
            
            

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