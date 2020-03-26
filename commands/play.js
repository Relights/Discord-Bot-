const search = require('yt-search');
exports.run = (clients, msg, args, ops) => {
    search(args.join(' '), function(error, res){
        if(error) return msg.channel.send(":x: **Enter a song name after ?play**");

        let videos = res.videos.slice(0,10);
        let resp = '';
        for(var i in videos){
            resp += `__**[${parseInt(i) + 1}]**__ \`${videos[i].title}\`\n`;
        }

        resp += `\n**Select a number between \`1-${videos.length}\`**`;

        msg.channel.send(resp);

        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;

        const collector = msg.channel.createMessageCollector(filter);
        collector.videos = videos;

        collector.once('collect', function(m){
            let commandFile = require('./playurl.js');
            commandFile.run(clients, msg, [this.videos[parseInt(m.content)-1].url], ops);
        });
    })
}
