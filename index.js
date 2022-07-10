const { Voice, LoadCommands, Bot } = require("aoi.js");
const config = require('./config.json');
const keepAlive = require(`./server.js`);

const bot = new Bot({
  token: config.token,
  prefix: [config.prefix_1,config.prefix_2,config.prefix_3],
  intents: ["guilds", "guildMessages", "guildVoiceStates"],
});

const loader = new LoadCommands(bot);

const voice = new Voice(
  bot,
  {
    cache: {
      cacheType: "Memory",//Disk
      enabled: true,
      //directory : "music", only for Disk type
    },
    soundcloud: {
      //clientId : "SOUNDCLOUD CLIENT ID",
      //limitLikeTrack : 200 
    },//optional
  playerOptions: {
    trackInfoInterval: 5000,
  },//optional
  },
  true, //to enable pruneMusic 
);

bot.command({
  name: "ping",
  code: `ponging at $pingms`
})

bot.status({
  text: "Playing Quality Music for Quality Servers. Use ei!help for commands",
  type: "Streaming",
  time: 10
})

bot.onMessage({
  guildOnly : false
});

voice.onTrackStart();

loader.load(bot.cmd, "./Commands/"); //bot cmds
loader.load(voice.cmd, "./Commands/voice/"); //voice cmds
//"NzA1ODI5NTE2MDY0NDU2NzA1.G9-fWf.GN-woorrkdcVhwP6pYmiRV8Vb1W637ieP1T2ws" IS THE ACTUAL TOKEN.

//"OTAwMjE5MzIwNzEyNDYyMzc4.GwQgGA.mfFzTJMBJwLhjuco3pwSuNM3i95sUFQhKd5l7c" is the Test token.