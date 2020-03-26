exports.run = (client, msg, args, ops) => {
  
  var responses = ["Amumu","Dr. Mundo","Elise","Evelynn","Gragas","Graves","Hecarim","Ivern","Jarvan IV","Jax","Karthus","Kayn","Kha'Zix","Kindred","Lee Sin","Malphite","Master Yi","Nautilus","Nidalee","Nocturne","Nunu","Olaf","Pantheon","Rammus","Rek'Sai","Rengar","Sejuani","Shaco","Shyvana","Skarner","Sylas","Taliyah","Trundle","Udyr","Vi","Volibear","Warwick","Wukong","Xin Zhao","Zac"];
  var random = responses[Math.floor(Math.random()*responses.length)];
  msg.channel.send(random);
}
