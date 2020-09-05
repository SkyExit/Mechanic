{
    "name": "voiceCH",
    "temp": "member",
    "event-type": "Member Join Voice Channel",
    "_id": "GSfHu",
    "actions": [
      {
        "channel": "3",
        "varName": "channel",
        "info": "2",
        "storage": "1",
        "varName2": "chName",
        "name": "Store Channel Info"
      },
      {
        "storage": "1",
        "varName": "chName",
        "comparison": "1",
        "value": "\"Mechanic VC\"",
        "iftrue": "0",
        "iftrueVal": "2",
        "iffalse": "1",
        "iffalseVal": "",
        "name": "Check Variable"
      },
      {
        "channel": "3",
        "varName": "channel",
        "info": "10",
        "storage": "1",
        "varName2": "catID",
        "name": "Store Channel Info"
      },
      {
        "member": "2",
        "varName": "member",
        "info": "3",
        "storage": "1",
        "varName2": "memDisp",
        "name": "Store Member Info"
      },
      {
        "channelName": "${tempVars(\"memDisp\")}'s MVC",
        "bitrate": "",
        "userLimit": "16",
        "storage": "1",
        "varName": "NewVC",
        "categoryID": "${tempVars(\"catID\")}",
        "reason": "Because",
        "name": "Create Voice Channel"
      },
      {
        "server": "0",
        "varName": "",
        "storage": "1",
        "varName2": "botMem",
        "name": "Get Bot as Member"
      },
      {
        "vchannel": "3",
        "varName": "NewVC",
        "member": "2",
        "varName2": "botMem",
        "permission": "MANAGE_PERMISSIONS",
        "state": "0",
        "name": "Set Member Voice Channel Perms"
      },
      {
        "vchannel": "3",
        "varName": "NewVC",
        "member": "2",
        "varName2": "botMem",
        "permission": "MANAGE_CHANNELS",
        "state": "0",
        "name": "Set Member Voice Channel Perms"
      },
      {
        "vchannel": "3",
        "varName": "NewVC",
        "member": "2",
        "varName2": "botMem",
        "permission": "MOVE_MEMBERS",
        "state": "0",
        "name": "Set Member Voice Channel Perms"
      },
      {
        "storage": "3",
        "varName": "NewVC",
        "permission": "SPEAK",
        "state": "0",
        "name": "Set Voice Channel Perms"
      },
      {
        "storage": "3",
        "varName": "NewVC",
        "permission": "CREATE_INSTANT_INVITE",
        "state": "0",
        "name": "Set Voice Channel Perms"
      },
      {
        "member": "2",
        "varName": "member",
        "channel": "3",
        "varName2": "NewVC",
        "reason": "",
        "name": "Set Member Voice Channel"
      }
    ],
    "temp2": "channel"
  }