{
  "name": "slap",
  "permissions": "NONE",
  "restriction": "1",
  "actions": [
    {
      "condition": "1",
      "comparison": "0",
      "value": "1",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "```\nMention a user in order to use this command!\n```",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "${member} slapped ${mentionedUser} in the face!",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    }
  ],
  "_id": "cIBhI",
  "customData": {
    "Command Info": {
      "category": "Gaming",
      "description": "Slap someons face!",
      "include": "Yes"
    }
  }
}
