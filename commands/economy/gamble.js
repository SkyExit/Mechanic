{
  "name": "gamble",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "APBrF",
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
      "member": "1",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "athname",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "gamble",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "myGamble",
      "name": "Store Member Data"
    },
    {
      "storage": "1",
      "varName": "myGamble",
      "comparison": "1",
      "value": "1",
      "iftrue": "4",
      "iftrueVal": "lvl1",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "myGamble",
      "comparison": "1",
      "value": "2",
      "iftrue": "4",
      "iftrueVal": "lvl2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "myGamble",
      "comparison": "1",
      "value": "3",
      "iftrue": "4",
      "iftrueVal": "lvl3",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "myGamble",
      "comparison": "1",
      "value": "4",
      "iftrue": "4",
      "iftrueVal": "lvl4",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "myGamble",
      "comparison": "1",
      "value": "5",
      "iftrue": "4",
      "iftrueVal": "lvl5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "anchor_id": "lvl1",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "cashtoadd",
      "min": "1",
      "max": "1000",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "type",
      "min": "1",
      "max": "100",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "14",
      "value": "40",
      "iftrue": "4",
      "iftrueVal": "add",
      "iffalse": "4",
      "iffalseVal": "remove",
      "name": "Check Variable"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "lvl2",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "cashtoadd",
      "min": "1000",
      "max": "10000",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "type",
      "min": "1",
      "max": "100",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "14",
      "value": "40",
      "iftrue": "4",
      "iftrueVal": "add",
      "iffalse": "4",
      "iffalseVal": "remove",
      "name": "Check Variable"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "lvl3",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "cashtoadd",
      "min": "10000",
      "max": "100000",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "type",
      "min": "1",
      "max": "100",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "14",
      "value": "40",
      "iftrue": "4",
      "iftrueVal": "add",
      "iffalse": "4",
      "iffalseVal": "remove",
      "name": "Check Variable"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "lvl4",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "cashtoadd",
      "min": "100000",
      "max": "1000000",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "type",
      "min": "1",
      "max": "100",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "14",
      "value": "40",
      "iftrue": "4",
      "iftrueVal": "add",
      "iffalse": "4",
      "iffalseVal": "remove",
      "name": "Check Variable"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "lvl5",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "cashtoadd",
      "min": "10000000",
      "max": "100000000",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "type",
      "min": "1",
      "max": "100",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "14",
      "value": "40",
      "iftrue": "4",
      "iftrueVal": "add",
      "iffalse": "4",
      "iffalseVal": "remove",
      "name": "Check Variable"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "add",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "FirstNumber": "${tempVars(\"myCash\")}",
      "info": "0",
      "SecondNumber": "${tempVars(\"cashtoadd\")}",
      "storage": "1",
      "varName": "newcash1",
      "name": "Basic Math Operation"
    },
    {
      "storage": "1",
      "varName": "newcash1",
      "comparison": "14",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "error",
      "name": "Check Variable"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "cash",
      "changeType": "0",
      "value": "tempVars(\"newcash1\")",
      "name": "Control Member Data"
    },
    {
      "code": "parseInt(tempVars(\"cashtoadd\")).toLocaleString('en')",
      "behavior": "0",
      "interpretation": "0",
      "storage": "1",
      "varName": "fixedca",
      "VTypeSelect": "0",
      "CVTypeValue": "",
      "name": "Run Script"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "${tempVars(\"athname\")}, you won ${tempVars(\"fixedca\")} cash.",
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
      "anchor_id": "remove",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "FirstNumber": "${tempVars(\"myCash\")}",
      "info": "1",
      "SecondNumber": "${tempVars(\"cashtoadd\")}",
      "storage": "1",
      "varName": "newCash2",
      "name": "Basic Math Operation"
    },
    {
      "storage": "1",
      "varName": "newCash2",
      "comparison": "14",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "4",
      "iffalseVal": "error",
      "name": "Check Variable"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "cash",
      "changeType": "0",
      "value": "tempVars(\"newCash2\")",
      "name": "Control Member Data"
    },
    {
      "code": "parseInt(tempVars(\"cashtoadd\")).toLocaleString('en')",
      "behavior": "0",
      "interpretation": "0",
      "storage": "1",
      "varName": "fixedcr",
      "VTypeSelect": "0",
      "CVTypeValue": "",
      "name": "Run Script"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "${tempVars(\"athname\")}, you lost ${tempVars(\"fixedcr\")} cash.",
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
      "anchor_id": "error",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You can't have negative cash, ${tempVars(\"athname\")}!",
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
      "category": "Economy",
      "description": "Gamble to win or loose Money!",
      "include": "Yes"
    }
  }
}
