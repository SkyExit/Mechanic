{
  "name": "rnumber",
  "permissions": "NONE",
  "restriction": "1",
  "actions": [
    {
      "condition": "0",
      "comparison": "0",
      "value": "2",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "```\nPlease insert a minimum and maximum value in order to use this command:\n!GetRandomNumber [min-value] [max-value]\n```",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "min",
      "name": "Store Command Params"
    },
    {
      "info": "0",
      "infoIndex": "2",
      "storage": "1",
      "varName": "max",
      "name": "Store Command Params"
    },
    {
      "storage": "1",
      "varName": "result",
      "min": "${tempVars(\"min\")}",
      "max": "${tempVars(\"max\")}",
      "name": "Generate Random Number"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "The randomly generated value is: ${tempVars(\"result\")}!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ],
  "_id": "tabsu",
  "customData": {
    "Command Info": {
      "category": "Gaming",
      "description": "Generate a random number!",
      "include": "Yes"
    }
  }
}
