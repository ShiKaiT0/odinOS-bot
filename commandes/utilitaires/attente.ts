import { ICommand } from "wokcommands";
import DiscordJS, { Interaction, Message, MessageEmbed } from 'discord.js'


export default{

    category: "Utilitaires",
    description: "Vous permet de mettre un timer, pour une quelconque action rp.",
    testOnly: true,
    slash: true,
    options: [
        {
            name: "temps",
            description: "Le temps à attendre.",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.INTEGER,
            required: true,
        },
        {
            name: "type",
            description: "Minutes ? Heures ? Secondes ?",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
            choices: [
                {
                    name:"Minutes",
                    value:"mn"
                },
                {
                    name: "Secondes",
                    value:"s"
                },
                {
                    name: "Heures",
                    value: "h"
                }
            ],
            required: true,
        }
    ],


    

    callback: async({interaction}) => {

        let x = interaction.options.getInteger("temps")
        let timeout = 0
        let gvalue = x

        if(interaction.options.getString("type") == "mn"){
            timeout = x!*60
        }
        else if(interaction.options.getString("type") == "s"){
            timeout = x!
        }
        else if(interaction.options.getString("type") == "h"){
            timeout = (x!*60)*60
        }


        const embed = new MessageEmbed()
            .setAuthor({name: "Narration", iconURL:"https://cdn.discordapp.com/attachments/902209900682313758/1011034495325048883/Photo_1661119466325.jpg?size=4096"})
            .setThumbnail("https://cdn3.emoji.gg/emojis/1149-timer.png")
            .setColor("YELLOW")
            .setFields(
                {
                    name: "En attente pour :",
                    value: "" + gvalue + " " + interaction.options.getString("type")
                }
            )
        
            const newMessage = await interaction.reply({
                embeds: [embed],
                fetchReply: true
            }) 

            await new Promise(resolve => setTimeout(resolve, timeout*1000))

            const newEmbed = (newMessage.embeds[0] as MessageEmbed)
            newEmbed.setColor("GREEN")
            newEmbed.setFields(
                {
                    name: "Fin d'attente.",
                    value: "" + gvalue + " " + interaction.options.getString("type")
                }
            )
            newEmbed.setThumbnail("https://upload.wikimedia.org/wikipedia/en/e/e4/Green_tick.png")
            
            interaction.editReply({
                embeds: [newEmbed]
            })
            
    }






} as ICommand