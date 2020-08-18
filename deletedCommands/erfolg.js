{
  "name": "erfolg",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "DjDRs",
  "actions": [
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "compara",
      "name": "Store Command Params"
    },
    {
      "storage": "1",
      "varName": "compara",
      "comparison": "1",
      "value": "\"test\"",
      "iftrue": "4",
      "iftrueVal": "test",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "compara",
      "comparison": "1",
      "value": "\"help\"",
      "iftrue": "4",
      "iftrueVal": "help",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "description": "",
      "jump_to_anchor": "help",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "help",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "coming soon",
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
      "anchor_id": "test",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "message": "0",
      "varName": "",
      "info": "18",
      "storage": "1",
      "varName2": "attcount",
      "name": "Store Message Info"
    },
    {
      "storage": "1",
      "varName": "attcount",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "only1",
      "name": "Check Variable"
    },
    {
      "storage": "0",
      "varName": "",
      "info": "0",
      "storage2": "1",
      "varName2": "url",
      "name": "Store Attachment Info"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Wait.",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "info": "0",
      "find": "729414238199873559",
      "storage": "1",
      "varName": "ch",
      "name": "Find Channel"
    },
    {
      "channel": "5",
      "varName": "ch",
      "message": "${member} möchte einen erfolg bestätigen:\n\n${tempVars(\"url\")}",
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
      "anchor_id": "only1",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Please send **1** Picture!",
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
      "category": "Ownership",
      "description": "Coming Soon",
      "include": "Yes"
    }
  }
}
