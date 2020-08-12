{
  "name": "able",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "oQoYN",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "cis",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "permission": "ADMINISTRATOR",
      "iftrue": "3",
      "iftrueVal": "3",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Member Permissions"
    },
    {
      "storage": "1",
      "varName": "cis",
      "comparison": "1",
      "value": "421341759717638155",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "description": "",
      "jump_to_anchor": "nep",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "comp1",
      "name": "Store Command Params"
    },
    {
      "info": "0",
      "infoIndex": "2",
      "storage": "1",
      "varName": "comp2",
      "name": "Store Command Params"
    },
    {
      "storage": "1",
      "varName": "comp1",
      "comparison": "1",
      "value": "\"lvlsys\"",
      "iftrue": "4",
      "iftrueVal": "c",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "comp1",
      "comparison": "1",
      "value": "\"musys\"",
      "iftrue": "4",
      "iftrueVal": "c",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "comp1",
      "comparison": "1",
      "value": "\"esys\"",
      "iftrue": "4",
      "iftrueVal": "c",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "comp1",
      "comparison": "1",
      "value": "\"gsys\"",
      "iftrue": "4",
      "iftrueVal": "c",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "comp1",
      "comparison": "1",
      "value": "\"basys\"",
      "iftrue": "4",
      "iftrueVal": "c",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "comp1",
      "comparison": "1",
      "value": "\"mosys\"",
      "iftrue": "4",
      "iftrueVal": "c",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You can disable/enable:\nThe **Level System** (&able lvlsys d/e)\nThe **Music System** (&able musys d/e)\nThe **Economy System** (&able esys d/e)\nThe **Gaming/Fun System** (&able gsys d/e)\nThe **Basic System** (&able basys d/e)\nThe **Moderation System** (&able mosys d/e)\n",
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
      "anchor_id": "c",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "comp2",
      "comparison": "1",
      "value": "\"e\"",
      "iftrue": "4",
      "iftrueVal": "e",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "comp2",
      "comparison": "1",
      "value": "\"d\"",
      "iftrue": "4",
      "iftrueVal": "d",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Please use **d (isable) or e (nable)** as your 2. Parameter!",
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
      "anchor_id": "e",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "${tempVars(\"comp1\")}",
      "defaultVal": "true",
      "storage": "1",
      "varName2": "serverdata",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "${tempVars(\"comp1\")}",
      "changeType": "0",
      "value": "true",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Feature enabled!",
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
      "anchor_id": "d",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "${tempVars(\"comp1\")}",
      "defaultVal": "true",
      "storage": "1",
      "varName2": "serverdata",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "${tempVars(\"comp1\")}",
      "changeType": "0",
      "value": "false",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Feature disabled!",
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
      "category": "Administration",
      "description": "Enable or disable some commands!",
      "include": "Yes"
    }
  }
}
