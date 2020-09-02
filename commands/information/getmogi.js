{
    "name": "getmogi",
    "permissions": "NONE",
    "restriction": "1",
    "_id": "sAVYB",
    "actions": [
      {
        "info": "1",
        "infoIndex": "1",
        "storage": "1",
        "varName": "ompara",
        "name": "Store Command Params"
      },
      {
        "info": "1",
        "find": "${tempVars(\"ompara\")}",
        "storage": "1",
        "varName": "emo",
        "name": "Find Custom Emoji"
      },
      {
        "emoji": "1",
        "varName": "emo",
        "info": "4",
        "storage": "1",
        "varName2": "emoURL",
        "name": "Store Emoji Info"
      },
      {
        "emoji": "1",
        "varName": "emo",
        "info": "5",
        "storage": "1",
        "varName2": "emoID",
        "name": "Store Emoji Info"
      },
      {
        "emoji": "1",
        "varName": "emo",
        "info": "3",
        "storage": "1",
        "varName2": "emoName",
        "name": "Store Emoji Info"
      },
      {
        "title": "${tempVars(\"ompara\")}",
        "author": "",
        "color": "",
        "timestamp": "true",
        "url": "${tempVars(\"emoURL\")}",
        "authorIcon": "",
        "imageUrl": "${tempVars(\"emoURL\")}",
        "thumbUrl": "",
        "storage": "1",
        "varName": "embed",
        "name": "Create Embed Message"
      },
      {
        "storage": "1",
        "varName": "embed",
        "fieldName": "Name",
        "message": "${tempVars(\"emoName\")}",
        "inline": "1",
        "name": "Add Embed Field"
      },
      {
        "storage": "1",
        "varName": "embed",
        "fieldName": "ID",
        "message": "${tempVars(\"emoID\")}",
        "inline": "1",
        "name": "Add Embed Field"
      },
      {
        "storage": "1",
        "varName": "embed",
        "fieldName": "URL",
        "message": "${tempVars(\"emoURL\")}",
        "inline": "1",
        "name": "Add Embed Field"
      },
      {
        "storage": "1",
        "varName": "embed",
        "channel": "0",
        "varName2": "",
        "storage3": "0",
        "varName3": "",
        "name": "Send Embed Message"
      }
    ],
    "customData": {
      "Command Info": {
        "category": "Information",
        "description": "Get Informations about the mentioned emoji!",
        "include": "Yes"
      }
    }
  }