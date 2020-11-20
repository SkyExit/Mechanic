{
  "name": "messages",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "Erzkm",
  "actions": [
    {
      "info": "2",
      "infoIndex": "1",
      "storage": "1",
      "varName": "target",
      "name": "Store Command Params"
    },
    {
      "storage": "1",
      "varName": "target",
      "comparison": "0",
      "value": "",
      "iftrue": "4",
      "iftrueVal": "other",
      "iffalse": "4",
      "iffalseVal": "me",
      "name": "Check Variable"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "other",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "member": "2",
      "varName": "target",
      "info": "3",
      "storage": "1",
      "varName2": "memUs",
      "name": "Store Member Info"
    },
    {
      "member": "2",
      "varName": "target",
      "dataName": "messages",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "messages",
      "name": "Store Member Data"
    },
    {
      "member": "2",
      "varName": "target",
      "dataName": "chars",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "chars",
      "name": "Store Member Data"
    },
    {
      "title": "${tempVars(\"memUs\")}'s Messages",
      "author": "",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Messages",
      "message": "**${tempVars(\"messages\")}**",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Chars",
      "message": "**${tempVars(\"chars\")}**",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Average",
      "message": "In average, he has **${(tempVars(\"chars\") / tempVars(\"messages\")).toFixed(2)}** chars per message!",
      "inline": "0",
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
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "me",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "member": "1",
      "varName": "target",
      "info": "3",
      "storage": "1",
      "varName2": "memUs",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "target",
      "dataName": "messages",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "messages",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "target",
      "dataName": "chars",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "chars",
      "name": "Store Member Data"
    },
    {
      "title": "${tempVars(\"memUs\")}'s Messages",
      "author": "",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Messages",
      "message": "**${tempVars(\"messages\")}**",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Chars",
      "message": "**${tempVars(\"chars\")}**",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Average",
      "message": "In average, you have **${(tempVars(\"chars\") / tempVars(\"messages\")).toFixed(2)}** chars per message!",
      "inline": "0",
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
    },
    {
      "name": "End Action Sequence"
    }
  ],
  "customData": {
    "Command Info": {
      "category": "None",
      "description": "No Description",
      "include": "No"
    }
  }
}
