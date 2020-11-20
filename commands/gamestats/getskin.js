{
  "name": "getskin",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "GEVxT",
  "actions": [
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "compara1",
      "name": "Store Command Params"
    },
    {
      "info": "0",
      "infoIndex": "2",
      "storage": "1",
      "varName": "compara2",
      "name": "Store Command Params"
    },
    {
      "storage": "1",
      "varName": "compara1",
      "comparison": "0",
      "value": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nem",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "compara2",
      "comparison": "0",
      "value": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nem",
      "name": "Check Variable"
    },
    {
      "comment": "actions",
      "color": "#000000",
      "name": "Comment"
    },
    {
      "storage": "1",
      "varName": "compara1",
      "comparison": "1",
      "value": "\"face\"",
      "iftrue": "4",
      "iftrueVal": "face",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "compara1",
      "comparison": "1",
      "value": "\"front\"",
      "iftrue": "4",
      "iftrueVal": "front",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "compara1",
      "comparison": "1",
      "value": "\"frontfull\"",
      "iftrue": "4",
      "iftrueVal": "frontfull",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "compara1",
      "comparison": "1",
      "value": "\"head\"",
      "iftrue": "4",
      "iftrueVal": "head",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "compara1",
      "comparison": "1",
      "value": "\"bust\"",
      "iftrue": "4",
      "iftrueVal": "bust",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "compara1",
      "comparison": "1",
      "value": "\"skin\"",
      "iftrue": "4",
      "iftrueVal": "skin",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "compara1",
      "comparison": "1",
      "value": "\"skinfile\"",
      "iftrue": "4",
      "iftrueVal": "skinfile",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "description": "",
      "jump_to_anchor": "nem",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "nem",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You want to get the skin of somebody? Nice!\nUse **&getskin face <Playername>**\nUse **&getskin front <Playername>**\nUse **&getskin frontfull <Playername>**\nUse **&getskin head <Playername>**\nUse **&getskin bust <Playername>**\nUse **&getskin skin <Playername>**\nUse **&getskin skinfile <Playername>**",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "face",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.mojang.com/users/profiles/minecraft/${tempVars(\"compara2\")}",
      "path": "id",
      "storage": "1",
      "varName": "plid",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "title": "${tempVars(\"compara2\")}'s Skin",
      "author": "",
      "color": "",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "https://visage.surgeplay.com/face/${tempVars(\"plid\")}",
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
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
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
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "front",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.mojang.com/users/profiles/minecraft/${tempVars(\"compara2\")}",
      "path": "id",
      "storage": "1",
      "varName": "plid",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "title": "${tempVars(\"compara2\")}'s Skin",
      "author": "",
      "color": "",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "https://visage.surgeplay.com/front/${tempVars(\"plid\")}",
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
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
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
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "frontfull",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.mojang.com/users/profiles/minecraft/${tempVars(\"compara2\")}",
      "path": "id",
      "storage": "1",
      "varName": "plid",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "title": "${tempVars(\"compara2\")}'s Skin",
      "author": "",
      "color": "",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "https://visage.surgeplay.com/frontfull/${tempVars(\"plid\")}",
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
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
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
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "head",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.mojang.com/users/profiles/minecraft/${tempVars(\"compara2\")}",
      "path": "id",
      "storage": "1",
      "varName": "plid",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "title": "${tempVars(\"compara2\")}'s Skin",
      "author": "",
      "color": "",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "https://visage.surgeplay.com/head/${tempVars(\"plid\")}",
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
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
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
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "bust",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.mojang.com/users/profiles/minecraft/${tempVars(\"compara2\")}",
      "path": "id",
      "storage": "1",
      "varName": "plid",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "title": "${tempVars(\"compara2\")}'s Skin",
      "author": "",
      "color": "",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "https://visage.surgeplay.com/bust/${tempVars(\"plid\")}",
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
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
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
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "skin",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.mojang.com/users/profiles/minecraft/${tempVars(\"compara2\")}",
      "path": "id",
      "storage": "1",
      "varName": "plid",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "title": "${tempVars(\"compara2\")}'s Skin",
      "author": "",
      "color": "",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "https://visage.surgeplay.com/full/${tempVars(\"plid\")}",
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
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
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
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "skinfile",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.mojang.com/users/profiles/minecraft/${tempVars(\"compara2\")}",
      "path": "id",
      "storage": "1",
      "varName": "plid",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "title": "${tempVars(\"compara2\")}'s Skin",
      "author": "",
      "color": "",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "https://visage.surgeplay.com/skin/${tempVars(\"plid\")}",
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
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
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
      "name": "End Action Sequence"
    }
  ],
  "customData": {
    "Command Info": {
      "category": "Gaming",
      "description": "Get the skin of a Minecraft player!",
      "include": "Yes"
    }
  }
}
