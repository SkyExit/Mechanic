{
    "name": "chinfo",
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
        "iftrue": "4",
        "iftrueVal": "2",
        "iffalse": "4",
        "iffalseVal": "1",
        "name": "Check Variable"
      },
      {
        "name": "End Action Sequence"
      },
      {
        "anchor_id": "1",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
      },
      {
        "channel": "0",
        "varName": "",
        "info": "2",
        "storage": "1",
        "varName2": "1name",
        "name": "Store Channel Info"
      },
      {
        "channel": "0",
        "varName": "",
        "info": "1",
        "storage": "1",
        "varName2": "1id",
        "name": "Store Channel Info"
      },
      {
        "channel": "0",
        "varName": "",
        "info": "3",
        "storage": "1",
        "varName2": "1topic",
        "name": "Store Channel Info"
      },
      {
        "channel": "0",
        "varName": "",
        "info": "5",
        "storage": "1",
        "varName2": "1posi",
        "name": "Store Channel Info"
      },
      {
        "channel": "0",
        "varName": "",
        "info": "6",
        "storage": "1",
        "varName2": "118",
        "name": "Store Channel Info"
      },
      {
        "channel": "0",
        "varName": "",
        "info": "9",
        "storage": "1",
        "varName2": "1cdate",
        "name": "Store Channel Info"
      },
      {
        "channel": "0",
        "varName": "",
        "info": "10",
        "storage": "1",
        "varName2": "1category",
        "name": "Store Channel Info"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "Name:     ${tempVars(\"1name\")}\nID:       ${tempVars(\"1id\")}\nTopic:    ${tempVars(\"1topic\")}\nPosition: ${tempVars(\"1posi\")}\nNSFW:     ${tempVars(\"118\")}\nCreation: ${tempVars(\"1cdate\")}\nCategory: ${tempVars(\"1category\")}",
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
        "channel": "1",
        "varName": "",
        "info": "2",
        "storage": "1",
        "varName2": "1name",
        "name": "Store Channel Info"
      },
      {
        "channel": "1",
        "varName": "",
        "info": "1",
        "storage": "1",
        "varName2": "1id",
        "name": "Store Channel Info"
      },
      {
        "channel": "1",
        "varName": "",
        "info": "3",
        "storage": "1",
        "varName2": "1topic",
        "name": "Store Channel Info"
      },
      {
        "channel": "1",
        "varName": "",
        "info": "5",
        "storage": "1",
        "varName2": "1posi",
        "name": "Store Channel Info"
      },
      {
        "channel": "1",
        "varName": "",
        "info": "6",
        "storage": "1",
        "varName2": "118",
        "name": "Store Channel Info"
      },
      {
        "channel": "1",
        "varName": "",
        "info": "9",
        "storage": "1",
        "varName2": "1cdate",
        "name": "Store Channel Info"
      },
      {
        "channel": "1",
        "varName": "",
        "info": "10",
        "storage": "1",
        "varName2": "1category",
        "name": "Store Channel Info"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "Name:     ${tempVars(\"1name\")}\nID:       ${tempVars(\"1id\")}\nTopic:    ${tempVars(\"1topic\")}\nPosition: ${tempVars(\"1posi\")}\nNSFW:     ${tempVars(\"118\")}\nCreation: ${tempVars(\"1cdate\")}\nCategory: ${tempVars(\"1category\")}",
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
    "_id": "eiwsb",
    "customData": {
      "Command Info": {
        "category": "Information",
        "description": "Get informations about the mentioned channel!",
        "include": "Yes"
      }
    }
  }