{
    "name": "lb",
    "permissions": "NONE",
    "restriction": "1",
    "_id": "gcpnW",
    "actions": [
      {
        "info": "0",
        "infoIndex": "1",
        "storage": "1",
        "varName": "parameter",
        "name": "Store Command Params"
      },
      {
        "code": "server.members.fetch();",
        "behavior": "0",
        "interpretation": "0",
        "storage": "0",
        "varName": "",
        "VTypeSelect": "0",
        "CVTypeValue": "",
        "name": "Run Script"
      },
      {
        "storage": "1",
        "varName": "parameter",
        "comparison": "1",
        "value": "\"cash\"",
        "iftrue": "4",
        "iftrueVal": "cash",
        "iffalse": "0",
        "iffalseVal": "",
        "name": "Check Variable"
      },
      {
        "storage": "1",
        "varName": "parameter",
        "comparison": "1",
        "value": "\"bank\"",
        "iftrue": "4",
        "iftrueVal": "bank",
        "iffalse": "0",
        "iffalseVal": "",
        "name": "Check Variable"
      },
      {
        "storage": "1",
        "varName": "parameter",
        "comparison": "1",
        "value": "\"gold\"",
        "iftrue": "4",
        "iftrueVal": "gold",
        "iffalse": "0",
        "iffalseVal": "",
        "name": "Check Variable"
      },
      {
        "storage": "1",
        "varName": "parameter",
        "comparison": "1",
        "value": "\"level\"",
        "iftrue": "4",
        "iftrueVal": "level",
        "iffalse": "0",
        "iffalseVal": "",
        "name": "Check Variable"
      },
      {
        "channel": "0",
        "varName": "",
        "message": "**&lb cash**\n**&lb bank**\n**&lb gold**\n**&lb level**",
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
        "anchor_id": "cash",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
      },
      {
        "debu": "1",
        "numbefst2": ")",
        "numbefstselect": "2",
        "sort": "1",
        "start": "username",
        "middle": "-",
        "end": "result",
        "getresults": "10",
        "dataName": "cash",
        "varName2": "cashlb",
        "storage": "1",
        "name": "Store Member Data List"
      },
      {
        "title": "Cash Leaderbord",
        "author": "",
        "color": "",
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
        "message": "${tempVars(\"cashlb\")}",
        "name": "Set Embed Description"
      },
      {
        "storage": "1",
        "varName": "embed",
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
        "anchor_id": "bank",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
      },
      {
        "debu": "1",
        "numbefst2": ")",
        "numbefstselect": "2",
        "sort": "1",
        "start": "username",
        "middle": "-",
        "end": "result",
        "getresults": "10",
        "dataName": "bank",
        "varName2": "cashlb",
        "storage": "1",
        "name": "Store Member Data List"
      },
      {
        "title": "Bank Leaderbord",
        "author": "",
        "color": "",
        "url": "",
        "authorIcon": "",
        "authorUrl": "",
        "imageUrl": "",
        "thumbUrl": "",
        "timestamp": "true",
        "debug": "false",
        "text": "",
        "year": "",
        "month": "",
        "day": "",
        "hour": "",
        "minute": "",
        "second": "",
        "storage": "1",
        "varName": "embed",
        "name": "Create Embed Message"
      },
      {
        "storage": "1",
        "varName": "embed",
        "message": "${tempVars(\"cashlb\")}",
        "name": "Set Embed Description"
      },
      {
        "storage": "1",
        "varName": "embed",
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
        "anchor_id": "gold",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
      },
      {
        "debu": "1",
        "numbefst2": ")",
        "numbefstselect": "2",
        "sort": "1",
        "start": "username",
        "middle": "-",
        "end": "result",
        "getresults": "10",
        "dataName": "gold",
        "varName2": "cashlb",
        "storage": "1",
        "name": "Store Member Data List"
      },
      {
        "title": "Gold Leaderbord",
        "author": "",
        "color": "",
        "url": "",
        "authorIcon": "",
        "authorUrl": "",
        "imageUrl": "",
        "thumbUrl": "",
        "timestamp": "true",
        "debug": "false",
        "text": "",
        "year": "",
        "month": "",
        "day": "",
        "hour": "",
        "minute": "",
        "second": "",
        "storage": "1",
        "varName": "embed",
        "name": "Create Embed Message"
      },
      {
        "storage": "1",
        "varName": "embed",
        "message": "${tempVars(\"cashlb\")}",
        "name": "Set Embed Description"
      },
      {
        "storage": "1",
        "varName": "embed",
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
        "anchor_id": "level",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
      },
      {
        "debu": "1",
        "numbefst2": ")",
        "numbefstselect": "2",
        "sort": "1",
        "start": "username",
        "middle": "-",
        "end": "result",
        "getresults": "10",
        "dataName": "level",
        "varName2": "cashlb",
        "storage": "1",
        "name": "Store Member Data List"
      },
      {
        "title": "Level Leaderbord",
        "author": "",
        "color": "",
        "url": "",
        "authorIcon": "",
        "authorUrl": "",
        "imageUrl": "",
        "thumbUrl": "",
        "timestamp": "true",
        "debug": "false",
        "text": "",
        "year": "",
        "month": "",
        "day": "",
        "hour": "",
        "minute": "",
        "second": "",
        "storage": "1",
        "varName": "embed",
        "name": "Create Embed Message"
      },
      {
        "storage": "1",
        "varName": "embed",
        "message": "${tempVars(\"cashlb\")}",
        "name": "Set Embed Description"
      },
      {
        "storage": "1",
        "varName": "embed",
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
        "category": "Economy",
        "description": "Get your rank at the leaderboard!",
        "include": "Yes"
      }
    }
  }