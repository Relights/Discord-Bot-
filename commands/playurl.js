const ytdl = require('ytdl-core');

exports.run = async (clients, msg, args, ops) => {
    if(!msg.member.voiceChannel) return msg.channel.send('**Please connect to a voice channel!**');
    if(!args[0]) return msg.channel.send(":x: **Please input a url**");

    let validate = await ytdl.validateURL(args[0]);

    if(!validate) return msg.channel.send(":x: **Invalid url, please input a valid url(eg. Youtube)**");

    let info = await ytdl.getInfo(args[0]);

    let data = ops.active.get(msg.guild.id) || {};

    if (!data.connection) data.connection = await msg.member.voiceChannel.join();
    if(!data.queue) data.queue = [];
    data.guildID = msg.guild.id;

    data.queue.push({
        songTitle: info.title,
        requester: msg.author.tag,
        url: args[0],
        announceChannel: msg.channel.id
    });

    if(!data.dispatcher) play(clients, ops, data);
    else{
        msg.channel.send(`:white_check_mark: __ Added to Queue: ${info.title} | Requested By: ${msg.author.tag}__ :ok_hand: `);


    }

    ops.active.set(msg.guild.id, data);


    // let info = await ytdl.getInfo(args[0]);

    // let connection = await msg.member.voiceChannel.join();

    // let dispatcher = await connection.playStream(ytdl(args[0], {filter: 'audioonly'}));

    // msg.channel.send(`***Now Playing: ${info.title}***`);

    async function play(clients, ops, data){

        clients.channels.get(data.queue[0].announceChannel).send(`:arrow_forward:  __**Loading..... ${data.queue[0].songTitle} | Requested By: ${data.queue[0].requester}**__ :white_check_mark: `);

        data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url,{filter: 'audioonly'}));
        data.dispatcher.guildID = data.guildID;

        data.dispatcher.once('end',function(){
            finish(clients, ops, this);
        });
    }
    function finish(clients, ops, dispatcher){

        let fetched = ops.active.get(dispatcher.guildID);

        fetched.queue.shift();

        if(fetched.queue.length > 0){
            ops.active.set(dispatcher.guildID,fetched);
            play(clients,ops,fetched);
        }else{
            ops.active.delete(dispatcher.guildID);


        }
    }


}
