exports.run = (client, msg, args, ops) => {
         const Discord = require('discord.js');
         let embed = new Discord.RichEmbed()
        .addField("?play", "**Looks for 10 songs matching your input, select one of them to play**", true)
        .addField("?pause", "**Pauses playback**", true)
        .addField("?resume", "**Resumes playback**", true)
        .addField("?queue", "**Displays the queue**", true)
        .addField("?skip", "**Skips the current song**", true)
        .setTitle('Commands')
        .addField("?userinfo", "**Displays the info for your Discord account(eg Full username, join date)**", true)
        .setFooter("**More commands coming soon Version 1.0.2**");
        
        msg.channel.send(embed);

}
