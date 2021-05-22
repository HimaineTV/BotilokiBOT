const Discord = require('discord.js');
const client = new Discord.Client();

client.login("Nzg1MTEwMDg0NTM4ODU5NTMw.X8zEvg.vkJK75NzwPO2L2p65UI3UQG31-4")

client.on('ready', () => {
    function randomStatus() {
	let status = ["devlopper par RedoxOFF/PinKox", "Abonner vous a RedoxOFF sur youtube", "Devlife_PinKox92#7004"]
	let rstatus = Math.floor(Math.random() * status.lenght);

	client.user.setActivity(status[rstatus], {type: "STREAMING", url: "https://www.youtube.com/channel/UCSSIlAqyiujg6hL7HhkHWzw"});
    }; setInterval(randomStatus, 2000)
});

client.on('message', message => {

    if(message.content === "ping"){
        message.channel.send("pong hehe :D");
    }

})


client.on('message', message => {

    if(message.content === "botiloki dit nous un clash"){
        message.channel.send("ta mere c'est comme un vampire elle dors le jour est elle me su** la nuit");
    }

})


client.on('message', message => {

    if(message.content === "botiloki dit nous un clash2"){
        message.channel.send("ta mere elle est telement grosse que quand dracula veut lui prendre le sang il a le diabette");
    }

})

client.on('message', message => {

    if(message.content === "botiloki dit nous un clash3"){
        message.channel.send("ta mere elle est telement grosse quel a ete élu nouvelle planette par la nasa");
    }

})

client.on('message', message => {

    if(message.content === "beto"){
        message.channel.send("stonks");
    }

})

client.on('message', message => {

    if(message.content === "roi"){
        message.channel.send("des noir");
    }

})

client.on('message', message => {

    if(message.content === "je gaz"){
        message.channel.send("les juif");
    }

})

client.on('message', message => {

    if(message.content === "rocket league"){
        message.channel.send("SHEEEEEEEEEEEEEEEEEEEEEEEEEEEEH");
    }

})

client.on('message', message => {

    if(message.content === "fortnite sa"){
        message.channel.send("pue la merde");
    }

})

client.on('message', message => {

    if(message.content === "abonne toi a"){
        message.channel.send("RedoxOFF");
    }

})

client.on('message', message => {

    if(message.content === "LDT"){
        message.channel.send("Pour niqu** ton serveur rp https://discord.gg/ldt");
    }

})

client.on('message', message => {

    if(message.content === "realui"){
        message.channel.send("oui bah c'est les boss enft https://discord.gg/5JW8wVnfV4");
    }

})