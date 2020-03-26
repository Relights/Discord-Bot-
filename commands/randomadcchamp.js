exports.run = (client, msg, args, ops) => {
  
  var responses = ["Lucian", "Tristana", "Jhin", "Jinx","Miss Fortune", "Caitlyn", "Vayne", "Draven","Ezreal","Kai'sa","Ashe","Ashe", "Twitch", "Xayah", "Kog'Maw"];
  var random = responses[Math.floor(Math.random()*responses.length)];
  msg.channel.send(random);
}
