{
    "name": "lottery",
    "permissions": "NONE",
    "restriction": "1",
    "_id": "VWTsn",
    "actions": [
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
        "info": "0",
        "infoIndex": "1",
        "storage": "1",
        "varName": "amount",
        "name": "Store Command Params"
      },
      {
        "storage": "1",
        "varName": "amount",
        "comparison": "0",
        "value": "",
        "iftrue": "0",
        "iftrueVal": "",
        "iffalse": "4",
        "iffalseVal": "out",
        "name": "Check Variable"
      },
      {
        "storage": "1",
        "varName": "amount",
        "comparison": "14",
        "value": "1",
        "iftrue": "0",
        "iftrueVal": "",
        "iffalse": "4",
        "iffalseVal": "out",
        "name": "Check Variable"
      },
      {
        "storage": "1",
        "varName": "myCash",
        "comparison": "14",
        "value": "tempVars(\"amount\")",
        "iftrue": "0",
        "iftrueVal": "",
        "iffalse": "4",
        "iffalseVal": "nem",
        "name": "Check Variable"
      },
      {
        "storage": "1",
        "varName": "chance",
        "min": "1",
        "max": "100",
        "name": "Generate Random Number"
      },
      {
        "storage": "1",
        "varName": "chance",
        "comparison": "14",
        "value": "40",
        "iftrue": "4",
        "iftrueVal": "win",
        "iffalse": "4",
        "iffalseVal": "lose",
        "name": "Check Variable"
      },
      {
        "name": "End Action Sequence"
      },
      {
        "anchor_id": "win",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
      },
      {
        "FirstNumber": "${tempVars(\"amount\")}",
        "info": "0",
        "SecondNumber": "${tempVars(\"myCash\")}",
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
        "behavior": "0",
        "interpretation": "0",
        "code": "var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });\nformatter.format(tempVars(\"amount\"));",
        "storage": "1",
        "varName": "famount",
        "name": "Run Script"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "You gambled with **${tempVars(\"famount\")}** cash and won!",
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
        "anchor_id": "lose",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
      },
      {
        "FirstNumber": "${tempVars(\"myCash\")}",
        "info": "1",
        "SecondNumber": "${tempVars(\"amount\")}",
        "storage": "1",
        "varName": "nexlCash",
        "name": "Basic Math Operation"
      },
      {
        "member": "1",
        "varName": "",
        "dataName": "cash",
        "changeType": "0",
        "value": "tempVars(\"nexlCash\")",
        "name": "Control Member Data"
      },
      {
        "behavior": "0",
        "interpretation": "0",
        "code": "var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });\nformatter.format(tempVars(\"amount\"));",
        "storage": "1",
        "varName": "famount",
        "name": "Run Script"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "You gambled with **${tempVars(\"famount\")}** cash and lose!",
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
        "message": "You don't have enought money to gamble with!",
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
        "anchor_id": "out",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "You need to type the amount of cash you want to play with!",
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
        "description": "Play with more Money!",
        "include": "Yes"
      }
    }
  }