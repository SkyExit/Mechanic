{
  "name": "botgame",
  "temp": "",
  "event-type": "1",
  "_id": "ZBkrQ",
  "actions": [
    {
      "activity": "2",
      "nameText": "for &help",
      "url": "http://laurinhummel.de/mechanic/",
      "stat": "0",
      "name": "Set Bot Activity"
    },
    {
      "time": "30",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "activity": "1",
      "nameText": "100+ Commands",
      "url": "",
      "stat": "0",
      "name": "Set Bot Activity"
    },
    {
      "time": "30",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "info": "3",
      "storage": "1",
      "varName2": "guilds",
      "name": "Store Bot Client Info"
    },
    {
      "activity": "0",
      "nameText": "with ${tempVars(\"guilds\")} servers",
      "url": "",
      "stat": "0",
      "name": "Set Bot Activity"
    },
    {
      "time": "30",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "info": "4",
      "storage": "1",
      "varName2": "users2",
      "name": "Store Bot Client Info"
    },
    {
      "activity": "0",
      "nameText": "with ${tempVars(\"users2\")} users",
      "url": "",
      "stat": "0",
      "name": "Set Bot Activity"
    },
    {
      "time": "30",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "filename": "./resources/version.json",
      "storage": "1",
      "varName2": "json",
      "name": "Read File"
    },
    {
      "behavior": "0",
      "varStorage": "1",
      "jsonObjectVarName": "json",
      "path": "version",
      "storage": "1",
      "varName": "v",
      "name": "Parse From Stored Json"
    },
    {
      "gameName": "Version ${tempVars(\"v\")}",
      "gameLink": "",
      "name": "Set Bot Game"
    },
    {
      "time": "30",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "info": "21",
      "storage": "1",
      "varName2": "discordjs",
      "name": "Store Bot Client Info"
    },
    {
      "gameName": "discord.js v${tempVars(\"discordjs\")}",
      "gameLink": "",
      "name": "Set Bot Game"
    },
    {
      "time": "30",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "call": "1",
      "name": "Jump to Action"
    }
  ]
}
