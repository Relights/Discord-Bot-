exports.run = (clients, msg, args, ops) => {
    var num = Math.floor((Math.random() * 100) + 1);
    var responses = ["Lucky number","thats a lucky number","your lucky", "lucky af"];
    var random = responses[Math.floor(Math.random()*responses.length)];
    if(num == 100 || num == 1){
     msg.channel.send(random);
    }else{
        msg.channel.send(num);
    }

}
