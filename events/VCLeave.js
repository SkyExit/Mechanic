{
    "name": "voiceLeave",
    "temp": "member",
    "event-type": "Member Leave Voice Channel",
    "_id": "KHbCa",
    "actions": [
      {
        "member": "2",
        "varName": "member",
        "info": "3",
        "storage": "1",
        "varName2": "memUs",
        "name": "Store Member Info"
      },
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
        "comparison": "5",
        "value": "\"s MVC\"",
        "iftrue": "0",
        "iftrueVal": "",
        "iffalse": "4",
        "iffalseVal": "t",
        "name": "Check Variable"
      },
      {
        "channel": "3",
        "varName": "channel",
        "info": "9",
        "storage": "1",
        "varName2": "conmem",
        "name": "Store Voice Channel Info"
      },
      {
        "storage": "1",
        "varName": "conmem",
        "comparison": "1",
        "value": "0",
        "iftrue": "0",
        "iftrueVal": "",
        "iffalse": "4",
        "iffalseVal": "t",
        "name": "Check Variable"
      },
      {
        "storage": "3",
        "varName": "channel",
        "reason": "",
        "name": "Delete Channel"
      },
      {
        "name": "End Action Sequence"
      },
      {
        "anchor_id": "t",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
      }
    ],
    "temp2": "channel"
  }