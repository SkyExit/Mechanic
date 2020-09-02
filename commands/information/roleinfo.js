{
    "name": "roleinfo",
    "permissions": "NONE",
    "restriction": "1",
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
        "comparison": "0",
        "value": "",
        "iftrue": "0",
        "iftrueVal": "",
        "iffalse": "4",
        "iffalseVal": "2",
        "name": "Check Variable"
      },
      {
        "role": "0",
        "varName": "",
        "info": "2",
        "storage": "1",
        "varName2": "1name",
        "name": "Store Role Info"
      },
      {
        "role": "0",
        "varName": "",
        "info": "1",
        "storage": "1",
        "varName2": "1id",
        "name": "Store Role Info"
      },
      {
        "role": "0",
        "varName": "",
        "info": "3",
        "storage": "1",
        "varName2": "1color",
        "name": "Store Role Info"
      },
      {
        "role": "0",
        "varName": "",
        "info": "4",
        "storage": "1",
        "varName2": "1posi",
        "name": "Store Role Info"
      },
      {
        "role": "0",
        "varName": "",
        "info": "10",
        "storage": "1",
        "varName2": "1cdate",
        "name": "Store Role Info"
      },
      {
        "role": "0",
        "varName": "",
        "info": "12",
        "storage": "1",
        "varName2": "1memamo",
        "name": "Store Role Info"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "Role Name:  ${tempVars(\"1name\")}\nRole ID:    ${tempVars(\"1id\")}\nRole Color: ${tempVars(\"1color\")}\nPosition:   ${tempVars(\"1posi\")}\nCreation:   ${tempVars(\"1cdate\")}\nUsers:      ${tempVars(\"1memamo\")}",
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
        "anchor_id": "2",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "wrong format! Type `&roleinfo <@role>`",
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
    "_id": "GRdlg",
    "customData": {
      "Command Info": {
        "category": "Information",
        "description": "Get informations about the mentioned role!",
        "include": "Yes"
      }
    }
  }