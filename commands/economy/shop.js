{
  "name": "shop",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "wRIMO",
  "actions": [
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "action",
      "name": "Store Command Params"
    },
    {
      "info": "0",
      "infoIndex": "2",
      "storage": "1",
      "varName": "actype",
      "name": "Store Command Params"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "cash",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "myCash",
      "name": "Store Member Data"
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
      "storage": "1",
      "varName": "action",
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
      "varName": "action",
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
      "title": "Goldshop",
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
      "varName": "shopitems",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "shopitems",
      "message": "Use **&shop buy <number>** to buy!\n1) 1.000.000 cash = 1 gold\n2) 10.000.000 cash = 13 gold\n3) 100.000.000 cash = 145 gold\n4) 1.000.000.000 cash = 1600 gold\n\n5) 2.500 gold = 1 Protection (max. 3)\n\n6) 1.000.000 = gamble lvl. 2 (1.000 - 10.000)\n7) 10.000.000 = gamble lvl. 3 (10.000 - 100.000)\n8) 100.000.000 = gamble lvl. 4 (100.000 - 1.000.000)\n9) 1.000.000.000 gamble lvl. 5 (10.000.000 - 100.000.000)",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "shopitems",
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
      "varName": "actype",
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
      "varName": "actype",
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
      "varName": "actype",
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
      "varName": "actype",
      "comparison": "1",
      "value": "\"4\"",
      "iftrue": "4",
      "iftrueVal": "buy-4",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "actype",
      "comparison": "1",
      "value": "\"5\"",
      "iftrue": "4",
      "iftrueVal": "buy-5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "actype",
      "comparison": "1",
      "value": "\"6\"",
      "iftrue": "4",
      "iftrueVal": "buy-6",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "actype",
      "comparison": "1",
      "value": "\"7\"",
      "iftrue": "4",
      "iftrueVal": "buy-7",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "actype",
      "comparison": "1",
      "value": "\"8\"",
      "iftrue": "4",
      "iftrueVal": "buy-8",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "actype",
      "comparison": "1",
      "value": "\"9\"",
      "iftrue": "4",
      "iftrueVal": "buy-9",
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
      "anchor_id": "buy-1",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "myCash",
      "comparison": "14",
      "value": "1000000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nem",
      "name": "Check Variable"
    },
    {
      "FirstNumber": "${tempVars(\"myCash\")}",
      "info": "1",
      "SecondNumber": "1000000",
      "storage": "1",
      "varName": "newCash",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "cash",
      "changeType": "0",
      "value": "tempVars(\"newCash\")",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"myGold\")}",
      "info": "0",
      "SecondNumber": "1",
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
      "channel": "0",
      "varName": "",
      "message": "You bought **1 gold** for **1.000.000 cash**!",
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
      "varName": "myCash",
      "comparison": "14",
      "value": "10000000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nem",
      "name": "Check Variable"
    },
    {
      "FirstNumber": "${tempVars(\"myCash\")}",
      "info": "1",
      "SecondNumber": "10000000",
      "storage": "1",
      "varName": "newCash",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "cash",
      "changeType": "0",
      "value": "tempVars(\"newCash\")",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"myGold\")}",
      "info": "0",
      "SecondNumber": "13",
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
      "channel": "0",
      "varName": "",
      "message": "You bought **13 gold** for **10.000.000 cash**!",
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
      "varName": "myCash",
      "comparison": "14",
      "value": "100000000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nem",
      "name": "Check Variable"
    },
    {
      "FirstNumber": "${tempVars(\"myCash\")}",
      "info": "1",
      "SecondNumber": "100000000",
      "storage": "1",
      "varName": "newCash",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "cash",
      "changeType": "0",
      "value": "tempVars(\"newCash\")",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"myGold\")}",
      "info": "0",
      "SecondNumber": "145",
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
      "channel": "0",
      "varName": "",
      "message": "You bought **145 gold** for **100.000.000 cash**!",
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
      "varName": "myCash",
      "comparison": "14",
      "value": "1000000000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nem",
      "name": "Check Variable"
    },
    {
      "FirstNumber": "${tempVars(\"myCash\")}",
      "info": "1",
      "SecondNumber": "1000000000",
      "storage": "1",
      "varName": "newCash",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "cash",
      "changeType": "0",
      "value": "tempVars(\"newCash\")",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"myGold\")}",
      "info": "0",
      "SecondNumber": "1600",
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
      "channel": "0",
      "varName": "",
      "message": "You bought **1600 gold** for **1.000.000.000 cash**!",
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
      "anchor_id": "buy-5",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "myGold",
      "comparison": "14",
      "value": "2500",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nem",
      "name": "Check Variable"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "protections",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "myProtections",
      "name": "Store Member Data"
    },
    {
      "storage": "1",
      "varName": "myProtections",
      "comparison": "1",
      "value": "3",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You already have 3 protections!",
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
      "FirstNumber": "${tempVars(\"myGold\")}",
      "info": "1",
      "SecondNumber": "2500",
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
      "FirstNumber": "${tempVars(\"myProtections\")}",
      "info": "0",
      "SecondNumber": "1",
      "storage": "1",
      "varName": "newProtections",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "protections",
      "changeType": "0",
      "value": "tempVars(\"newProtections\")",
      "name": "Control Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You bought **1 protection** for 2500 gold!",
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
      "anchor_id": "buy-6",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "myCash",
      "comparison": "14",
      "value": "1000000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nem",
      "name": "Check Variable"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "gamble",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "myGamble",
      "name": "Store Member Data"
    },
    {
      "storage": "1",
      "varName": "myGamble",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "hgam",
      "name": "Check Variable"
    },
    {
      "FirstNumber": "${tempVars(\"myCash\")}",
      "info": "1",
      "SecondNumber": "1000000",
      "storage": "1",
      "varName": "newCash",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "cash",
      "changeType": "0",
      "value": "tempVars(\"newCash\")",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"myGamble\")}",
      "info": "0",
      "SecondNumber": "1",
      "storage": "1",
      "varName": "newGamble",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "gamble",
      "changeType": "0",
      "value": "tempVars(\"newGamble\")",
      "name": "Control Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You upgraded your Gamble Level to **2** for **1.000.000 cash**!",
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
      "anchor_id": "buy-7",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "myCash",
      "comparison": "14",
      "value": "10000000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nem",
      "name": "Check Variable"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "gamble",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "myGamble",
      "name": "Store Member Data"
    },
    {
      "storage": "1",
      "varName": "myGamble",
      "comparison": "1",
      "value": "2",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "hgam",
      "name": "Check Variable"
    },
    {
      "FirstNumber": "${tempVars(\"myCash\")}",
      "info": "1",
      "SecondNumber": "10000000",
      "storage": "1",
      "varName": "newCash",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "cash",
      "changeType": "0",
      "value": "tempVars(\"newCash\")",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"myGamble\")}",
      "info": "0",
      "SecondNumber": "1",
      "storage": "1",
      "varName": "newGamble",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "gamble",
      "changeType": "0",
      "value": "tempVars(\"newGamble\")",
      "name": "Control Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You upgraded your Gamble Level to **3** for **10.000.000 cash**!",
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
      "anchor_id": "buy-8",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "myCash",
      "comparison": "14",
      "value": "100000000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nem",
      "name": "Check Variable"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "gamble",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "myGamble",
      "name": "Store Member Data"
    },
    {
      "storage": "1",
      "varName": "myGamble",
      "comparison": "1",
      "value": "3",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "hgam",
      "name": "Check Variable"
    },
    {
      "FirstNumber": "${tempVars(\"myCash\")}",
      "info": "1",
      "SecondNumber": "100000000",
      "storage": "1",
      "varName": "newCash",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "cash",
      "changeType": "0",
      "value": "tempVars(\"newCash\")",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"myGamble\")}",
      "info": "0",
      "SecondNumber": "1",
      "storage": "1",
      "varName": "newGamble",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "gamble",
      "changeType": "0",
      "value": "tempVars(\"newGamble\")",
      "name": "Control Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You upgraded your Gamble Level to **4** for **100.000.000 cash**!",
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
      "anchor_id": "buy-9",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "myCash",
      "comparison": "14",
      "value": "1000000000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nem",
      "name": "Check Variable"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "gamble",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "myGamble",
      "name": "Store Member Data"
    },
    {
      "storage": "1",
      "varName": "myGamble",
      "comparison": "1",
      "value": "4",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "hgam",
      "name": "Check Variable"
    },
    {
      "FirstNumber": "${tempVars(\"myCash\")}",
      "info": "1",
      "SecondNumber": "1000000000",
      "storage": "1",
      "varName": "newCash",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "cash",
      "changeType": "0",
      "value": "tempVars(\"newCash\")",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"myGamble\")}",
      "info": "0",
      "SecondNumber": "1",
      "storage": "1",
      "varName": "newGamble",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "gamble",
      "changeType": "0",
      "value": "tempVars(\"newGamble\")",
      "name": "Control Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You upgraded your Gamble Level to **5** for **1.000.000.000 cash**!",
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
      "message": "You don't have enough cash/gold!",
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
      "anchor_id": "hgam",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You need the previus Gamble Level!\nOr\nYou already have this Gamble Level!\nOr\nYou already have a higher Gamble level!\nGamble level: ${tempVars(\"myGamble\")}",
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
  "customData": {
    "Command Info": {
      "category": "Economy",
      "description": "Go shopping!",
      "include": "Yes"
    }
  }
}
