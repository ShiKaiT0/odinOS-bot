import { ICommand } from "wokcommands";
import DiscordJS, { MessageEmbed } from "discord.js"

export default{

    category: "Passif",
    description: "Signaler un mouvement de fichier/message de manière rp",
    slash: true,
    testOnly: true,
    options: [
        {
            name: "message",
            description: "message en question",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
        },
        {
            name: "raison",
            description: "Raison du mouvement de fichier",
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
        },
        {
            name: "noJustify",
            description: "Affiche 'non spécifiée' en raison.",
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.BOOLEAN,
        }

    ],

    callback: ({interaction}) => {

        /**
         * Vérification gérer messages ici
         */


        const embed = new MessageEmbed
        embed.setAuthor({name: "Administration républicaine", iconURL: "https://static.wikia.nocookie.net/starwars/images/1/17/Coronet_cargo_manifest.png/revision/latest?cb=20120906220411"})
        .setColor("YELLOW")
        .setThumbnail("https://cdn-icons-png.flaticon.com/512/124/124837.png")
        .setTitle("Changement sur la base de données")
        .setDescription("Message Automatique d'Administration Système (MAAS)")
        .setFields(
            {
                name: "Fichier :",
                value: " " // id mesage 
            },
            {
                name: "Par :",
                value: " " // user qui invoque
            },
            {
                name: "Raison :",
                value: " " // arg raison, check si non add
            }
        )
        

        interaction.reply({
            embeds: [embed]
        })



    }


}as ICommand