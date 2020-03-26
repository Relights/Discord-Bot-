exports.run = (clients, msg, args, ops) => {
    if(msg.author.id !== ops.ownerID) return msg.channel.send("Sorry, only the owner can use this command.");
    try{
        delete require.cache[require.resolve(`./${args[0]}.js`)];

    }catch(error){
        return msg.channel.send(`Unable to reload: ${args[0]}`);


    }

    msg.channel.send(`Successfully reloaded: ${args[0]}`);
}