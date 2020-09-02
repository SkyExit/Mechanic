{
    "name": "with",
    "permissions": "NONE",
    "restriction": "1",
    "_id": "FoVRh",
    "actions": [
      {
        "info": "0",
        "infoIndex": "1",
        "storage": "1",
        "varName": "action",
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
        "dataName": "bank",
        "defaultVal": "0",
        "storage": "1",
        "varName2": "myBank",
        "name": "Store Member Data"
      },
      {
        "storage": "1",
        "varName": "action",
        "comparison": "1",
        "value": "\"all\"",
        "iftrue": "4",
        "iftrueVal": "all",
        "iffalse": "0",
        "iffalseVal": "",
        "name": "Check Variable"
      },
      {
        "comment": "amount",
        "color": "#000000",
        "name": "Comment"
      },
      {
        "storage": "1",
        "varName": "action",
        "comparison": "13",
        "value": "tempVars(\"myBank\")",
        "iftrue": "0",
        "iftrueVal": "",
        "iffalse": "4",
        "iffalseVal": "nem",
        "name": "Check Variable"
      },
      {
        "storage": "1",
        "varName": "action",
        "comparison": "14",
        "value": "1",
        "iftrue": "0",
        "iftrueVal": "",
        "iffalse": "4",
        "iffalseVal": "nem",
        "name": "Check Variable"
      },
      {
        "FirstNumber": "${tempVars(\"myBank\")}",
        "info": "1",
        "SecondNumber": "${tempVars(\"action\")}",
        "storage": "1",
        "varName": "newBank",
        "name": "Basic Math Operation"
      },
      {
        "member": "1",
        "varName": "",
        "dataName": "bank",
        "changeType": "0",
        "value": "tempVars(\"newBank\")",
        "name": "Control Member Data"
      },
      {
        "FirstNumber": "${tempVars(\"myCash\")}",
        "info": "0",
        "SecondNumber": "${tempVars(\"action\")}",
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
        "code": "var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });\nformatter.format(tempVars(\"action\"));",
        "storage": "1",
        "varName": "faction",
        "name": "Run Script"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "You took **${tempVars(\"faction\")}** from your Bank!",
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
        "anchor_id": "all",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
      },
      {
        "storage": "1",
        "varName": "myBank",
        "comparison": "14",
        "value": "0",
        "iftrue": "0",
        "iftrueVal": "",
        "iffalse": "4",
        "iffalseVal": "nem",
        "name": "Check Variable"
      },
      {
        "FirstNumber": "${tempVars(\"myBank\")}",
        "info": "0",
        "SecondNumber": "${tempVars(\"myCash\")}",
        "storage": "1",
        "varName": "newbCash",
        "name": "Basic Math Operation"
      },
      {
        "member": "1",
        "varName": "",
        "dataName": "cash",
        "changeType": "0",
        "value": "tempVars(\"newbCash\")",
        "name": "Control Member Data"
      },
      {
        "behavior": "0",
        "interpretation": "0",
        "code": "var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });\nformatter.format(tempVars(\"myBank\"));",
        "storage": "1",
        "varName": "fbank",
        "name": "Run Script"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "You took **all** (${tempVars(\"fbank\")}) from your bank!",
        "storage": "0",
        "varName2": "",
        "iffalse": "0",
        "iffalseVal": "",
        "name": "Send Message"
      },
      {
        "FirstNumber": "${tempVars(\"myBank\")}",
        "info": "1",
        "SecondNumber": "${tempVars(\"myBank\")}",
        "storage": "1",
        "varName": "newbBank",
        "name": "Basic Math Operation"
      },
      {
        "member": "1",
        "varName": "",
        "dataName": "bank",
        "changeType": "0",
        "value": "tempVars(\"newbBank\")",
        "name": "Control Member Data"
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
        "message": "You don't have that amount of money!",
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
        "description": "Get your cash back from the bank!",
        "include": "Yes"
      }
    }
  }