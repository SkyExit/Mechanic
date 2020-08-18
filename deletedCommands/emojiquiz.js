{
  "name": "emojiquiz",
  "permissions": "NONE",
  "restriction": "4",
  "_id": "vnOIj",
  "actions": [
    {
      "storage": "1",
      "varName": "number",
      "min": "1",
      "max": "1",
      "name": "Generate Random Number"
    },
    {
      "filename": "./resources/emojigame.json",
      "storage": "1",
      "varName2": "emojigameFile",
      "name": "Read File"
    },
    {
      "behavior": "0",
      "varStorage": "1",
      "jsonObjectVarName": "emojigameFile",
      "path": "${tempVars(\"number\")}.emojis",
      "storage": "1",
      "varName": "emojis",
      "name": "Parse From Stored Json"
    },
    {
      "behavior": "0",
      "varStorage": "1",
      "jsonObjectVarName": "emojigameFile",
      "path": "${tempVars(\"number\")}.l1",
      "storage": "1",
      "varName": "l1",
      "name": "Parse From Stored Json"
    },
    {
      "behavior": "0",
      "varStorage": "1",
      "jsonObjectVarName": "emojigameFile",
      "path": "${tempVars(\"number\")}.l2",
      "storage": "1",
      "varName": "l2",
      "name": "Parse From Stored Json"
    },
    {
      "behavior": "0",
      "varStorage": "1",
      "jsonObjectVarName": "emojigameFile",
      "path": "${tempVars(\"number\")}.l3",
      "storage": "1",
      "varName": "l3",
      "name": "Parse From Stored Json"
    },
    {
      "title": "Emojiquiz",
      "author": "",
      "color": "",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "",
      "timestamp": "false",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "embed1",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed1",
      "message": "**Can you solve it?**\n${tempVars(\"emojis\")}\n\n${tempVars(\"l1\")}\n${tempVars(\"l2\")}\n${tempVars(\"l3\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed1",
      "channel": "0",
      "varName2": "",
      "storage3": "0",
      "varName3": "",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "storage": "0",
      "varName": "",
      "filter": "content.length > 0 && author.id === user.id",
      "max": "1",
      "time": "60000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "storage2": "1",
      "varName2": "response",
      "name": "Await Response Call Action"
    },
    {
      "storage": "1",
      "varName": "response",
      "comparison": "1",
      "value": "",
      "iftrue": "4",
      "iftrueVal": "win",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    }
  ],
  "comType": "0",
  "customData": {
    "Command Info": {
      "category": "Ownership",
      "description": "Coming Soon!",
      "include": "Yes"
    }
  }
}
