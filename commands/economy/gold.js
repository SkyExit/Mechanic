{
  "name": "gold",
  "permissions": "NONE",
  "restriction": "1",
  "actions": [
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "myparams",
      "name": "Store Command Params"
    },
    {
      "condition": "1",
      "comparison": "0",
      "value": "0",
      "iftrue": "0",
      "iftrueVal": "3",
      "iffalse": "2",
      "iffalseVal": "19",
      "name": "Check Parameters"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "gold",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "myGold",
      "name": "Store Member Data"
    },
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
      "dataName": "bank",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "myBank",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "info": "12",
      "storage": "1",
      "varName2": "1url",
      "name": "Store Member Info"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "parseInt(tempVars(\"myGold\")).toLocaleString('en')",
      "storage": "1",
      "varName": "fixedGold",
      "name": "Run Script"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });\nformatter.format(tempVars(\"myCash\"));",
      "storage": "1",
      "varName": "fixedCash",
      "name": "Run Script"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });\nformatter.format(tempVars(\"myBank\"));",
      "storage": "1",
      "varName": "fixedBank",
      "name": "Run Script"
    },
    {
      "member": "1",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "name",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "url",
      "name": "Store Member Info"
    },
    {
      "title": "Cash",
      "author": "${tempVars(\"name\")}",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"url\")}",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "${member}'s actual Cash-board!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Cash",
      "message": "${tempVars(\"fixedCash\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Bank",
      "message": "${tempVars(\"fixedBank\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Gold",
      "message": "${tempVars(\"fixedGold\")}",
      "inline": "0",
      "name": "Add Embed Field"
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
      "member": "0",
      "varName": "",
      "dataName": "gold",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "myGold",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "cash",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "myCash",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "bank",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "myBank",
      "name": "Store Member Data"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "parseInt(tempVars(\"myGold\")).toLocaleString('en')",
      "storage": "1",
      "varName": "fixedGold",
      "name": "Run Script"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });\nformatter.format(tempVars(\"myCash\"));",
      "storage": "1",
      "varName": "fixedCash",
      "name": "Run Script"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });\nformatter.format(tempVars(\"myBank\"));",
      "storage": "1",
      "varName": "fixedBank",
      "name": "Run Script"
    },
    {
      "member": "0",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "name",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "url",
      "name": "Store Member Info"
    },
    {
      "title": "Cash",
      "author": "${tempVars(\"name\")}",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"url\")}",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "${mentionedUser}'s actual Cash-board!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Cash",
      "message": "${tempVars(\"fixedCash\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Bank",
      "message": "${tempVars(\"fixedBank\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Gold",
      "message": "${tempVars(\"fixedGold\")}",
      "inline": "0",
      "name": "Add Embed Field"
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
  ],
  "_id": "jfqBY",
  "comType": "0",
  "customData": {
    "Command Info": {
      "category": "Economy",
      "description": "Show how many cash you have!",
      "include": "Yes"
    }
  }
}
