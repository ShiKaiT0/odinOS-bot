import { ICommand } from "wokcommands";
import DiscordJS, { MessageEmbed } from "discord.js"

export default{

    category: "Passif",
    description: "Décrypter un fichier de manière RP",
    slash: true,
    options : [
        {
            name: "roll",
            description: "Est-ce qu'un roll sera effectué ? Ce paramètre sera visible.",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.BOOLEAN
        }
    ],

    callback : ({interaction}) => {
        const embed = new MessageEmbed()
            .setTitle("Décryptage lancé..")
            .setThumbnail("https://tenor.com/view/based-hack-hacker-security-cryptography-gif-19828021")
            .setAuthor({name: "Datapd républicain", iconURL:"https://static.wikia.nocookie.net/frstarwars/images/8/8e/Datapad.png/revision/latest?cb=20161204211102"})
    }

} as ICommand