{
    "name": "userinfo",
    "permissions": "NONE",
    "restriction": "1",
    "_id": "HJvJH",
    "actions": [
      {
        "condition": "1",
        "comparison": "0",
        "value": "1",
        "iftrue": "3",
        "iftrueVal": "2",
        "iffalse": "0",
        "iffalseVal": "",
        "name": "Check Parameters"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "Please mention somebody!",
        "storage": "0",
        "varName2": "",
        "name": "Send Message"
      },
      {
        "name": "End Action Sequence"
      },
      {
        "member": "0",
        "varName": "",
        "dataName": "badges.dev",
        "defaultVal": "\"false\"",
        "storage": "1",
        "varName2": "dev",
        "name": "Store Member Data"
      },
      {
        "member": "0",
        "varName": "",
        "dataName": "badges.hunter",
        "defaultVal": "\"false\"",
        "storage": "1",
        "varName2": "hunter",
        "name": "Store Member Data"
      },
      {
        "member": "0",
        "varName": "",
        "dataName": "badges.partner",
        "defaultVal": "\"false\"",
        "storage": "1",
        "varName2": "partner",
        "name": "Store Member Data"
      },
      {
        "member": "0",
        "varName": "",
        "dataName": "badges.premium",
        "defaultVal": "\"false\"",
        "storage": "1",
        "varName2": "premium",
        "name": "Store Member Data"
      },
      {
        "member": "0",
        "varName": "",
        "dataName": "badges.team",
        "defaultVal": "\"false\"",
        "storage": "1",
        "varName2": "team",
        "name": "Store Member Data"
      },
      {
        "member": "0",
        "varName": "",
        "info": "15",
        "storage": "1",
        "varName2": "statusM",
        "name": "Store Member Info"
      },
      {
        "code": "const { MessageEmbed } = require('discord.js');\nconst moment = require('moment');\n\nconst flags = {\n    DISCORD_EMPLOYEE: '<:name:748954989656801361>',\n    DISCORD_PARTNER: '<:name:748954989665189899>',\n    BUGHUNTER_LEVEL_1: '<:name:748954989782630411>',\n    BUGHUNTER_LEVEL_2: '<:name:748954989602537564>',\n    HYPESQUAD_EVENTS: '<:name:748954989564657754>',\n    HOUSE_BRAVERY: '<:name:748954989623509062>',\n    HOUSE_BRILLIANCE: '<:name:748954989786955907>',\n    HOUSE_BALANCE: '<:name:748954989296091187>',\n    EARLY_SUPPORTER: '<:name:748954989631766558>',\n    TEAM_USER: 'Team User',\n    SYSTEM: '<:name:749631258681671790>',\n    VERIFIED_BOT: '<:name:749631258476413078>',\n    VERIFIED_DEVELOPER: '<:name:748954989614989332>'\n};\n\nif(tempVars(\"dev\") == \"true\") {\n    var dev = \"<:name:742075633990893669> \"\n} else {\n    var dev = \"<:name:742075633655611433> \";\n}\n\nif(tempVars(\"hunter\") == \"true\") {\n    var hunter = \"<:name:742075638256631878> \"\n} else {\n    var hunter = \"<:name:742075639774969916> \";\n}\n\nif(tempVars(\"partner\") == \"true\") {\n    var partner = \"<:name:742075636490960966> \"\n} else {\n    var partner = \"<:name:742075635618283521> \";\n}\n\nif(tempVars(\"premium\") == \"true\") {\n    var premium = \"<:name:742075637837332570> \"\n} else {\n    var premium = \"<:name:742075638109962415> \";\n}\n\nif(tempVars(\"team\") == \"true\") {\n    var team = \"<:name:742406693937217618> \"\n} else {\n    var team = \"<:name:742406693941411910> \";\n}\n\nconst member = msg.mentions.members.last() || msg.guild.members.cache.get(target) || msg.member;\n        const roles = member.roles.cache\n            .sort((a, b) => b.position - a.position)\n            .map(role => role.toString())\n            .slice(0, -1);\n        const userFlags = member.user.flags.toArray();\n        const embed = new MessageEmbed()\n            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512}))\n            .setColor(member.displayHexColor || 'BLUE')\n            .addField('User', [\n                `**❯ Username:** ${member.user.username}#${member.user.discriminator}`,\n                `**❯ ID:** ${member.id}`,\n                `**❯ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,\n                `**❯ Avatar:** [Link to Avatar](${member.user.displayAvatarURL({dynamic: true})})`,\n                `**❯ Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,\n                `**❯ Status:** ${tempVars(\"statusM\")}`,\n                `**❯ Game:** ${member.user.presence.game || 'Not playing a game.'}`,\n                '\\u200b'\n            ])\n            .addField('Member', [\n                `**❯ Highest Role:** ${member.roles.highest.id === msg.guild.id ? 'None' : member.roles.highest.name}`,\n                `**❯ Server Joine Date:** ${moment(member.joinedAt).format('LL LTS')}`,\n                `**❯ Hoist Role:** ${member.roles.hoist ? member.roles.hoist.name : 'None'}`,\n            ])\n            .addField('Mechanic badges', dev + hunter + partner + premium + team, false)\n        msg.channel.send(embed);",
        "behavior": "0",
        "interpretation": "1",
        "storage": "0",
        "varName": "",
        "VTypeSelect": "0",
        "CVTypeValue": "",
        "name": "Run Script"
      }
    ]
  }