{
  "name": "mcach",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "TTxwN",
  "actions": [
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "text",
      "name": "Store Command Params"
    },
    {
      "storage": "1",
      "varName": "randomnumber1",
      "min": "1",
      "max": "39",
      "name": "Generate Random Number"
    },
    {
      "code": "tempVars(\"text\").replace(\" \",\"+\")",
      "behavior": "0",
      "interpretation": "0",
      "storage": "1",
      "varName": "done",
      "VTypeSelect": "0",
      "CVTypeValue": "",
      "name": "Run Script"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "tempVars(\"done\").replace(\" \",\"+\")",
      "storage": "1",
      "varName": "done1",
      "name": "Run Script"
    },
    {
      "code": "tempVars(\"done1\").replace(\" \",\"+\")",
      "behavior": "0",
      "interpretation": "0",
      "storage": "1",
      "varName": "done2",
      "VTypeSelect": "0",
      "CVTypeValue": "",
      "name": "Run Script"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "tempVars(\"done2\").replace(\" \",\"+\")",
      "storage": "1",
      "varName": "done3",
      "name": "Run Script"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "tempVars(\"done3\").replace(\" \",\"+\")",
      "storage": "1",
      "varName": "done4",
      "name": "Run Script"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "tempVars(\"done4\").replace(\" \",\"+\")",
      "storage": "1",
      "varName": "done5",
      "name": "Run Script"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "tempVars(\"done5\").replace(\" \",\"+\")",
      "storage": "1",
      "varName": "done6",
      "name": "Run Script"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "tempVars(\"done6\").replace(\" \",\"+\")",
      "storage": "1",
      "varName": "done7",
      "name": "Run Script"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "tempVars(\"done7\").replace(\" \",\"+\")",
      "storage": "1",
      "varName": "done8",
      "name": "Run Script"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "tempVars(\"done8\").replace(\" \",\"+\")",
      "storage": "1",
      "varName": "done9",
      "name": "Run Script"
    },
    {
      "behavior": "0",
      "interpretation": "0",
      "code": "tempVars(\"done9\").replace(\" \",\"+\")",
      "storage": "1",
      "varName": "done10",
      "name": "Run Script"
    },
    {
      "title": "",
      "author": "",
      "color": "",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "https://www.minecraftskinstealer.com/achievement/a.php?i=${tempVars(\"randomnumber1\")}&h=Achievement+Get%21&t=${tempVars(\"done10\")}",
      "thumbUrl": "",
      "timestamp": "false",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "message",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "message",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    }
  ],
  "_aliases": [
    "minecraft"
  ],
  "comType": "0",
  "customData": {
    "Command Info": {
      "category": "Gaming",
      "description": "Generate your own Minecraft achievement!",
      "include": "Yes"
    }
  }
}
