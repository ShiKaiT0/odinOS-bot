import { ICommand } from "wokcommands";
import DiscordJS, { MessageEmbed } from "discord.js"

export default{

    category: "Passif",
    description: "Décrypter un fichier de manière RP",
    slash: true,
    testOnly: true,
    options : [
        {
            name: "roll",
            description: "Est-ce qu'un roll sera effectué ? Ce paramètre sera visible.",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.BOOLEAN
        },
        {
            name: "data",
            description: "Masse de Data en Gb.",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
            maxValue: ""

        }
    ],

    callback : async({interaction}) => {
        let rand = 0
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

        const newMessage = await interaction.reply({
            embeds: [embed],
            fetchReply: true
        })

        timeout = Math.floor(Math.random() * 16)
        await new Promise(resolve => setTimeout(resolve, timeout*1000))

        const newEmbed = (newMessage.embeds[0] as MessageEmbed)
        .setColor("GREEN")
        .setFields(
            {
                name: "Statut du décryptage",
                value: "Effectué."
            }
        )


    }



    /**
     * TODO : Faire attendre un temps aléatoire (4 < t < 15) 
     * Check si roll true, alors l'effectuer, puis ensuite continuer. Autrement, autoriser directement. 
     * Ajouter en paramètre la masse de data et générer le temps approp.
     */

} as ICommand