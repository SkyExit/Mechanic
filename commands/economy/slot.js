{
  "name": "slot",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "QBTsW",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "dataName": "cash",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "myCash",
      "name": "Store Member Data"
    },
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "value",
      "name": "Store Command Params"
    },
    {
      "storage": "1",
      "varName": "value",
      "comparison": "14",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "noPara",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "value",
      "comparison": "13",
      "value": "tempVars(\"myCash\")",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "noM",
      "name": "Check Variable"
    },
    {
      "anchor_id": "begin",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "member": "1",
      "varName": "",
      "info": "0",
      "storage": "1",
      "varName2": "memberAuthor",
      "name": "Store Member Info"
    },
    {
      "storage": "1",
      "varName": "first",
      "min": "1",
      "max": "7",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "second",
      "min": "1",
      "max": "7",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "third",
      "min": "1",
      "max": "7",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "joker",
      "min": "1",
      "max": "100",
      "name": "Generate Random Number"
    },
    {
      "code": "a();\nfunction a() {\n    if(tempVars(\"first\") == 1) {\n        return `\n╭━━━╮\n┃╭━╮┃\n┃┃╱┃┃\n┃╰━╯┃\n┃╭━╮┃\n╰╯//╰╯`;\n    } else if(tempVars(\"first\") == 2) {\n        return `\n╭━━╮\n┃╭╮┃\n┃╰╯╰╮\n┃╭━╮┃\n┃╰━╯┃\n╰━━━╯`;\n    } else if(tempVars(\"first\") == 3) {\n        return `\n╭━━━╮\n┃╭━╮┃\n┃┃╱╰╯\n┃┃╱╭╮\n┃╰━╯┃\n╰━━━╯`;\n    } else if(tempVars(\"first\") == 4) {\n        return `\n╭━━━╮\n╰╮╭╮┃\n╱┃┃┃┃\n╱┃┃┃┃\n╭╯╰╯┃\n╰━━━╯`;\n    } else if(tempVars(\"first\") == 5) {\n        return `\n╭━━━╮\n┃╭━━╯\n┃╰━━╮\n┃╭━━╯\n┃╰━━╮\n╰━━━╯`;\n    } else if(tempVars(\"first\") == 6) {\n        return `\n╭━━━╮\n┃╭━━╯\n┃╰━━╮\n┃╭━━╯\n┃┃\n╰╯`;\n    } else if(tempVars(\"first\") == 7) {\n        return `\n╭━━━╮\n┃╭━╮┃\n┃┃╱╰╯\n┃┃╭━╮\n┃╰┻━┃\n╰━━━╯`;\n    }\n}\n",
      "behavior": "0",
      "interpretation": "1",
      "storage": "1",
      "varName": "evalA",
      "VTypeSelect": "0",
      "CVTypeValue": "",
      "name": "Run Script"
    },
    {
      "code": "a();\nfunction a() {\n    if(tempVars(\"second\") == 1) {\n        return `\n╭━━━╮\n┃╭━╮┃\n┃┃╱┃┃\n┃╰━╯┃\n┃╭━╮┃\n╰╯//╰╯`;\n    } else if(tempVars(\"second\") == 2) {\n        return `\n╭━━╮\n┃╭╮┃\n┃╰╯╰╮\n┃╭━╮┃\n┃╰━╯┃\n╰━━━╯`;\n    } else if(tempVars(\"second\") == 3) {\n        return `\n╭━━━╮\n┃╭━╮┃\n┃┃╱╰╯\n┃┃╱╭╮\n┃╰━╯┃\n╰━━━╯`;\n    } else if(tempVars(\"second\") == 4) {\n        return `\n╭━━━╮\n╰╮╭╮┃\n╱┃┃┃┃\n╱┃┃┃┃\n╭╯╰╯┃\n╰━━━╯`;\n    } else if(tempVars(\"second\") == 5) {\n        return `\n╭━━━╮\n┃╭━━╯\n┃╰━━╮\n┃╭━━╯\n┃╰━━╮\n╰━━━╯`;\n    } else if(tempVars(\"second\") == 6) {\n        return `\n╭━━━╮\n┃╭━━╯\n┃╰━━╮\n┃╭━━╯\n┃┃\n╰╯`;\n    } else if(tempVars(\"second\") == 7) {\n        return `\n╭━━━╮\n┃╭━╮┃\n┃┃╱╰╯\n┃┃╭━╮\n┃╰┻━┃\n╰━━━╯`;\n    }\n}",
      "behavior": "0",
      "interpretation": "1",
      "storage": "1",
      "varName": "evalB",
      "VTypeSelect": "0",
      "CVTypeValue": "",
      "name": "Run Script"
    },
    {
      "code": "a();\nfunction a() {\n    if(tempVars(\"third\") == 1) {\n        return `\n╭━━━╮\n┃╭━╮┃\n┃┃╱┃┃\n┃╰━╯┃\n┃╭━╮┃\n╰╯//╰╯`;\n    } else if(tempVars(\"third\") == 2) {\n        return `\n╭━━╮\n┃╭╮┃\n┃╰╯╰╮\n┃╭━╮┃\n┃╰━╯┃\n╰━━━╯`;\n    } else if(tempVars(\"third\") == 3) {\n        return `\n╭━━━╮\n┃╭━╮┃\n┃┃╱╰╯\n┃┃╱╭╮\n┃╰━╯┃\n╰━━━╯`;\n    } else if(tempVars(\"third\") == 4) {\n        return `\n╭━━━╮\n╰╮╭╮┃\n╱┃┃┃┃\n╱┃┃┃┃\n╭╯╰╯┃\n╰━━━╯`;\n    } else if(tempVars(\"third\") == 5) {\n        return `\n╭━━━╮\n┃╭━━╯\n┃╰━━╮\n┃╭━━╯\n┃╰━━╮\n╰━━━╯`;\n    } else if(tempVars(\"third\") == 6) {\n        return `\n╭━━━╮\n┃╭━━╯\n┃╰━━╮\n┃╭━━╯\n┃┃\n╰╯`;\n    } else if(tempVars(\"third\") == 7) {\n        return `\n╭━━━╮\n┃╭━╮┃\n┃┃╱╰╯\n┃┃╭━╮\n┃╰┻━┃\n╰━━━╯`;\n    }\n}",
      "behavior": "0",
      "interpretation": "1",
      "storage": "1",
      "varName": "evalC",
      "VTypeSelect": "0",
      "CVTypeValue": "",
      "name": "Run Script"
    },
    {
      "code": "checkwin();\nfunction checkwin() {\n    if(tempVars(\"first\") == tempVars(\"second\")) {\n         if(tempVars(\"second\") == tempVars(\"third\")) {\n             if(tempVars(\"joker\") > 80) {\n                 return true;\n             } else {\n                 return true;\n             }\n        } return \"no\";\n    } return \"no\";\n}",
      "behavior": "0",
      "interpretation": "1",
      "storage": "1",
      "varName": "ifWin",
      "VTypeSelect": "0",
      "CVTypeValue": "",
      "name": "Run Script"
    },
    {
      "storage": "1",
      "varName": "ifWin",
      "comparison": "5",
      "value": "\"no\"",
      "iftrue": "4",
      "iftrueVal": "no",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "ifWin",
      "comparison": "1",
      "value": "true",
      "iftrue": "4",
      "iftrueVal": "win",
      "iffalse": "0",
      "iffalseVal": "1",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "reroll",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "description": "",
      "jump_to_anchor": "begin",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "no",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "FirstNumber": "${tempVars(\"myCash\")}",
      "info": "1",
      "SecondNumber": "${tempVars(\"value\")}",
      "storage": "1",
      "varName": "newVal",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "cash",
      "changeType": "0",
      "value": "tempVars(\"newVal\")",
      "name": "Control Member Data"
    },
    {
      "title": "slot maschine",
      "author": "",
      "color": "#fcba03",
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
      "fieldName": "SLOT",
      "message": "${tempVars(\"evalA\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "SLOT",
      "message": "${tempVars(\"evalB\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "SLOT",
      "message": "${tempVars(\"evalC\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "You lost **${tempVars(\"value\")}** cash!",
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
      "anchor_id": "win",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "FirstNumber": "${tempVars(\"value\")}",
      "info": "2",
      "SecondNumber": "500",
      "storage": "1",
      "varName": "newVal",
      "name": "Basic Math Operation"
    },
    {
      "FirstNumber": "${tempVars(\"myCash\")}",
      "info": "0",
      "SecondNumber": "${tempVars(\"newVal\")}",
      "storage": "1",
      "varName": "newCash",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "cash",
      "changeType": "0",
      "value": "tempVars(\"newCash\")",
      "name": "Control Member Data"
    },
    {
      "title": "slot maschine",
      "author": "",
      "color": "#03fc45",
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
      "fieldName": "SLOT",
      "message": "${tempVars(\"evalA\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "SLOT",
      "message": "${tempVars(\"evalB\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "SLOT",
      "message": "${tempVars(\"evalC\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "You won **${tempVars(\"newVal\")}** cash!",
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
      "anchor_id": "noPara",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "No value found. Use **&slot <Amount>**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "noM",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You dont have enough Money!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    }
  ]
}
