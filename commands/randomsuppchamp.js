exports.run = (client, msg, args, ops) => {
  
  var responses = ["Alistar","Bard","Blitzcrank","Brand","Braum","Fiddlesticks","Galio","Janna","Karma","Leona","Lulu","Lux","Morgana","Nami","Nautilus","Pyke","Rakan","Sona","Soraka","Swain","Tahm Kench","Taric","Thresh","Yuumi","Zyra","Zilean"];
  var random = responses[Math.floor(Math.random()*responses.length)];
  msg.channel.send(random);
}
