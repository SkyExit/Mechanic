{
  "name": "eval",
  "permissions": "NONE",
  "restriction": "4",
  "_id": "sRxja",
  "actions": [
    {
      "behavior": "0",
      "interpretation": "1",
      "code": "const { MessageEmbed } = require('discord.js')\nconst { inspect } = require('util')\n\nconst embed = new MessageEmbed()\n  .setFooter(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true, format: 'png', size: 4096 }))\n\nconst prefix = (server && server.tag) || this.getDBM().Files.data.settings.tag\nconst args = msg.content.slice(prefix.length).trim().split(/ +/g); args.shift()\nconst query = args.join(' ')\nconst code = (lang, code) => (`\\`\\`\\`${lang}\\n${String(code).slice(0, 1000) + (code.length >= 1000 ? '...' : '')}\\n\\`\\`\\``).replace(this.getDBM().Bot.bot.token, '*'.repeat(this.getDBM().Bot.bot.token.length))\n\nif (!query) msg.channel.send('Please, write something so I can evaluate!')\nelse {\n  try {\n    const evald = eval(query)\n    const res = typeof evald === 'string' ? evald : inspect(evald, { depth: 0 })\n\n    embed.addField('Result', code('js', res))\n\n    if (!Boolean(res) || (!Boolean(evald) && evald !== 0)) embed.setColor('RED')\n    else {\n      embed\n        .addField('Type', code('css', typeof evald))\n        .setColor('GREEN')\n    }\n  } catch (error) {\n    embed\n      .addField('Error', code('js', error))\n      .setColor('RED')\n  } finally {\n    msg.channel.send(embed).catch(error => {\n      msg.channel.send(`There was an error while displaying the eval result! ${error.message}`)\n    })\n  }\n}\n",
      "storage": "0",
      "varName": "",
      "name": "Run Script"
    }
  ],
  "_aliases": [
    "evaluate",
    "compile"
  ],
  "comType": "0",
  "customData": {
    "Command Info": {
      "category": "Ownership",
      "description": "Evaluate some JS code",
      "include": "Yes"
    }
  }
}
