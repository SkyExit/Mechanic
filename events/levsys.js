{
  "name": "Levsys",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "cLJwq",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "dataName": "lvlsys",
      "defaultVal": "false",
      "storage": "1",
      "varName2": "serverdata",
      "name": "Store Server Data"
    },
    {
      "storage": "1",
      "varName": "serverdata",
      "comparison": "1",
      "value": "true",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "exppp",
      "min": "3",
      "max": "9",
      "name": "Generate Random Number"
    },
    {
      "member": "1",
      "varName": "",
      "info": "0",
      "storage": "1",
      "varName2": "member",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "member",
      "dataName": "exp",
      "changeType": "1",
      "value": "tempVars(\"exppp\")",
      "name": "Control Member Data"
    },
    {
      "member": "1",
      "varName": "member",
      "dataName": "glexp",
      "changeType": "1",
      "value": "tempVars(\"exppp\")",
      "name": "Control Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "exp",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "myExp",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "member",
      "dataName": "level",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "myLevel",
      "name": "Store Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"myLevel\")}",
      "info": "2",
      "SecondNumber": "5",
      "storage": "1",
      "varName": "111",
      "name": "Basic Math Operation"
    },
    {
      "storage": "1",
      "varName": "myExp",
      "comparison": "14",
      "value": "tempVars(\"111\")",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "FirstNumber": "${tempVars(\"myExp\")}",
      "info": "1",
      "SecondNumber": "${tempVars(\"111\")}",
      "storage": "1",
      "varName": "newEXP2",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "member",
      "dataName": "exp",
      "changeType": "0",
      "value": "tempVars(\"newEXP2\")",
      "name": "Control Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"myLevel\")}",
      "info": "0",
      "SecondNumber": "1",
      "storage": "1",
      "varName": "33333",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "member",
      "dataName": "level",
      "changeType": "0",
      "value": "${tempVars(\"33333\")}",
      "name": "Control Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "${tempVars(\"member\")} reached level ${tempVars(\"33333\")}!",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    }
  ],
  "comType": "3",
  "_timeRestriction": 30,
  "customData": {
    "Command Info": {
      "category": "Events",
      "description": "The Levelsystem",
      "include": "No"
    }
  }
}
