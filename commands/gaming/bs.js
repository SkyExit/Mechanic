{
  "name": "bs",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "tRYsH",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "info": "21",
      "storage": "1",
      "varName2": "mem",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "avat",
      "name": "Store Member Info"
    },
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "tagPO",
      "name": "Store Command Params"
    },
    {
      "behavior": "0",
      "interpretation": "1",
      "code": "const Brawlstars = require(\"brawlstars.js\")\nconst Discord = require('discord.js');\nconst token  = \"Your API Key Here\"\nconst client = new Brawlstars.Client(token)\n\n;(async () => {\n    const player = await client.getPlayer(tempVars(\"tagPO\"))\n\n    const exampleEmbed = new Discord.MessageEmbed()\n\t.setColor(\"#ffb900\")\n\t.setTitle(player.name + \"'s BS-Stats\")\n\t.setDescription('Some description here')\n\t.setThumbnail('https://vignette2.wikia.nocookie.net/brawlstars/images/1/1c/Brawl_Icon.png/revision/latest?cb=20170621183335')\n\t.addFields(\n\t\t{ name: 'trophies:', value: player.trophies, inline: true },\n        { name: 'highest trophies:', value: player.highestTrophies, inline: true },\n        { name: 'level:', value: player.expLevel, inline: true },\n        { name: 'name:', value: player.name, inline: true },\n        { name: 'expPoints:', value: player.expPoints, inline: true },\n        { name: 'powerPlayPoints:', value: player.powerPlayPoints, inline: true },\n        { name: 'highestPowerPlayPoints:', value: player.highestPowerPlayPoints, inline: true },\n        { name: 'brawlerCount:', value: player.brawlerCount, inline: true },\n        { name: 'soloVictories:', value: player.soloVictories, inline: true },\n        { name: 'duoVictories:', value: player.duoVictories, inline: true },\n        { name: 'trioVictories:', value: player.trioVictories, inline: true },\n        { name: 'totalVictories:', value: player.totalVictories, inline: true },\n\t)\n\t.setTimestamp()\n\t.setFooter('Requested by ' + tempVars(\"mem\"), tempVars(\"avat\"));\n\nmsg.channel.send(exampleEmbed);\n})()",
      "storage": "0",
      "varName": "",
      "name": "Run Script"
    }
  ],
  "comType": "0",
  "customData": {
    "Command Info": {
      "category": "Gaming",
      "description": "Get your BrawlStars stats!",
      "include": "Yes"
    }
  }
}
