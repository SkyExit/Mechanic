{
  "name": "flipcoin",
  "permissions": "NONE",
  "restriction": "1",
  "actions": [
    {
      "storage": "1",
      "varName": "result",
      "min": "1",
      "max": "2",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "result",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Head",
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
      "message": "Number",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ],
  "_id": "LjZeF",
  "customData": {
    "Command Info": {
      "category": "Gaming",
      "description": "Flipa coin to see who's right!",
      "include": "Yes"
    }
  }
}
