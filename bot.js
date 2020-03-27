const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '?';
const ownerID = '424352769630011393'
var version = 1.0;
const active = new Map();

client.on('ready', () =>{
    console.log('This bot is online');
    client.user.setActivity("in the chimba");
});

client.on('message', msg=>{
    var msgs = msg.content.toUpperCase();
    let args = msg.content.slice(PREFIX.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    var swear_word = ("FUCK");
    var swear_responses = ["stop swearing or i will delete ur league account","stop cursing or i will take ur vbucks","bro stop swearing", "STOP SWEARING", "i smell profanity", "stop swearing", "stop cursing or i will turn you into an ostrich"];
    var angry_responses = ["Stop it", ":angry: stop", "repl.it is bad", ":rage: what, repeat that again", "NOOOOOOOOOOOOOOOOO", "dude stop it or I will turn you into a tree"];
    var random = angry_responses[Math.floor(Math.random()*angry_responses.length)];
    var swear = swear_responses[Math.floor(Math.random()*swear_responses.length)];
    var objDate = new Date();
    var hours = objDate.getHours();
    if(msgs.includes("REPL.IT") || msgs.includes("REPLIT")){
        if(!msg.author.bot){
        msg.reply(random);
        }
    }
    if(msg.channel.id == 692921591042146325){
        if(msg.content == "t!fish" || msg.author.bot){
            return;
            }
        }else{
            msg.reply("Use t!fish only!");
            msg.delete(2000);
    }
    if(msgs.includes(swear_word)){
        msg.reply(swear);
       }
 //   if(msg.author.id == 459530051461971969)//aka jacob  {
 //      msg.delete(2000);        
 //   }
    

    if(msg.author.bot) return;
    if (!msg.content.startsWith(PREFIX)) return;

    try{
        
        let ops = {
            ownerID: ownerID,
            active: active
        }
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client,msg,args, ops);
    }catch(error){
        console.log(error.stack);
    }

});



client.login(process.env.TOKEN);
//Logging in
