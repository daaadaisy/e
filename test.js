const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log(`Tester bot is online!`)
})

 
client.on('message', (receivedMessage) => {

    if (receivedMessage.content.startsWith("+")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) 
    let splitCommand = fullCommand.split(" ") 
    let primaryCommand = splitCommand[0] 
    let arguments = splitCommand.slice(1) 

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) 

    if (primaryCommand == "ping") {
        helpCommand(arguments, receivedMessage)
    } else {
        receivedMessage.channel.send("+ping <@319633037837074443> <@562130697188278282> <@501164215344562197>")
    }
}
function helpCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
        receivedMessage.channel.send("+ping <@319633037837074443> <@562130697188278282> <@501164215344562197>")
    } else {
        receivedMessage.channel.send("+ping <@319633037837074443> <@562130697188278282> <@501164215344562197>")
    }
}
client.login("xx") 

