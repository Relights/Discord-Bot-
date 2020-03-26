exports.run = (client, msg, args, ops) => {
  
  var responses = ["Yasuo","Ahri","Akali","Anivia","Annie","Aurelion Sol","Azir","Aatrox","Brand","Cassiopeia","Corki","Diana","Ekko","Fizz","Heimerdinger","Irelia","Kassadin","Katarina","Kog'Maw","LeBlanc","Lissandra","Lux","Malzahar","Neeko","Orianna","Pantheon","Qiyana","Ryze","Swain","Sylas","Syndra","Taliyah","Talon","Tristana","Twisted Fate","Veigar","Vel'Koz","Xerath","Zed","Zoe"];
  var random = responses[Math.floor(Math.random()*responses.length)];
  msg.channel.send(random);
}
