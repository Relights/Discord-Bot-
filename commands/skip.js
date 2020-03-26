exports.run = async (clients, msg, args, ops) =>{
    let fetched = ops.active.get(msg.guild.id);

    if (!fetched) return msg.channel.send('There currently isn\'t any music playing in the channel!');

    if(msg.member.voiceChannel !== msg.guild.me.voiceChannel) return msg.channel.send('You aren\'t connected to the same channel');
    let userCount = msg.member.voiceChannel.member;

    if(!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];


    ops.active.set(msg.guild.id, fetched);
        if(fetched.queue.length > 1){
        msg.channel.send(':ok_hand: __Sucessfully skipped a song!__');
        return fetched.dispatcher.end();
        }else{
            msg.channel.send("No more song to skip");
        }
    

}
