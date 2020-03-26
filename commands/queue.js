//View songs inside the queue
exports.run = (clients, msg, args, ops) =>{
    let fetched = ops.active.get(msg.guild.id);

    if(!fetched) return msg.channel.send(":x: **There currently isn\'t any music playing in this channel!**");

    let queue = fetched.queue;
    let nowPlaying = queue[0];

    let resp = `**Now Playing:** \n**${nowPlaying.songTitle}**--- **Requested By: ** **${nowPlaying.requester}** \n\n***Queue:***\n`
    for (var i = 1; i < queue.length; i++){
        resp += `${i}. **${queue[i].songTitle}** --- ***Requested By:*** **${queue[i].requester}**\n`
    }

    msg.channel.send(resp);
}
