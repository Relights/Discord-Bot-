exports.run = async (clients, msg, args, ops) =>{
    let fetched = ops.active.get(msg.guild.id);
    if(!fetched) return msg.channel.send(":x: There currently isn't any music playing in this channel ");

    if(msg.member.voiceChannel !== msg.guild.me.voiceChannel) return msg.channel.send(":x: You aren't in the same channel");

    if(fetched.dispatcher.paused) return msg.channel.send(":x: This music is already paused.");

    fetched.dispatcher.pause();

    msg.channel.send(`:pause_button: Successfully Paused ${fetched.queue[0].songTitle}`);

}
