{
  "name": "vcclose",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "hmBVg",
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
      "state": "1",
      "name": "Set Voice Channel Perms"
    },
    {
      "storage": "3",
      "varName": "channel",
      "permission": "SPEAK",
      "state": "1",
      "name": "Set Voice Channel Perms"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Your channel was closed!",
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
