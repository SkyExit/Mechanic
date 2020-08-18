{
  "name": "gend",
  "permissions": "NONE",
  "restriction": "4",
  "_id": "gIEuf",
  "actions": [
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "message": "0",
      "varName": "",
      "info": "0",
      "ParamN": "1",
      "separator": "",
      "storage": "1",
      "varName2": "embedID",
      "name": "Store Message Params"
    },
    {
      "behavior": "0",
      "interpretation": "1",
      "code": "const Discord = require(\"discord.js\")\nconst fs = require('fs');\nconst embedID = tempVars(\"embedID\");\n\nif (msg.member.hasPermission(['MANAGE_CHANNELS'])) {\n    if (!isNaN(embedID) && embedID != null) {\n        fs.readFile('./data/giveawayData.json', async function read(err, data) {\n            if (err) {\n                throw err;\n            }\n            data = JSON.parse(data);\n\n            if (data.hasOwnProperty(msg.guild.id)) {\n                var guildGiveaways = data[msg.guild.id];\n                var giveaway = guildGiveaways.filter(object => object[\"id\"] == embedID);\n\n                if (giveaway.length != 0) {\n                    let giveawaysDue = giveaway[0];\n                    guildGiveaways.splice(guildGiveaways.findIndex(e => e.id == giveawaysDue.id), 1)\n\n                    fs.writeFile(\"./data/giveawayData.json\", JSON.stringify(data), function(err) {\n                        if (err) {\n                            return console.log(err);\n                        }\n                    });\n\n                    var channelToFetch = await client.channels.get(giveawaysDue[\"channel\"]);\n                    if (channelToFetch != null) {\n                        var giveawayMessage = await channelToFetch.fetchMessage(giveawaysDue[\"giveawayMessageID\"]);\n                        var giveawayUsers = await giveawayMessage.reactions.get('🎉').fetchUsers();\n                        giveawayUsers = giveawayUsers.array();\n                        giveawayUsers = await giveawayUsers.filter(object => object.id != client.user.id);\n                        var numberOfWinners = parseInt(giveawaysDue[\"winner\"]);\n                        var gw = giveawayMessage.embeds[0];\n\n                        var giveawayEmbed = new Discord.RichEmbed({\n                            color: 0x000000,\n                            author: {\n                                name: '🎉 Giveaway Ended 🎉',\n                                icon_url: (client || this.getDBM().Bot.bot).user.avatarURL\n                            },\n                            description: gw.description,\n                            footer: {\n                                text: gw.footer.text\n                            }\n                        })\n                        var winnerArray = [];\n                        if (giveawayUsers.length > 0) {\n                            if (giveawayUsers.length > numberOfWinners) {\n                                for (var i = 0; i < numberOfWinners; i++) {\n                                    var randomNumber = Math.floor(Math.random() * giveawayUsers.length);\n                                    var randomuser = giveawayUsers[randomNumber];\n                                    winnerArray.push(randomuser);\n                                    giveawayUsers.splice(giveawayUsers.indexOf(randomNumber), randomNumber);\n                                }\n                            } else if (giveawayUsers.length <= numberOfWinners) {\n                                for (i = 0; i < giveawayUsers.length; i++) {\n                                    winnerArray.push(giveawayUsers[i]);\n                                }\n                            }\n                            var winnerText = \"\";\n                            for (i = 0; i < winnerArray.length; i++) {\n                                winnerText = winnerText + winnerArray[i] + '\\n';\n                            }\n\n                            giveawayEmbed.description = giveawayEmbed.description + `\\n\\nThe winners are..\\n${winnerText}`;\n                            giveawayMessage.edit(giveawayEmbed)\n                            channelToFetch.send(`🎉 Congratulations! 🎉 \\n ${winnerText} \\nThey have won **${giveawaysDue[\"itemGivingAway\"]}**`)\n\n                        } else {\n                            giveawayEmbed.description = giveawayEmbed.description + \"\\n\\nNo one entered the giveaway and thus no one won.\"\n                            giveawayMessage.edit(giveawayEmbed);\n                            channelToFetch.send(`🎉 Giveaway Ended 🎉 \\n\\nNo one entered the giveaway and thus no one won.`)\n                        }\n                    }\n\n\n\n\n                } else {\n                    errorMessage(\"Giveaway message not found.\\nMake sure it is an active giveaway and recheck the id!\");\n                }\n            } else {\n                errorMessage(\"This server does not have any on-going giveaways!\")\n            }\n        })\n    } else {\n        errorMessage(\"Please enter a valid giveaway id!\")\n    }\n} else {\n    errorMessage(\"You don't have the permission to execute the command!\");\n}\n\nfunction errorMessage(error) {\n    let errorTemplate = new Discord.RichEmbed({\n        color: 0xFF0000,\n        author: {\n            name: client.user.username,\n            icon_url: client.user.avatarURL\n        },\n        title: \"Giveaway End\",\n        description: error,\n        timestamp: new Date(),\n    })\n\n    msg.channel.send(errorTemplate);\n}",
      "storage": "0",
      "varName": "",
      "name": "Run Script"
    }
  ],
  "customData": {
    "Command Info": {
      "category": "Ownership",
      "description": "Coming Soon!",
      "include": "Yes"
    }
  }
}
