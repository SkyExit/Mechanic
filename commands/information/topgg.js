{
  "name": "topgg",
  "temp": "",
  "event-type": "1",
  "_id": "qhdgC",
  "actions": [
    {
      "url": "https://top.gg/api/widget/712313236313342064.svg",
      "storage": "1",
      "varName": "file",
      "name": "Canvas Create Image"
    },
    {
      "info": "3",
      "storage": "1",
      "varName2": "servers",
      "name": "Store Bot Client Info"
    },
    {
      "info": "4",
      "storage": "1",
      "varName2": "members",
      "name": "Store Bot Client Info"
    },
    {
      "storage": "1",
      "varName": "file",
      "x": "15",
      "y": "110",
      "fontPath": "fonts/font1.ttf",
      "fontColor": "FFFFFF",
      "fontSize": "15px",
      "align": "0",
      "text": "Servers: ${tempVars(\"servers\")}",
      "name": "Canvas Draw Text on Image"
    },
    {
      "storage": "1",
      "varName": "file",
      "x": "140",
      "y": "110",
      "fontPath": "fonts/font1.ttf",
      "fontColor": "FFFFFF",
      "fontSize": "15px",
      "align": "0",
      "text": "Members: ${tempVars(\"members\")}",
      "name": "Canvas Draw Text on Image"
    },
    {
      "storage": "1",
      "varName": "file",
      "channel": "0",
      "varName2": "",
      "message": "",
      "compress": "9",
      "spoiler": "0",
      "storage2": "0",
      "varName3": "",
      "name": "Canvas Send Image"
    }
  ],
  "restriction": "0",
  "comType": "0",
  "permissions": "NONE",
  "customData": {
    "Command Info": {
      "category": "Information",
      "description": "See informations about our top.ggpage!",
      "include": "Yes"
    }
  }
}
