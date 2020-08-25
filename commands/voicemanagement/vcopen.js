{
  "name": "vcopen",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "YkPPx",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "info": "19",
      "storage": "1",
      "varName2": "channel",
      "name": "Store Member Info"
    },
    {
      "storage": "3",
      "varName": "channel",
      "permission": "CONNECT",
      "state": "0",
      "name": "Set Voice Channel Perms"
    },
    {
      "storage": "3",
      "varName": "channel",
      "permission": "SPEAK",
      "state": "0",
      "name": "Set Voice Channel Perms"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Your channel was opened!",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    }
  ]
}
