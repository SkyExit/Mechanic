{
  "name": "unwarn",
  "permissions": "ADMINISTRATOR",
  "restriction": "1",
  "_id": "lvOLk",
  "actions": [
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
      "varName": "r3",
      "comparison": "1",
      "value": "\"null\"",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "r3",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "r2",
      "comparison": "1",
      "value": "\"null\"",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "r2",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "r1",
      "comparison": "1",
      "value": "\"null\"",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "r1",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "${mentionedUser} has no warnings!",
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
      "anchor_id": "r3",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "r3",
      "changeType": "0",
      "value": "\"null\"",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"warnedtimes\")}",
      "info": "1",
      "SecondNumber": "1",
      "storage": "1",
      "varName": "newwarn",
      "name": "Basic Math Operation"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "warns",
      "changeType": "0",
      "value": "tempVars(\"newwarn\")",
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
      "member": "0",
      "varName": "",
      "dataName": "r2",
      "changeType": "0",
      "value": "\"null\"",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"warnedtimes\")}",
      "info": "1",
      "SecondNumber": "1",
      "storage": "1",
      "varName": "newwarn",
      "name": "Basic Math Operation"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "warns",
      "changeType": "0",
      "value": "tempVars(\"newwarn\")",
      "name": "Control Member Data"
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
      "member": "0",
      "varName": "",
      "dataName": "r1",
      "changeType": "0",
      "value": "\"null\"",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"warnedtimes\")}",
      "info": "1",
      "SecondNumber": "1",
      "storage": "1",
      "varName": "newwarn",
      "name": "Basic Math Operation"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "warns",
      "changeType": "0",
      "value": "tempVars(\"newwarn\")",
      "name": "Control Member Data"
    },
    {
      "name": "End Action Sequence"
    }
  ],
  "customData": {
    "Command Info": {
      "category": "Moderation",
      "description": "Remove the last warning from a user!",
      "include": "Yes"
    }
  }
}
