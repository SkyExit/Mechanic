{
  "name": "gcreate",
  "permissions": "NONE",
  "restriction": "4",
  "_id": "DvDki",
  "actions": [
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "code": "const Discord = require(\"discord.js\")\nconst fs = require('fs');\n\nlet embedTemplate = new Discord.RichEmbed({\n    color: 0xFFFF00,\n    author: {\n        name: client.user.username,\n        icon_url: client.user.avatarURL\n    },\n    title: \"Giveaway Setup\",\n    description: \"This is a test embed to showcase what they look like and what they can do.\",\n    timestamp: new Date(),\n})\n\nvar giveaway = {\n    \"itemGivingAway\": \"\",\n    \"time\": 0,\n    \"winner\": 1,\n    \"finishUnix\": 0,\n    \"channel\": \"\",\n    \"server\": msg.guild.id,\n    \"giveawayMessageID\": \"\",\n    \"id\": Math.floor(Math.random() * 999999) + 100000\n}\n\nfunction errorMessage(error) {\n    let errorTemplate = new Discord.RichEmbed({\n        color: 0xFF0000,\n        author: {\n            name: client.user.username,\n            icon_url: client.user.avatarURL\n        },\n        title: \"Giveaway Setup\",\n        description: error,\n        timestamp: new Date(),\n    })\n\n    msg.channel.send(errorTemplate);\n}\n\nif (msg.member.hasPermission(['MANAGE_CHANNELS'])) {\n    embedTemplate[\"description\"] = `Welcome to the giveaway promt.\\n\\nPlease first specify what you are giving away?`\n    msg.channel.send(embedTemplate)\n        .then((message) => {\n            msg.channel.awaitMessages(response => response.author.id == msg.author.id, {\n                    max: 1,\n                    time: 60000,\n                    errors: ['time'],\n                })\n                .then(function(collected) {\n                    msg.author.lastMessage.delete();\n                    embedTemplate[\"description\"] = `You are giving away \"${collected.first().content}\" correct?\\n\\nIf so please respond now with the number of winners you would like to have.\\nIf not, please respond with anything else.`\n                    giveaway[\"itemGivingAway\"] = collected.first().content;\n                    message.edit(embedTemplate);\n                    msg.channel.awaitMessages(response => response.author.id == msg.author.id, {\n                            max: 1,\n                            time: 60000,\n                            errors: ['time'],\n                        })\n                        .then(function(collected) {\n                            msg.author.lastMessage.delete();\n                            if (!isNaN(collected.first().content)) {\n                                if (parseInt(collected.first().content) > 0) {\n                                    giveaway[\"winner\"] = parseInt(collected.first().content);\n                                    embedTemplate[\"description\"] = `You are giving away \"${giveaway[\"itemGivingAway\"]}\" to ${collected.first().content} user(s).\\n\\nIf this is correct, please now respond with the amount of time alloted to the giveaway.\\nEx. 1w | 1d | 1h | 1m`\n                                    message.edit(embedTemplate);\n                                    msg.channel.awaitMessages(response => response.author.id == msg.author.id, {\n                                            max: 1,\n                                            time: 60000,\n                                            errors: ['time'],\n                                        })\n                                        .then(function(collected) {\n                                            msg.author.lastMessage.delete();\n                                            let tempTime = collected.first().content.toLowerCase();\n                                            if (tempTime.includes(\"d\") || tempTime.includes(\"h\") || tempTime.includes(\"w\") || tempTime.includes(\"m\")) {\n                                                let timeUp;\n                                                let timeText;\n\n                                                if (tempTime.includes(\"d\")) {\n                                                    timeUp = \"d\";\n                                                    timeText = \"day(s)\";\n                                                } else if (tempTime.includes(\"h\")) {\n                                                    timeUp = \"h\";\n                                                    timeText = \"hour(s)\";\n                                                } else if (tempTime.includes(\"w\")) {\n                                                    timeUp = \"w\";\n                                                    timeText = \"week(s)\";\n                                                } else if (tempTime.includes(\"m\")) {\n                                                    timeUp = \"m\";\n                                                    timeText = \"minute(s)\";\n                                                }\n\n                                                tempTime = tempTime.split(timeUp);\n                                                if (!isNaN(tempTime[0])) {\n                                                    tempTime[0] = parseInt(tempTime[0]);\n                                                    switch (timeUp) {\n                                                        case \"d\":\n                                                            giveaway[\"time\"] = tempTime[0] * 86400;\n                                                            break;\n                                                        case \"h\":\n                                                            giveaway[\"time\"] = tempTime[0] * 3600;\n                                                            break;\n                                                        case \"w\":\n                                                            giveaway[\"time\"] = tempTime[0] * 604800;\n                                                            break;\n                                                        case \"m\":\n                                                            giveaway[\"time\"] = tempTime[0] * 60;\n                                                            break;\n                                                    }\n                                                    embedTemplate[\"description\"] = `You are giving away \"${giveaway[\"itemGivingAway\"]}\" to ${giveaway[\"winner\"]} user(s)\\nThe winner will be drawn in ${tempTime[0]} ${timeText}\\n\\nIf this is correct, please now mention the channel the giveaway will be posted in.`\n                                                    message.edit(embedTemplate);\n                                                    msg.channel.awaitMessages(response => response.author.id == msg.author.id, {\n                                                            max: 1,\n                                                            time: 60000,\n                                                            errors: ['time'],\n                                                        })\n                                                        .then(function(collected) {\n                                                            msg.author.lastMessage.delete();\n                                                            if (collected.first().mentions.channels.first() != null) {\n                                                                message.delete();\n                                                                let giveawayChannel = collected.first().mentions.channels.first();\n                                                                giveaway[\"channel\"] = giveawayChannel.id;\n                                                                giveaway[\"finishUnix\"] = Math.floor(Date.now() / 1000) + giveaway[\"time\"];\n                                                                var giveawayEmbed = new Discord.RichEmbed({\n                                                                    color: 0x2E7F98,\n                                                                    author: {\n                                                                        name: '🎉 New Giveaway 🎉',\n                                                                        icon_url: (client || this.getDBM().Bot.bot).user.avatarURL\n                                                                    },\n                                                                    description: `New giveaway for **${giveaway[\"itemGivingAway\"]}**\\n\\nReact with 🎉 to enter the giveaway!`,\n                                                                    footer: {\n                                                                        text: `The giveaway ends on ${new Date(giveaway[\"finishUnix\"] * 1000).toLocaleString(\"en-US\", { timeZone: 'UTC' })} UTC | ${giveaway[\"winner\"]} Winner(s) | ID: ${giveaway[\"id\"]}`\n                                                                    }\n                                                                })\n\n                                                                giveawayChannel.send(giveawayEmbed)\n                                                                    .then(giveMsg => {\n                                                                        giveMsg.react(\"🎉\");\n                                                                        giveaway[\"giveawayMessageID\"] = giveMsg.id;\n                                                                        fs.readFile('./data/giveawayData.json', function read(err, data) {\n                                                                            if (err) {\n                                                                                throw err;\n                                                                            }\n                                                                            data = JSON.parse(data);\n\n                                                                            if (!data.hasOwnProperty(msg.guild.id)) {\n                                                                                data[msg.guild.id] = [];\n                                                                            }\n\n                                                                            data[msg.guild.id].push(giveaway);\n\n                                                                            fs.writeFile(\"./data/giveawayData.json\", JSON.stringify(data), function(err) {\n                                                                                if (err) {\n                                                                                    return console.log(err);\n                                                                                }\n                                                                            });\n                                                                        });\n                                                                    })\n                                                            } else {\n                                                                message.delete();\n                                                                errorMessage(\"You didn't enter a valid channel!\\nEx. #example\\n\\nExiting setup; please re-run the command to restart the prompt.\");\n                                                            }\n                                                        })\n                                                } else {\n                                                    message.delete();\n                                                    errorMessage(\"You didn't enter a valid time format!\\nEx. 1w | 1d | 1h | 1m\\n\\nExiting setup; please re-run the command to restart the prompt.\");\n                                                }\n                                            } else {\n                                                message.delete();\n                                                errorMessage(\"You didn't enter a valid time format!\\nEx. 1w | 1d | 1h | 1m\\n\\nExiting setup; please re-run the command to restart the prompt.\");\n                                            }\n                                        })\n                                } else {\n                                    message.delete();\n                                    errorMessage(\"You didn't enter a valid number of winnners.\\nExiting setup; please re-run the command to restart the prompt.\");\n                                }\n                            } else {\n                                message.delete();\n                                errorMessage(\"You didn't enter a valid number of winnners.\\nExiting setup; please re-run the command to restart the prompt.\");\n                            }\n                        })\n                })\n        })\n} else {\n    errorMessage(\"You don't have the permission to execute the command!\");\n}",
      "behavior": "1",
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
      "category": "Ownership",
      "description": "Coming Soon!",
      "include": "Yes"
    }
  }
}
