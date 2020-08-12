{
  "name": "vote",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "nRmyr",
  "actions": [
    {
      "member": "1",
      "apitoken": "Your API Token from top.gg here",
      "varName": "",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "4",
      "name": "Check DBL Voted"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Vote here for the bot:\nhttps://top.gg/bot/Your bot id/vote",
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
      "channel": "0",
      "varName": "",
      "message": "You already have voted!\nI Love you man",
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
  "comType": "0",
  "customData": {
    "Command Info": {
      "category": "Useful",
      "description": "Vote for the bot tu unlock nice features!",
      "include": "Yes"
    }
  }
}
