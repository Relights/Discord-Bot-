exports.run = (client, msg, args, ops) => {
  
  var responses = ["Aatrox", "Mordekaiser", "Ornn", "Akali", "Yasuo","Garen","Darius","Swain","Jax","Pantheon","Ryze", "Dr. Mundo", "Fiora", "Irelia", "Gnar", "Teemo", "Tryndamere", "Urgot", "Malphite", "Nasus","Vladimir","Sion", "Singed", "Kled"];
  var random = responses[Math.floor(Math.random()*responses.length)];
  msg.channel.send(random);
}
