{
  "name": "bsc",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "pdrVy",
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
      "code": "const Brawlstars = require(\"brawlstars.js\")\nconst Discord = require('discord.js');\nconst token  = \"Your API Key here\"\nconst client = new Brawlstars.Client(token)\n\n;(async () => {\n    const club = await client.getClub(tempVars(\"tagPO\"))\n    const members = await club.members\n\n    const exampleEmbed = new Discord.MessageEmbed()\n\t.setColor(\"#ffb900\")\n\t.setTitle(club.name + \"'s BS-Stats\")\n\t.setDescription('Some description here')\n\t.setThumbnail('https://vignette2.wikia.nocookie.net/brawlstars/images/1/1c/Brawl_Icon.png/revision/latest?cb=20170621183335')\n\t.addFields(\n\t\t{ name: 'type:', value: club.type, inline: true },\n        { name: 'trophies:', value: club.trophies, inline: true },\n        { name: 'requiredTrophies:', value: club.requiredTrophies, inline: true },\n        { name: 'memberCount:', value: club.memberCount, inline: true },\n        { name: 'isFull:', value: club.isFull, inline: true },\n\t)\n\t.setTimestamp()\n\t.setFooter('Requested by ' + tempVars(\"mem\"), tempVars(\"avat\"));\n\nmsg.channel.send(exampleEmbed);\n})()",
      "storage": "0",
      "varName": "",
      "name": "Run Script"
    }
  ],
  "customData": {
    "Command Info": {
      "category": "Gaming",
      "description": "Get your BrawlStarsClan stats!",
      "include": "Yes"
    }
  }
}
