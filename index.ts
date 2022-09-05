import DiscordJS, { Intents } from "discord.js"
import dotenv from "dotenv"
import WOKCommands from "wokcommands"
import path from "path"

dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES
    ]
})

client.on('ready', async () => {
    console.log("Yeet !")

    new WOKCommands(client, {
        commandDir: path.join(__dirname,'commandes'),
        typeScript: true,
        testServers: ["1011024610059374702","881620349177954304"],
        botOwners: ["343759373958643714"]
    })

})


client.login(process.env.TOKEN)