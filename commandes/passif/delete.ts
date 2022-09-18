import { ICommand } from "wokcommands";
import DiscordJS, { MessageEmbed, Permissions } from "discord.js"


export default{
    category: "passif",
    description: "Supprimer un message de manière RP.",
    slash: true,
    testOnly: true,
    options: [
        {
            name: "message",
            description: "Le message à supprimer (id faire /guidedelete pour explication)",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
        },
        {
            name: "salonlogs",
            description: "Le salon ou le log apparaîtra. TOUJOURS sélectionner le bon.",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.CHANNEL
        },
        {
            name: "nolog",
            description: "Ne pas afficher de logs RP",
            required: false,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.BOOLEAN,
        }

        
    ],

    callback: ({interaction}) =>{
        
        let nolog = false
        const checkManageMessage = interaction.memberPermissions?.has("MANAGE_CHANNELS")
        interaction.member
        
        

        if(1 == 1){


            interaction.reply({
                content: "Vous n'avez pas la permission nécessaire.",
                ephemeral: true,
            })
            return
        }

        const embed = new MessageEmbed()
        .setAuthor({name: "Administration Républicaine", iconURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Galactic_Republic.svg/1200px-Galactic_Republic.svg.png"})
        .setColor("DARK_RED")
        .setFooter({text:"Pour toute informations quant à ce message, contacter l'auteur et/ou l'administration à l'origine de l'action.",iconURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Galactic_Republic.svg/1024px-Galactic_Republic.svg.png"})
        .setDescription("Message Automatique d'Administration Système (MAAS)")
        
        if(nolog){
            /**
             * Supprimer le mess, envoyer un 
             */
        }else{
            embed.setFields(
                {
                    name: "", // Nom de l'user
                    value: "id du message delete",
                }
            )

                // envoyer log dans channel donné
                // Supprimer message

                interaction.reply({
                    embeds: [embed]
                })

            
        }

    }








}as ICommand