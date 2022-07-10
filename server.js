const express =  require("express");
const server = express();

server.all("/", (req,res) =>{
   res.send("Bot is running!")
})

function keepAlive(){
    server.listen(3001, ( ) =>{
        console.log("Listening on port 4000")
    })
}

module.exports = keepAlive