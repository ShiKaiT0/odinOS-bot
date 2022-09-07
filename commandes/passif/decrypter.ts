import { ICommand } from "wokcommands";
import DiscordJS, { MessageEmbed } from "discord.js"

export default{

    category: "Passif",
    description: "Décrypter un fichier de manière RP",
    slash: true,
    testOnly: true,
    options : [
        {
            name: "data",
            description: "Masse de Data en Gb.",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.INTEGER,
            max_value: 150,

        },
        {
            name: "roll",
            description: "Est-ce qu'un roll sera effectué ? Ce paramètre sera visible.",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.BOOLEAN
        },

    ],

    callback : async({interaction}) => {
        let rand = 0
        let timeout = 0
        const embed = new MessageEmbed()
            .setTitle("Décryptage lancé..")
            .setThumbnail("https://tenor.com/view/based-hack-hacker-security-cryptography-gif-19828021")
            .setAuthor({name: "Datapd républicain", iconURL:"https://static.wikia.nocookie.net/frstarwars/images/8/8e/Datapad.png/revision/latest?cb=20161204211102"})
            .setColor("YELLOW")

        if((interaction.options.getBoolean("roll") ?? true) === true){rand = Math.floor(Math.random() * 101)}

        if(rand > 49){
            embed.setFields(
                {
                    name: "Statut du décryptage",
                    value : "En cours.",
                }
            )
        }else{
            embed.setFields(
                {
                    name: "Statut du décryptage",
                    value: "échoué."
                }
            )
            .setColor("RED")

            interaction.reply({
                embeds: [embed]
            })
        }


        let data = interaction.options.getInteger("data")??1
        if(data >= 150){timeout = (60*3)*1000}
        if(data > 99 && data < 150){timeout = (60*2 + 30)*1000}
        if(data > 79 && data < 100){timeout = 120000}
        if(data > 59 && data < 80){timeout = 90000}
        if(data < 60){timeout = 60000}


        embed.setFooter({text: "Temps d'attente estimé : " + timeout/1000 + "s, " + (timeout/1000)/60 +"mn."})


        const newMessage = await interaction.reply({
            embeds: [embed],
            fetchReply: true
        })



        let randWaitTime = Math.floor(Math.random() * 16)
        await new Promise(resolve => setTimeout(resolve, timeout))

        const newEmbed = (newMessage.embeds[0] as MessageEmbed)
        .setColor("GREEN")
        .setFields(
            {
                name: "Statut du décryptage",
                value: "Effectué."
            }
        )
        .setFooter({text: "Fin d'attente."})

        interaction.editReply({
            embeds: [newEmbed]
        })


    }



    /**
     * Simplement checker les erreurs ect.
     */

} as ICommand