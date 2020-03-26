exports.run = async (clients, msg, args, ops) =>{
    let fetched = ops.active.get(msg.guild.id);
    if(!fetched) return msg.channel.send(":x: There currently isn't any music playing in this channel ");

    if(msg.member.voiceChannel !== msg.guild.me.voiceChannel){
        msg.channel.send(":x: Your not in the same channel");
    }

    if(!fetched.dispatcher.paused) return msg.channel.send(":x: This music isn't paused.");

    fetched.dispatcher.resume();

    msg.channel.send(`:arrow_forward: Successfully Resumed ${fetched.queue[0].songTitle}`);

}
