{
    "name": "rob",
    "permissions": "NONE",
    "restriction": "1",
    "_id": "WAMuZ",
    "actions": [
      {
        "info": "2",
        "infoIndex": "1",
        "storage": "1",
        "varName": "compara",
        "name": "Store Command Params"
      },
      {
        "storage": "1",
        "varName": "compara",
        "comparison": "0",
        "value": "",
        "iftrue": "0",
        "iftrueVal": "",
        "iffalse": "1",
        "iffalseVal": "",
        "name": "Check Variable"
      },
      {
        "member": "0",
        "varName": "",
        "dataName": "protections",
        "defaultVal": "0",
        "storage": "1",
        "varName2": "HisProt",
        "name": "Store Member Data"
      },
      {
        "storage": "1",
        "varName": "HisProt",
        "comparison": "14",
        "value": "1",
        "iftrue": "4",
        "iftrueVal": "prot",
        "iffalse": "0",
        "iffalseVal": "",
        "name": "Check Variable"
      },
      {
        "member": "0",
        "varName": "",
        "dataName": "cash",
        "defaultVal": "0",
        "storage": "1",
        "varName2": "mentioncash",
        "name": "Store Member Data"
      },
      {
        "member": "1",
        "varName": "",
        "dataName": "cash",
        "defaultVal": "0",
        "storage": "1",
        "varName2": "membercash",
        "name": "Store Member Data"
      },
      {
        "FirstNumber": "${tempVars(\"membercash\")}",
        "info": "0",
        "SecondNumber": "${tempVars(\"mentioncash\")}",
        "storage": "1",
        "varName": "newcash",
        "name": "Basic Math Operation"
      },
      {
        "member": "1",
        "varName": "",
        "dataName": "cash",
        "changeType": "0",
        "value": "tempVars(\"newcash\")",
        "name": "Control Member Data"
      },
      {
        "member": "0",
        "varName": "",
        "dataName": "cash",
        "changeType": "0",
        "value": "0",
        "name": "Control Member Data"
      },
      {
        "behavior": "0",
        "interpretation": "0",
        "code": "var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });\nformatter.format(tempVars(\"mentioncash\"));",
        "storage": "1",
        "varName": "fmentioncash",
        "name": "Run Script"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "${member} robbed ${tempVars(\"fmentioncash\")} cash from ${mentionedUser}!\n12h Timer activated!",
        "storage": "0",
        "varName2": "",
        "iffalse": "0",
        "iffalseVal": "",
        "name": "Send Message"
      },
      {
        "time": "12",
        "measurement": "3",
        "name": "Wait"
      },
      {
        "channel": "1",
        "varName": "",
        "message": "You can **&rob** now again!",
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
        "anchor_id": "prot",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "Your enemy has a protection running.\n12h timer activated.",
        "storage": "0",
        "varName2": "",
        "iffalse": "0",
        "iffalseVal": "",
        "name": "Send Message"
      },
      {
        "FirstNumber": "${tempVars(\"HisProt\")}",
        "info": "1",
        "SecondNumber": "1",
        "storage": "1",
        "varName": "hisnewprot",
        "name": "Basic Math Operation"
      },
      {
        "member": "0",
        "varName": "",
        "dataName": "protections",
        "changeType": "0",
        "value": "tempVars(\"hisnewprot\")",
        "name": "Control Member Data"
      },
      {
        "name": "End Action Sequence"
      }
    ],
    "_timeRestriction": 43200,
    "customData": {
      "Command Info": {
        "category": "Economy",
        "description": "Rob someones cash!",
        "include": "Yes"
      }
    }
  }