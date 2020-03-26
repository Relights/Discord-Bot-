exports.run = (clients, msg, args, ops) => {
         const Discord = require('discord.js');
         let embed = new Discord.RichEmbed()
        .setThumbnail(msg.author.avatarURL)
        .addField("Username: ", msg.author.username, true)
        .addField("Tag: ", msg.author.tag, true)
        .addField("Join Date: ", msg.author.createdAt, true);
        
        msg.channel.send(embed);


}
