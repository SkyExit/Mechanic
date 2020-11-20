{
  "name": "dick",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "KSZls",
  "actions": [
    {
      "info": "2",
      "infoIndex": "1",
      "storage": "1",
      "varName": "mention",
      "name": "Store Command Params"
    },
    {
      "storage": "1",
      "varName": "rnum",
      "min": "1",
      "max": "20",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "einheit",
      "min": "1",
      "max": "3",
      "name": "Generate Random Number"
    },
    {
      "code": "myE();\n\nfunction myE() {\n    var einheit = tempVars(\"einheit\");\n    \n    if(einheit == 1) {\n        return \"mm\";\n    } else if (einheit == 2) {\n        return \"cm\";\n    } else if(einheit == 3) {\n        return \"dm\";\n    } else {\n        return \"kp\";\n    }\n}\n",
      "behavior": "0",
      "interpretation": "1",
      "storage": "1",
      "varName": "eh",
      "VTypeSelect": "0",
      "CVTypeValue": "",
      "name": "Run Script"
    },
    {
      "storage": "1",
      "varName": "nDi",
      "girdi": "=",
      "xtimes": "${tempVars(\"rnum\")}",
      "name": "Repeat String"
    },
    {
      "condition": "1",
      "comparison": "0",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Parameters"
    },
    {
      "description": "",
      "jump_to_anchor": "n",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "description": "",
      "jump_to_anchor": "a",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "a",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "member": "1",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "memd",
      "name": "Store Member Info"
    },
    {
      "title": "${tempVars(\"memd\")}'s dick lenght",
      "author": "",
      "color": "#ebebeb",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "8${tempVars(\"nDi\")}D (${tempVars(\"rnum\")}${tempVars(\"eh\")})",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "0",
      "varName2": "",
      "storage3": "0",
      "varName3": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "n",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "member": "2",
      "varName": "mention",
      "info": "3",
      "storage": "1",
      "varName2": "memd",
      "name": "Store Member Info"
    },
    {
      "title": "${tempVars(\"memd\")}'s dick lenght",
      "author": "",
      "color": "#ebebeb",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "8${tempVars(\"nDi\")}D (${tempVars(\"rnum\")}${tempVars(\"eh\")})",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "0",
      "varName2": "",
      "storage3": "0",
      "varName3": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    }
  ]
}
