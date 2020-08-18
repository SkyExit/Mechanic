{
  "name": "warn",
  "permissions": "ADMINISTRATOR",
  "restriction": "1",
  "_id": "ESeVj",
  "actions": [
    {
      "info": "0",
      "find": "503517425749458952",
      "storage": "1",
      "varName": "mains",
      "name": "Find Server"
    },
    {
      "server": "1",
      "varName": "mains",
      "name": "Change Server"
    },
    {
      "info": "1",
      "infoIndex": "2",
      "storage": "1",
      "varName": "reason",
      "name": "Store Command Params"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "warns",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "warnedtimes",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "r1",
      "defaultVal": "\"null\"",
      "storage": "1",
      "varName2": "r1",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "r2",
      "defaultVal": "\"null\"",
      "storage": "1",
      "varName2": "r2",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "r3",
      "defaultVal": "\"null\"",
      "storage": "1",
      "varName2": "r3",
      "name": "Store Member Data"
    },
    {
      "storage": "1",
      "varName": "r1",
      "comparison": "1",
      "value": "\"null\"",
      "iftrue": "4",
      "iftrueVal": "r1",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "r2",
      "comparison": "1",
      "value": "\"null\"",
      "iftrue": "4",
      "iftrueVal": "r2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "r3",
      "comparison": "1",
      "value": "\"null\"",
      "iftrue": "4",
      "iftrueVal": "r3",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "${mentionedUser} has already 3 warns!",
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
      "anchor_id": "r1",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "FirstNumber": "${tempVars(\"warnedtimes\")}",
      "info": "0",
      "SecondNumber": "1",
      "storage": "1",
      "varName": "newwarns",
      "name": "Basic Math Operation"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "warns",
      "changeType": "0",
      "value": "tempVars(\"newwarns\")",
      "name": "Control Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "r1",
      "changeType": "0",
      "value": "tempVars(\"reason\")",
      "name": "Control Member Data"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "r2",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "FirstNumber": "${tempVars(\"warnedtimes\")}",
      "info": "0",
      "SecondNumber": "1",
      "storage": "1",
      "varName": "newwarns",
      "name": "Basic Math Operation"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "warns",
      "changeType": "0",
      "value": "tempVars(\"newwarns\")",
      "name": "Control Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "r2",
      "changeType": "0",
      "value": "tempVars(\"reason\")",
      "name": "Control Member Data"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "r3",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "FirstNumber": "${tempVars(\"warnedtimes\")}",
      "info": "0",
      "SecondNumber": "1",
      "storage": "1",
      "varName": "newwarns",
      "name": "Basic Math Operation"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "warns",
      "changeType": "0",
      "value": "tempVars(\"newwarns\")",
      "name": "Control Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "r3",
      "changeType": "0",
      "value": "tempVars(\"reason\")",
      "name": "Control Member Data"
    },
    {
      "name": "End Action Sequence"
    }
  ],
  "customData": {
    "Command Info": {
      "category": "Moderation",
      "description": "Warn a user!",
      "include": "Yes"
    }
  }
}
