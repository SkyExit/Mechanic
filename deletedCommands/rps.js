{
  "name": "rps",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "VwXsw",
  "actions": [
    {
      "member": "1",
      "apitoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMjMxMzIzNjMxMzM0MjA2NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTkzMzQ2ODg0fQ.taJUABxJFVVh57jh8vjKGPsEvH1xyxHCrsw2TBdZMJg",
      "varName": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "50",
      "name": "Check DBL Voted"
    },
    {
      "message": "0",
      "varName": "",
      "info": "0",
      "ParamN": "1",
      "separator": "",
      "storage": "1",
      "varName2": "PlayerChoice",
      "name": "Store Message Params"
    },
    {
      "member": "1",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "Member",
      "name": "Store Member Info"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "var choice = tempVars(\"PlayerChoice\").toLowerCase();\n\nActions.storeValue(choice, 1, \"PlayerChoice1\", cache);\n\n",
      "storage": "0",
      "varName": "",
      "name": "Run Script"
    },
    {
      "storage": "1",
      "varName": "Number",
      "min": "1",
      "max": "3",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "PlayerChoice1",
      "comparison": "1",
      "value": "rock",
      "iftrue": "2",
      "iftrueVal": "10",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "PlayerChoice1",
      "comparison": "1",
      "value": "paper",
      "iftrue": "2",
      "iftrueVal": "23",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "PlayerChoice1",
      "comparison": "1",
      "value": "scissors",
      "iftrue": "2",
      "iftrueVal": "36",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Please pick a move! (Rock, Paper or Scissors)",
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
      "message": "Bot is picking a move",
      "storage": "1",
      "varName2": "RockMessage",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "RockMessage",
      "message": "The bot has Chosen!",
      "storage2": "1",
      "varName2": "",
      "name": "Edit Message"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "Number",
      "comparison": "1",
      "value": "1",
      "iftrue": "2",
      "iftrueVal": "19",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "Number",
      "comparison": "1",
      "value": "2",
      "iftrue": "2",
      "iftrueVal": "21",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "Number",
      "comparison": "1",
      "value": "3",
      "iftrue": "0",
      "iftrueVal": "15",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "RockMessage",
      "message": "Scissors! \n\nCongrats <@${tempVars(\"Member\")}>! You won!",
      "storage2": "1",
      "varName2": "",
      "name": "Edit Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "RockMessage",
      "message": "Rock!\n\nIt was a draw <@${tempVars(\"Member\")}>!",
      "storage2": "1",
      "varName2": "",
      "name": "Edit Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "RockMessage",
      "message": "Paper!\n\nYou lost <@${tempVars(\"Member\")}> :(",
      "storage2": "1",
      "varName2": "",
      "name": "Edit Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Bot is picking a move",
      "storage": "1",
      "varName2": "PaperMessage",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "PaperMessage",
      "message": "The bot has Chosen!",
      "storage2": "1",
      "varName2": "",
      "name": "Edit Message"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "Number",
      "comparison": "1",
      "value": "1",
      "iftrue": "2",
      "iftrueVal": "32",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "Number",
      "comparison": "1",
      "value": "2",
      "iftrue": "2",
      "iftrueVal": "34",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "Number",
      "comparison": "1",
      "value": "3",
      "iftrue": "0",
      "iftrueVal": "2",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "PaperMessage",
      "message": "Scissors! \n\nYou lost <@${tempVars(\"Member\")}> :frowning:",
      "storage2": "1",
      "varName2": "",
      "name": "Edit Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "PaperMessage",
      "message": "Rock!\n\nCongrats <@${tempVars(\"Member\")}>! You won!\n",
      "storage2": "1",
      "varName2": "",
      "name": "Edit Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "PaperMessage",
      "message": "Paper!\n\nIt was a draw <@${tempVars(\"Member\")}>!",
      "storage2": "1",
      "varName2": "",
      "name": "Edit Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Bot is picking a move",
      "storage": "1",
      "varName2": "ScissorsMessage",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "ScissorsMessage",
      "message": "The bot has Chosen!",
      "storage2": "1",
      "varName2": "",
      "name": "Edit Message"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "Number",
      "comparison": "1",
      "value": "1",
      "iftrue": "2",
      "iftrueVal": "45",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "Number",
      "comparison": "1",
      "value": "2",
      "iftrue": "2",
      "iftrueVal": "47",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "Number",
      "comparison": "1",
      "value": "3",
      "iftrue": "0",
      "iftrueVal": "15",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "ScissorsMessage",
      "message": "Scissors! \n\nIt was a draw <@${tempVars(\"Member\")}>!",
      "storage2": "1",
      "varName2": "",
      "name": "Edit Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "ScissorsMessage",
      "message": "Rock!\n\nYou lost <@${tempVars(\"Member\")}> :frowning:",
      "storage2": "1",
      "varName2": "",
      "name": "Edit Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "ScissorsMessage",
      "message": "Paper!\n\nCongrats <@${tempVars(\"Member\")}>! You won!",
      "storage2": "1",
      "varName2": "",
      "name": "Edit Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You have to vote (**&vote**) to use this premium command!",
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
  "customData": {
    "Command Info": {
      "category": "Ownership",
      "description": "Coming Soon!",
      "include": "Yes"
    }
  }
}
