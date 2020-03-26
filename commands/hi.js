exports.run = (client, msg, args, ops ) => {
    var responds = ["Hello :wave: ", "Hi", "Hello :wave:", "Oi!"];
    var random_responses = responds[Math.floor(Math.random()*responds.length)];
    msg.channel.send(random_responses);

    
}