import { ICommand } from "wokcommands";
import DiscordJS, { Intents, Message, MessageEmbed } from 'discord.js';



export default{

    category: "Utilitaires",
    description: "Obtenez la formation de base. Vous seul verrez le pannel !",
    testOnly: true,

    slash: true,
    options : [
        {
            name: "formation",
            description: "Quelle formation ?",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
            required: true,
            choices: [
                {
                    name: "Base",
                    value:"fBase"
                },
                {
                    name: "Hacker",
                    value: "fHack"
                },
                {
                    name: "EOD",
                    value: "fEOD"
                }
            ]
        }
    ],


    callback: ({guild, args, interaction}) => {


        const memberID = interaction.user.id
        const roleIDHCK = "1011024610118086780"
        const roleIDfHCK = "1011024610118086782"
        const roleIDEOD = "1011024610118086781" 
        const roleIDfEOD = "1011024610118086783"

        const member = guild?.members.cache.get(memberID)

        const embed = new MessageEmbed()
            .setAuthor({name: "Administration Républicaine", iconURL: "https://cdn3.emoji.gg/emojis/8995-staff-icon.png"})
            .setFooter("Heureux d'avoir pu vous aider !")

    


        if((interaction.options.getString("formation") == "fHack" && member?.roles.cache.has(roleIDHCK)) || (interaction.options.getString("formation") == "fHack" && member?.roles.cache.has(roleIDfHCK)) ){
            embed.setFields({
                name:"Formation Hacker",
                value: "https://docs.google.com/document/d/1EHoapYWvcq1TTegnoJpkeiSAIEIfN_hfQrFFNiCjlHo/edit?ouid=111367903045730119609&usp=docs_home&ths=true",
            })

            interaction.reply({
                ephemeral:true,
                embeds: [embed]
            })
            return
        }else if((interaction.options.getString("formation") == "fEOD" && member?.roles.cache.has(roleIDEOD)) || (interaction.options.getString("formation") == "fEOD" && member?.roles.cache.has(roleIDfEOD))){
            embed.setFields({
                name: "Formation EOD",
                value: "https://docs.google.com/document/d/1nRqdVVhX3GF-p9Cv80biJSsy25LGdidt7VEUJMyD6Zg/edit"
            })

            interaction.reply({
                ephemeral:true,
                embeds: [embed]
            })
            return

        }else if(interaction.options.getString("formation") == "fBase"){
            embed.setFields({
                name: "Formation Ingénieur",
                value: "https://docs.google.com/document/d/1u8lt7VolcPuYiHRjUoxVVeOCKQHE6afXAN3aPgXpGrI/edit"
            })
            interaction.reply({
                ephemeral:true,
                embeds: [embed]
            })
            return
        }else{
            interaction.reply({
                ephemeral: true,
                content: "❌ Vous n'avez pas le rôle nécessaire à la formation."
            })
        }

        
        


    }


} as ICommand