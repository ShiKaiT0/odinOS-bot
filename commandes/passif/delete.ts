import { ICommand } from "wokcommands";
import DiscordJS, { MessageEmbed } from "discord.js"


export default{
    category: "passif",
    description: "Supprimer un message de manière RP.",
    slash: true,
    testOnly: true,
    options: [
        {
            name: "message",
            description: "Le message à supprimer",
            required: true,
            type: ' ', // Vérifier si message est un type.
        },
        {
            name: "salonLogs",
            description: "Le salon ou le log apparaîtra. Utilisez nolog si vous ne voulez pas.",
            required: true,
            type: ' ' // Channel.
        }

        
    ],

    callback: ({}) =>{
        


        if(1=1 /* Changer pour pas la perm */){

        }

        embed = new MessageEmbed()
        .setAuthor({name: "Administration Républicaine", iconURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Galactic_Republic.svg/1200px-Galactic_Republic.svg.png"})
        .setColor("DARK_RED")
        .setFooter({text:"Pour toute informations quant à ce message, contacter l'auteur et/ou l'administration à l'origine de l'action.",iconURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Galactic_Republic.svg/1024px-Galactic_Republic.svg.png"})
        .setDescription("Message Automatique d'Administration Système (MAAS)")

    }








}as ICommand