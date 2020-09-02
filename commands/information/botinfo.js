{
    "name": "botinfo",
    "permissions": "NONE",
    "restriction": "1",
    "_id": "uOXMQ",
    "actions": [
      {
        "info": "20",
        "storage": "1",
        "varName2": "botID",
        "name": "Store Bot Client Info"
      },
      {
        "info": "0",
        "find": "${tempVars(\"botID\")}",
        "storage": "1",
        "varName": "botMemberOb",
        "name": "Find Member"
      },
      {
        "member": "2",
        "varName": "botMemberOb",
        "info": "21",
        "storage": "1",
        "varName2": "botTag",
        "name": "Store Member Info"
      },
      {
        "member": "2",
        "varName": "botMemberOb",
        "info": "16",
        "storage": "1",
        "varName2": "botAvat",
        "name": "Store Member Info"
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
        "member": "2",
        "varName": "botMemberOb",
        "info": "4",
        "storage": "1",
        "varName2": "botCol",
        "name": "Store Member Info"
      },
      {
        "member": "2",
        "varName": "botMemberOb",
        "info": "23",
        "storage": "1",
        "varName2": "botCreated",
        "name": "Store Member Info"
      },
      {
        "info": "32",
        "storage": "1",
        "varName2": "botCMDs",
        "name": "Store Bot Client Info"
      },
      {
        "info": "3",
        "storage": "1",
        "varName2": "botServers",
        "name": "Store Bot Client Info"
      },
      {
        "info": "21",
        "storage": "1",
        "varName2": "botDJS",
        "name": "Store Bot Client Info"
      },
      {
        "info": "31",
        "storage": "1",
        "varName2": "botNJS",
        "name": "Store Bot Client Info"
      },
      {
        "info": "36",
        "storage": "1",
        "varName2": "botTM",
        "name": "Store Bot Client Info"
      },
      {
        "info": "41",
        "storage": "1",
        "varName2": "botUM",
        "name": "Store Bot Client Info"
      },
      {
        "behavior": "0",
        "interpretation": "1",
        "code": "const { utc } = require('moment');\nconst os = require('os');\nconst ms = require('ms');\nconst { MessageEmbed, version: djsversion } = require('discord.js');\n\nconst core = os.cpus()[0];\n    const embed = new MessageEmbed()\n        .setThumbnail(tempVars(\"botAvat\"))\n        .setColor(tempVars(\"botCol\") || 'BLUE')\n        .addField('General', [\n            `**❯ Client: ** ${tempVars(\"botTag\")} (${tempVars(\"botID\")})`,\n            `**❯ Commands: ** ${tempVars(\"botCMDs\")}`,\n            `**❯ Servers: ** ${tempVars(\"botServers\")}`,\n            `**❯ Users: ** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,\n            `**❯ Channels: ** ${client.channels.cache.size.toLocaleString()}`,\n            `**❯ Creation date: ** ${utc(client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,\n            `**❯ Node.js Version: ** ${process.version}`,\n            `**❯ Discord.js version: ** ${djsversion}`,\n            `**❯ Bot Version: ** ${tempVars(\"v\")}`,\n            '\\u200b'\n        ])\n        .addField('System', [\n            `**❯ Platform: ** ${process.platform}`,\n            `**❯ Uptime: ** ${ms(os.uptime() * 1000, {long: true})}`,\n            `**❯ CPU: ** `,\n            `\\u3000 Cores: ${os.cpus().length}`,\n            `\\u3000 Model: ${core.model}`,\n            `\\u3000 Speed: ${core.speed}MHz`,\n            `**❯ Memory: ** `,\n            `\\u3000 Total: ${tempVars(\"botTM\")}`,\n            `\\u3000 Used: ${tempVars(\"botUM\")}`,\n        ])\n        .setTimestamp();\n\n    msg.channel.send(embed);",
        "storage": "0",
        "varName": "",
        "name": "Run Script"
      }
    ]
  }