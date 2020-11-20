{
  "name": "blackmarket",
  "permissions": "NONE",
  "restriction": "0",
  "_id": "ejpCC",
  "actions": [
    {
      "channel": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "chname",
      "name": "Store Channel Info"
    },
    {
      "storage": "1",
      "varName": "chname",
      "comparison": "5",
      "value": "\"blackmarket\"",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "type",
      "name": "Store Command Params"
    },
    {
      "info": "0",
      "infoIndex": "2",
      "storage": "1",
      "varName": "typaram",
      "name": "Store Command Params"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "gold",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "myGold",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "exp",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "myEXP",
      "name": "Store Member Data"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "\"shop\"",
      "iftrue": "4",
      "iftrueVal": "shop",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "\"buy\"",
      "iftrue": "4",
      "iftrueVal": "buy",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "description": "",
      "jump_to_anchor": "shop",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "shop",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "title": "Blackmarket",
      "author": "",
      "color": "",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "",
      "timestamp": "true",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "shoplist",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "shoplist",
      "message": "Use **&blackmarket buy <number>** to buy one!\n1) 25 exp = 30 gold\n2) 50 exp = 75 gold\n3) 75 exp = 105 gold\n4) 100 exp = 140 gold\n",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "shoplist",
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
      "anchor_id": "buy",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "typaram",
      "comparison": "1",
      "value": "\"1\"",
      "iftrue": "4",
      "iftrueVal": "buy-1",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "typaram",
      "comparison": "1",
      "value": "\"2\"",
      "iftrue": "4",
      "iftrueVal": "buy-2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "typaram",
      "comparison": "1",
      "value": "\"3\"",
      "iftrue": "4",
      "iftrueVal": "buy-3",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "typaram",
      "comparison": "1",
      "value": "\"4\"",
      "iftrue": "4",
      "iftrueVal": "buy-4",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "description": "",
      "jump_to_anchor": "shop",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "anchor_id": "buy-1",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "myGold",
      "comparison": "14",
      "value": "30",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nem",
      "name": "Check Variable"
    },
    {
      "FirstNumber": "${tempVars(\"myGold\")}",
      "info": "1",
      "SecondNumber": "30",
      "storage": "1",
      "varName": "newGold",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "gold",
      "changeType": "0",
      "value": "tempVars(\"newGold\")",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"myEXP\")}",
      "info": "0",
      "SecondNumber": "25",
      "storage": "1",
      "varName": "newEXP",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "exp",
      "changeType": "0",
      "value": "tempVars(\"newEXP\")",
      "name": "Control Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You bought **25exp** for **30gold**!",
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
      "anchor_id": "buy-2",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "myGold",
      "comparison": "14",
      "value": "75",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nem",
      "name": "Check Variable"
    },
    {
      "FirstNumber": "${tempVars(\"myGold\")}",
      "info": "1",
      "SecondNumber": "75",
      "storage": "1",
      "varName": "newGold",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "gold",
      "changeType": "0",
      "value": "tempVars(\"newGold\")",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"myEXP\")}",
      "info": "0",
      "SecondNumber": "50",
      "storage": "1",
      "varName": "newEXP",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "exp",
      "changeType": "0",
      "value": "tempVars(\"newEXP\")",
      "name": "Control Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You bought **50exp** for **75gold**!",
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
      "anchor_id": "buy-3",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "myGold",
      "comparison": "14",
      "value": "105",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nem",
      "name": "Check Variable"
    },
    {
      "FirstNumber": "${tempVars(\"myGold\")}",
      "info": "1",
      "SecondNumber": "105",
      "storage": "1",
      "varName": "newGold",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "gold",
      "changeType": "0",
      "value": "tempVars(\"newGold\")",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"myEXP\")}",
      "info": "0",
      "SecondNumber": "75",
      "storage": "1",
      "varName": "newEXP",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "exp",
      "changeType": "0",
      "value": "tempVars(\"newEXP\")",
      "name": "Control Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You bought **75exp** for **105gold**!",
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
      "anchor_id": "buy-4",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "myGold",
      "comparison": "14",
      "value": "150",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nem",
      "name": "Check Variable"
    },
    {
      "FirstNumber": "${tempVars(\"myGold\")}",
      "info": "1",
      "SecondNumber": "150",
      "storage": "1",
      "varName": "newGold",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "gold",
      "changeType": "0",
      "value": "tempVars(\"newGold\")",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"myEXP\")}",
      "info": "0",
      "SecondNumber": "100",
      "storage": "1",
      "varName": "newEXP",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "exp",
      "changeType": "0",
      "value": "tempVars(\"newEXP\")",
      "name": "Control Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You bought **100exp** for **150gold**!",
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
      "anchor_id": "nem",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You don't have enought money!",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    }
  ],
  "comType": "0",
  "customData": {
    "Command Info": {
      "category": "Economy",
      "description": "Go to the blackmarket to buy some xp!",
      "include": "Yes"
    }
  }
}
