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
      "code": "const Brawlstars = require(\"brawlstars.js\")\nconst Discord = require('discord.js');\nconst token  = \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjRkNzMyNWJiLWZhNTQtNGQ0NC1hMDY5LTA3N2ExYTVmNWFiZiIsImlhdCI6MTU5MzYxNDAxMCwic3ViIjoiZGV2ZWxvcGVyL2E2NjMzNTI2LWE2NzItNWQ3Ny1iZDE4LTNjY2Y0Y2Q3ZTA4MyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMjU1LjI1NS4yNTUuMCIsIjE2NC4xMzIuMTEwLjEzOCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.p0Vr5MmCuXEBxJ1Tx1gHaVSGDdoHwhnUoD13dfFO2EpQE1u3i_QKTFRQNhtO5hb1D-1EnSze93JFfP93eAA--w\"\nconst client = new Brawlstars.Client(token)\n\n;(async () => {\n    const club = await client.getClub(tempVars(\"tagPO\"))\n    const members = await club.members\n\n    const exampleEmbed = new Discord.MessageEmbed()\n\t.setColor(\"#ffb900\")\n\t.setTitle(club.name + \"'s BS-Stats\")\n\t.setDescription('Some description here')\n\t.setThumbnail('https://vignette2.wikia.nocookie.net/brawlstars/images/1/1c/Brawl_Icon.png/revision/latest?cb=20170621183335')\n\t.addFields(\n\t\t{ name: 'type:', value: club.type, inline: true },\n        { name: 'trophies:', value: club.trophies, inline: true },\n        { name: 'requiredTrophies:', value: club.requiredTrophies, inline: true },\n        { name: 'memberCount:', value: club.memberCount, inline: true },\n        { name: 'isFull:', value: club.isFull, inline: true },\n\t)\n\t.setTimestamp()\n\t.setFooter('Requested by ' + tempVars(\"mem\"), tempVars(\"avat\"));\n\nmsg.channel.send(exampleEmbed);\n})()",
      "behavior": "0",
      "interpretation": "1",
      "storage": "0",
      "varName": "",
      "VTypeSelect": "0",
      "CVTypeValue": "",
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
