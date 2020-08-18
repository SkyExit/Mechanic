{
  "name": "gdraw",
  "permissions": "NONE",
  "restriction": "4",
  "_id": "mXltB",
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
      "varName2": "giveawayWinners",
      "name": "Store Message Params"
    },
    {
      "message": "0",
      "varName": "",
      "info": "0",
      "ParamN": "2",
      "separator": "",
      "storage": "1",
      "varName2": "messageID",
      "name": "Store Message Params"
    },
    {
      "behavior": "0",
      "interpretation": "1",
      "code": "const Discord = require(\"discord.js\");\nconst giveawayWinners = tempVars(\"giveawayWinners\");\nconst giveawayID = tempVars(\"messageID\");\n\nasync function drawWinner() {\n    if (!isNaN(giveawayWinners) && giveawayWinners > 0 && giveawayWinners != null || giveawayID != null && giveawayWinners != null) {\n        var serverMessages = await msg.channel.fetchMessages({\n            limit: 100\n        });\n        \n        let messagesList = [];\n        let winnerArray = [];\n        let winnerText = \"\";\n        let supposeGiveawayMSG;\n\n        if (giveawayID == null) {\n            serverMessages = serverMessages.array();\n            serverMessages = serverMessages.filter(object => object.author.id == client.user.id);\n\n            for (i = 0; i < serverMessages.length; i++) {\n                let tempserverMsg = serverMessages[i][\"embeds\"][0];\n                if (tempserverMsg != null && tempserverMsg[\"author\"] != null && tempserverMsg[\"author\"][\"name\"] != null && serverMessages[i].reactions.get('🎉') != null && tempserverMsg[\"author\"][\"name\"].includes(\"🎉\") && tempserverMsg[\"author\"][\"name\"].includes(\"Giveaway Ended\")) {\n                    messagesList.push(serverMessages[i]);\n                }\n            }\n        } else {\n            supposeGiveawayMSG = await msg.channel.fetchMessage(giveawayID);\n            let supposegiveawayEmbed = supposeGiveawayMSG[\"embeds\"][0];\n            if (supposeGiveawayMSG != null && supposegiveawayEmbed != null && supposegiveawayEmbed[\"author\"] != null && supposegiveawayEmbed[\"author\"][\"name\"] != null && supposeGiveawayMSG.reactions.get('🎉') != null && supposegiveawayEmbed[\"author\"][\"name\"].includes(\"🎉\") && supposegiveawayEmbed[\"author\"][\"name\"].includes(\"Giveaway Ended\")) {\n                 messagesList.push(supposeGiveawayMSG);\n            } else {\n                errorMessage(\"Invalid giveaway!\\n\\nPlease re-check your message id!\\n\\nMake sure the giveaway has ended!\");\n            }\n        }\n\n        if (messagesList.length > 0) {\n            let giveawayMessage = messagesList[0];\n            let giveawayUsers = await giveawayMessage.reactions.get('🎉').fetchUsers();\n            giveawayUsers = await giveawayUsers.array();\n            giveawayUsers = await giveawayUsers.filter(object => object.id != client.user.id);\n\n            if (giveawayUsers.length > 0) {\n                if (giveawayUsers.length > giveawayWinners) {\n                    for (var i = 0; i < giveawayWinners; i++) {\n                        var randomNumber = Math.floor(Math.random() * giveawayUsers.length);\n                        var randomuser = giveawayUsers[randomNumber];\n                        winnerArray.push(randomuser);\n                        giveawayUsers.splice(giveawayUsers.indexOf(randomNumber), randomNumber);\n                    }\n                } else if (giveawayUsers.length <= giveawayWinners) {\n                    for (i = 0; i < giveawayUsers.length; i++) {\n                        winnerArray.push(giveawayUsers[i]);\n                    }\n                }\n\n                for (i = 0; i < winnerArray.length; i++) {\n                    winnerText = winnerText + winnerArray[i] + '\\n';\n                }\n\n                msg.channel.send(\"🎉 Giveaway Redraw 🎉\\n\\n\" + winnerText);\n\n            } else {\n                if (supposeGiveawayMSG == null) {errorMessage(\"No one reacted in the recent giveaway hosted, cannot draw a member!\");} else \n                {errorMessage(\"No one reacted in the selected giveaway hosted, cannot draw a member!\");}\n            }\n        } else if (supposeGiveawayMSG == null) {errorMessage(\"There is no recent giveaway hosted, cannot draw a member!\\n\\nMake sure the giveaway has ended!\");}\n    } else {errorMessage(\"Please enter a valid amount of players to be selected to win!\");}\n\n    function errorMessage(error) {\n        let errorTemplate = new Discord.RichEmbed({\n            color: 0xFF0000,\n            author: {\n                name: client.user.username,\n                icon_url: client.user.avatarURL\n            },\n            title: \"Giveaway Draw\",\n            description: error,\n            timestamp: new Date(),\n        })\n\n        msg.channel.send(errorTemplate);\n    }\n}\n\nif (msg.member.hasPermission(['MANAGE_CHANNELS'])) {\n    drawWinner();\n} else {\n    errorMessage(\"You don't have the permission to execute the command!\");\n}",
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
