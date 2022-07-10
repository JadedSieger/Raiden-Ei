module.exports = ({
    name: "help",
    code: `  
  $addCmdReactions[✔️]
  $noMentionMessage
  $title[1;Hello $username! Thank you for using Raiden Ei v2!]
  $description[1; You can use ei!, mention the bot, or just "re." to summon the bot
  
  _e.g: ei!<command here>, @Raiden Ei<command here>, re.<command here>_
  ]
  $description[2; 
  __**Here are the commands that Raiden Ei v2 Provides so far.**__

  **ping**
  'usage: ei!ping, re.ping'
  _The Server and Raiden are playing a match of Table Tennis._
  
  **say**
  'usage: ei!say <text>'
  _So is it a cleverbot then? It speaks though-_ 
  
  **avatar**
  'usage: ei!avatar'
  _ever wanted to see you avatar up close?_

**__Music Commands**__

  **youtube**
  'usage: ei!youtube <Song name>
  _used to listen to some tunes you want to vibe to. Use responsibly_

  **queue**
  'usage: ei!queue'
  _Ever had the guts to know how late you are down the line?_

  **disconnect**
  'usage: ei!disconnect'
  _Spare the bot's RAM for god's sakes._

  ]
  `
  });