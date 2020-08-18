{
  "name": "warnings",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "pfqTt",
  "actions": [
    {
      "member": "0",
      "varName": "",
      "dataName": "warns",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "memwar",
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
      "channel": "0",
      "varName": "",
      "message": "${mentionedUser} has ${tempVars(\"memwar\")} warns!\nwarn1: ${tempVars(\"r1\")}\nwarn2: ${tempVars(\"r2\")}\nwarn3: ${tempVars(\"r3\")}",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    }
  ],
  "customData": {
    "Command Info": {
      "category": "Information",
      "description": "See your warnings",
      "include": "Yes"
    }
  }
}
