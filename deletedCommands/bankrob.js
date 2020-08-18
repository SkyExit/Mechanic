{
  "name": "bankrob",
  "permissions": "NONE",
  "restriction": "4",
  "_id": "ZKYko",
  "actions": [
    {
      "info": "2",
      "infoIndex": "1",
      "storage": "1",
      "varName": "mem",
      "name": "Store Command Params"
    },
    {
      "storage": "1",
      "varName": "mem",
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
      "dataName": "bank",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "hisBank",
      "name": "Store Member Data"
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
      "FirstNumber": "${tempVars(\"hisBank\")}",
      "info": "1",
      "SecondNumber": "${tempVars(\"hisBank\")}",
      "storage": "1",
      "varName": "hisNewBank",
      "name": "Basic Math Operation"
    },
    {
      "FirstNumber": "${tempVars(\"hisBank\")}",
      "info": "0",
      "SecondNumber": "${tempVars(\"myCash\")}",
      "storage": "1",
      "varName": "myNewCash",
      "name": "Basic Math Operation"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You robbed the bank of ${mentionedUser} and got ${tempVars(\"hisBank\")} cash!",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "bank",
      "changeType": "0",
      "value": "tempVars(\"hisNewBank\")",
      "name": "Control Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "cash",
      "changeType": "0",
      "value": "tempVars(\"myNewCash\")",
      "name": "Control Member Data"
    }
  ],
  "customData": {
    "Command Info": {
      "category": "Ownership",
      "description": "Rob someons Bank!",
      "include": "Yes"
    }
  }
}
