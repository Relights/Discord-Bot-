exports.run = (client, msg, args, ops) => {
    if(msg.author.id !== ops.ownerID) return msg.channel.send(":x: Sorry, only the owner can use this command.");
    let user = msg.mentions.members.first();
    user.kick().then((member) => {
        msg.channel.send(user + " has been removed from this server :wave: ");
    })
        
        
    

}
