{
    "name": "pay",
    "permissions": "NONE",
    "restriction": "1",
    "_id": "QMPJz",
    "actions": [
      {
        "info": "2",
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
        "varName": "compara2",
        "comparison": "14",
        "value": "1",
        "iftrue": "0",
        "iftrueVal": "",
        "iffalse": "4",
        "iffalseVal": "1",
        "name": "Check Variable"
      },
      {
        "storage": "1",
        "varName": "compara1",
        "comparison": "0",
        "value": "1",
        "iftrue": "0",
        "iftrueVal": "",
        "iffalse": "1",
        "iffalseVal": "1",
        "name": "Check Variable"
      },
      {
        "member": "0",
        "varName": "",
        "dataName": "cash",
        "defaultVal": "0",
        "storage": "1",
        "varName2": "mencash",
        "name": "Store Member Data"
      },
      {
        "member": "1",
        "varName": "compara1",
        "dataName": "cash",
        "defaultVal": "0",
        "storage": "1",
        "varName2": "authcash",
        "name": "Store Member Data"
      },
      {
        "storage": "1",
        "varName": "authcash",
        "comparison": "14",
        "value": "tempVars(\"compara2\")",
        "iftrue": "0",
        "iftrueVal": "",
        "iffalse": "4",
        "iffalseVal": "2",
        "name": "Check Variable"
      },
      {
        "FirstNumber": "${tempVars(\"mencash\")}",
        "info": "0",
        "SecondNumber": "${tempVars(\"compara2\")}",
        "storage": "1",
        "varName": "newmentioncash",
        "name": "Basic Math Operation"
      },
      {
        "FirstNumber": "${tempVars(\"authcash\")}",
        "info": "1",
        "SecondNumber": "${tempVars(\"compara2\")}",
        "storage": "1",
        "varName": "newauthcash",
        "name": "Basic Math Operation"
      },
      {
        "member": "0",
        "varName": "",
        "dataName": "cash",
        "changeType": "0",
        "value": "tempVars(\"newmentioncash\")",
        "name": "Control Member Data"
      },
      {
        "member": "1",
        "varName": "compara1",
        "dataName": "cash",
        "changeType": "0",
        "value": "tempVars(\"newauthcash\")",
        "name": "Control Member Data"
      },
      {
        "behavior": "0",
        "interpretation": "0",
        "code": "var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });\nformatter.format(tempVars(\"compara2\"));",
        "storage": "1",
        "varName": "fcompara2",
        "name": "Run Script"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "${member} sent ${tempVars(\"fcompara2\")} cash to ${mentionedUser}!",
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
        "anchor_id": "1",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "The value has to be greater then 1!",
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
        "anchor_id": "2",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "you dont have that amount of money!",
        "storage": "0",
        "varName2": "",
        "iffalse": "0",
        "iffalseVal": "",
        "name": "Send Message"
      }
    ],
    "comType": "0",
    "customData": {
      "Command Info": {
        "category": "Economy",
        "description": "Pay a friend some money!",
        "include": "Yes"
      }
    }
  }