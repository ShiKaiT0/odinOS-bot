import { ICommand } from "wokcommands";
import DiscordJS, { MessageEmbed, Role, TextChannel } from "discord.js"

export default{

    /**
     * à faire: check pour la permission de gérer rôles
     */


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
            description: "les rôles qui auront accès au channel.", 
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
        const cChannel = interaction.channel as TextChannel

        embed.setAuthor({name: interaction.member?.user.username??'', iconURL: interaction.user.avatarURL()??''})

        const accessOne = (interaction.options.getRole("accès") as Role)
        const accessTwo = (interaction.options.getRole("accès2") as Role)
        const accessThree = (interaction.options.getRole("accès3") as Role)

        if(interaction.options.getString("type") == "defAC"){

            let str = ", "

            if(accessTwo != null){str = str +  accessTwo.name}
            if(accessThree != null){str = str + accessThree.name}

            embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Access-granted.png/1200px-Access-granted.png")
                 .setFields(
                    {
                        name: "Définition d'accès",
                        value: "Accès à : " + accessOne.name + str                  
                    }
                 )
            .setTitle("Modifications des droits")
            .setFooter({text:"Pour toute informations quant à ce message, contacter l'auteur et/ou l'administration à l'origine de l'action.",iconURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Galactic_Republic.svg/1024px-Galactic_Republic.svg.png"})
            .setDescription("Message Automatique d'Administration Système (MAAS)")
            .setColor("GREEN")
            


            
            
            if (interaction.channel!.isThread()) return;
            
            

            if(accessOne != null){
                cChannel.permissionOverwrites.edit((accessOne), {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                })
            }


            if(accessTwo != null){
                cChannel.permissionOverwrites.edit((accessTwo), {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                })
            }
            

            if(accessThree != null){
                cChannel.permissionOverwrites.edit((accessThree), {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                })
            }
            
            
            cChannel.permissionOverwrites.edit(cChannel.guild.roles.everyone, {
                VIEW_CHANNEL: false
            })

            
           interaction.reply({
            embeds: [embed]
           })
            
            
            

        }

        if(interaction.options.getString("type") == "askAC"){
            embed.setColor("AQUA")
            .setFields(
                {
                    name: "Demande d'accès :",
                    value: "En attente de vérification par l'administration. Si le processus prends trop de temps, n'hésitez pas à mentionner.",
                    inline: true
                }
            )
            .setThumbnail("https://cdn3.emoji.gg/emojis/9800-hnt.png")
            .setFooter({text:"Pour toute informations quant à ce message, contacter l'auteur et/ou l'administration à l'origine de l'action.",iconURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Galactic_Republic.svg/1024px-Galactic_Republic.svg.png"})
            .setDescription("Message Automatique d'Administration Système (MAAS)")

            interaction.reply({
                embeds : [embed]
            })

        }

        if(interaction.options.getString("type") == "deleteAC"){

            let str = ", "

            if(accessTwo != null){str = str +  accessTwo.name}
            if(accessThree != null){str = str + accessThree.name}

            embed.setColor("DARK_RED")
            .setFields(
                {
                    name: "Retrait d'accès aux grades/utilisateurs suivants :",
                    value: "De : " + accessOne.name + str
                }
            )

            .setFooter({text:"Pour toute informations quant à ce message, contacter l'auteur et/ou l'administration à l'origine de l'action.",iconURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Galactic_Republic.svg/1024px-Galactic_Republic.svg.png"})
            .setThumbnail("https://pratiquesnumeriques.be/images/4/4b/Images_access-denied.png")
            .setDescription("Message Automatique d'Administration Système (MAAS)")
            .setTitle("Modification des Droits")

            if (interaction.channel!.isThread()) return;

            if(accessOne != undefined){
                cChannel.permissionOverwrites.delete(accessOne)
                cChannel.permissionOverwrites.edit(accessOne, {
                    SEND_MESSAGES: false,
                    SEND_MESSAGES_IN_THREADS: false,
                    VIEW_CHANNEL: false
                })
            }

            if(accessTwo != undefined){
                cChannel.permissionOverwrites.delete(accessTwo)
                cChannel.permissionOverwrites.edit(accessTwo, {
                    SEND_MESSAGES: false,
                    SEND_MESSAGES_IN_THREADS: false,
                    VIEW_CHANNEL: false
                })
            }

            if(accessThree != undefined){
                cChannel.permissionOverwrites.delete(accessThree)
                cChannel.permissionOverwrites.edit(accessThree, {
                    SEND_MESSAGES: false,
                    SEND_MESSAGES_IN_THREADS: false,
                    VIEW_CHANNEL: false
                })
            }

            interaction.reply({
                embeds: [embed]
            })

        }
    }


    /**
     * TODO : Ajouter les rôles à choisir, ajouter un changement de permission dans le channel actif, (sauf si un fichier est sélectionné)
     * 
     * 
     * https://cdn3.emoji.gg/emojis/9800-hnt.png
    */

}as ICommand