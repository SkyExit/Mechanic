{
  "name": "quizzmaster",
  "permissions": "NONE",
  "restriction": "4",
  "_id": "onJHz",
  "actions": [
    {
      "channel": "0",
      "varName": "",
      "message": "Wenn du ein Quiz erstellen/bearbeiten möchtest, schreibe\n**Quiz1**\n**Quiz2**\n**Quiz3**\n**Quiz4**\n**Quiz5**\nWenn du ein Quiz einsehen möchtest, schreibe\n**Preview1**\n**Preview2**\n**Preview3**\n**Preview4**\n**Preview5**",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "anchor_id": "help",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "0",
      "varName": "",
      "filter": "content.length > 0 && author.id",
      "max": "1",
      "time": "60000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "storage2": "1",
      "varName2": "action",
      "name": "Await Response Call Action"
    },
    {
      "storage": "1",
      "varName": "action",
      "comparison": "1",
      "value": "\"Quiz1\"",
      "iftrue": "4",
      "iftrueVal": "q1",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "action",
      "comparison": "1",
      "value": "\"Preview1\"",
      "iftrue": "4",
      "iftrueVal": "preq1",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Diesen Befehl gibt es nicht... Versuchs nochmal!",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
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
      "anchor_id": "q1",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Ok. Sende nun eine kurze Beschreibung der ersten Frage.",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "storage": "0",
      "varName": "",
      "filter": "content.length > 0 && author.id === user.id",
      "max": "1",
      "time": "60000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "storage2": "1",
      "varName2": "short",
      "name": "Await Response Call Action"
    },
    {
      "message": "1",
      "varName": "short",
      "info": "2",
      "storage": "1",
      "varName2": "shorttext",
      "name": "Store Message Info"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "q1short",
      "changeType": "0",
      "value": "tempVars(\"shorttext\")",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Nun sende bitte eine detailierte Beschreibung!",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "storage": "0",
      "varName": "",
      "filter": "content.length > 0 && author.id === user.id",
      "max": "1",
      "time": "60000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "storage2": "1",
      "varName2": "long",
      "name": "Await Response Call Action"
    },
    {
      "message": "1",
      "varName": "long",
      "info": "2",
      "storage": "1",
      "varName2": "longtext",
      "name": "Store Message Info"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "q1long",
      "changeType": "0",
      "value": "tempVars(\"longtext\")",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "nun definiere \"A\"",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "storage": "0",
      "varName": "",
      "filter": "content.length > 0 && author.id === user.id",
      "max": "1",
      "time": "60000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "storage2": "1",
      "varName2": "a",
      "name": "Await Response Call Action"
    },
    {
      "message": "1",
      "varName": "a",
      "info": "2",
      "storage": "1",
      "varName2": "atext",
      "name": "Store Message Info"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "q1a",
      "changeType": "0",
      "value": "tempVars(\"atext\")",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "nun definiere \"B\"",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "storage": "0",
      "varName": "",
      "filter": "content.length > 0 && author.id === user.id",
      "max": "1",
      "time": "60000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "storage2": "1",
      "varName2": "b",
      "name": "Await Response Call Action"
    },
    {
      "message": "1",
      "varName": "b",
      "info": "2",
      "storage": "1",
      "varName2": "btext",
      "name": "Store Message Info"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "q1b",
      "changeType": "0",
      "value": "tempVars(\"btext\")",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "nun definiere \"C\"",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "storage": "0",
      "varName": "",
      "filter": "content.length > 0 && author.id === user.id",
      "max": "1",
      "time": "60000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "storage2": "1",
      "varName2": "c",
      "name": "Await Response Call Action"
    },
    {
      "message": "1",
      "varName": "c",
      "info": "2",
      "storage": "1",
      "varName2": "ctext",
      "name": "Store Message Info"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "q1c",
      "changeType": "0",
      "value": "tempVars(\"ctext\")",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "nun definiere \"D\"",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "storage": "0",
      "varName": "",
      "filter": "content.length > 0 && author.id === user.id",
      "max": "1",
      "time": "60000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "storage2": "1",
      "varName2": "d",
      "name": "Await Response Call Action"
    },
    {
      "message": "1",
      "varName": "d",
      "info": "2",
      "storage": "1",
      "varName2": "dtext",
      "name": "Store Message Info"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "q1d",
      "changeType": "0",
      "value": "tempVars(\"dtext\")",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Nun sende die richtige Antwort für Quiz nr. 1",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "storage": "0",
      "varName": "",
      "filter": "content.length > 0 && author.id === '421341759717638155'",
      "max": "1",
      "time": "60000",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "storage2": "1",
      "varName2": "ca",
      "name": "Await Response Call Action"
    },
    {
      "storage": "1",
      "varName": "ca",
      "comparison": "1",
      "value": "\"A\"",
      "iftrue": "2",
      "iftrueVal": "42",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "ca",
      "comparison": "1",
      "value": "\"B\"",
      "iftrue": "2",
      "iftrueVal": "42",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "ca",
      "comparison": "1",
      "value": "\"C\"",
      "iftrue": "2",
      "iftrueVal": "42",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "ca",
      "comparison": "1",
      "value": "\"D\"",
      "iftrue": "2",
      "iftrueVal": "42",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Bitte benutze nur **A, B, C oder D**",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "call": "22",
      "name": "Jump to Action"
    },
    {
      "message": "1",
      "varName": "ca",
      "info": "2",
      "storage": "1",
      "varName2": "catext",
      "name": "Store Message Info"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "q1ca",
      "changeType": "0",
      "value": "tempVars(\"catext\")",
      "name": "Control Server Data"
    },
    {
      "title": "${tempVars(\"long\")}",
      "author": "${tempVars(\"short\")}",
      "color": "",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
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
      "varName": "q1embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "q1embed",
      "message": "A = ${tempVars(\"a\")}\nB = ${tempVars(\"b\")}\nC = ${tempVars(\"c\")}\nD = ${tempVars(\"d\")}\nCorrect answer: ${tempVars(\"ca\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "q1embed",
      "channel": "0",
      "varName2": "",
      "storage3": "0",
      "varName3": "",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "preq1",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "q1short",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "short",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "q1long",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "long",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "q1a",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "a",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "q1b",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "b",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "q1c",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "c",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "q1d",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "d",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "q1ca",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "ca",
      "name": "Store Server Data"
    },
    {
      "title": "${tempVars(\"long\")}",
      "author": "${tempVars(\"short\")}",
      "color": "",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
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
      "varName": "preembed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "preembed",
      "message": "a: ${tempVars(\"a\")}\nb: ${tempVars(\"b\")}\nc: ${tempVars(\"c\")}\nd: ${tempVars(\"d\")}\nca: ${tempVars(\"ca\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "preembed",
      "channel": "0",
      "varName2": "",
      "storage3": "0",
      "varName3": "",
      "iffalse": "0",
      "iffalseVal": "",
      "messageContent": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    }
  ],
  "comType": "0",
  "customData": {
    "Command Info": {
      "category": "Ownership",
      "description": "Coming Soon!",
      "include": "Yes"
    }
  }
}
