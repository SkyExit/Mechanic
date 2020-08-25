{
  "name": "vckick",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "ZgcVT",
  "actions": [
    {
      "info": "2",
      "infoIndex": "1",
      "storage": "1",
      "varName": "target",
      "name": "Store Command Params"
    },
    {
      "condition": "1",
      "comparison": "0",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "nm",
      "name": "Check Parameters"
    },
    {
      "member": "1",
      "varName": "",
      "info": "19",
      "storage": "1",
      "varName2": "memVC",
      "name": "Store Member Info"
    },
    {
      "vchannel": "3",
      "varName": "memVC",
      "member": "2",
      "varName2": "target",
      "permission": "CONNECT",
      "state": "2",
      "name": "Set Member Voice Channel Perms"
    },
    {
      "vchannel": "3",
      "varName": "memVC",
      "member": "2",
      "varName2": "target",
      "permission": "SPEAK",
      "state": "2",
      "name": "Set Member Voice Channel Perms"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "${tempVars(\"target\")} was kicked out of your channel!",
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
      "anchor_id": "nm",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You need to mention someone!",
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
