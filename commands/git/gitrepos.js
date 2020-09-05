{
    "name": "gitrepos",
    "permissions": "NONE",
    "restriction": "1",
    "_id": "rISta",
    "actions": [
      {
        "info": "0",
        "infoIndex": "1",
        "storage": "1",
        "varName": "username",
        "name": "Store Command Params"
      },
      {
        "token": "",
        "user": "",
        "pass": "",
        "url": "https://api.github.com/users/${tempVars(\"username\")}/repos",
        "path": "",
        "storage": "1",
        "varName": "reposJson",
        "debugMode": "0",
        "headers": "",
        "name": "Store Json From WebAPI"
      },
      {
        "token": "",
        "user": "",
        "pass": "",
        "url": "https://api.github.com/users/${tempVars(\"username\")}",
        "path": "public_repos",
        "storage": "1",
        "varName": "reposCount",
        "debugMode": "0",
        "headers": "",
        "name": "Store Json From WebAPI"
      },
      {
        "token": "",
        "user": "",
        "pass": "",
        "url": "https://api.github.com/users/${tempVars(\"username\")}",
        "path": "avatar_url",
        "storage": "1",
        "varName": "avatar_url",
        "debugMode": "0",
        "headers": "",
        "name": "Store Json From WebAPI"
      },
      {
        "token": "",
        "user": "",
        "pass": "",
        "url": "https://api.github.com/users/${tempVars(\"username\")}",
        "path": "name",
        "storage": "1",
        "varName": "nameUs",
        "debugMode": "0",
        "headers": "",
        "name": "Store Json From WebAPI"
      },
      {
        "token": "",
        "user": "",
        "pass": "",
        "url": "https://api.github.com/users/${tempVars(\"username\")}",
        "path": "html_url",
        "storage": "1",
        "varName": "html_urlUs",
        "debugMode": "0",
        "headers": "",
        "name": "Store Json From WebAPI"
      },
      {
        "FirstNumber": "0",
        "info": "1",
        "SecondNumber": "1",
        "storage": "1",
        "varName": "number",
        "name": "Basic Math Operation"
      },
      {
        "FirstNumber": "${tempVars(\"reposCount\")}",
        "info": "1",
        "SecondNumber": "1",
        "storage": "1",
        "varName": "repoC",
        "name": "Basic Math Operation"
      },
      {
        "title": "${tempVars(\"nameUs\")}'s GitHub",
        "author": "",
        "color": "",
        "timestamp": "false",
        "url": "${tempVars(\"html_urlUs\")}",
        "authorIcon": "",
        "imageUrl": "",
        "thumbUrl": "${tempVars(\"avatar_url\")}",
        "storage": "1",
        "varName": "embed",
        "name": "Create Embed Message"
      },
      {
        "storage": "1",
        "varName": "embed",
        "message": "------------------------------",
        "name": "Set Embed Description"
      },
      {
        "anchor_id": "begin",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
      },
      {
        "behavior": "0",
        "interpretation": "1",
        "code": "tempVars(\"number\") + 1",
        "storage": "1",
        "varName": "number",
        "name": "Run Script"
      },
      {
        "comment": "---satrt-for",
        "color": "#ffff00",
        "name": "Comment"
      },
      {
        "behavior": "0",
        "varStorage": "1",
        "jsonObjectVarName": "reposJson",
        "path": "${tempVars(\"number\")}.name",
        "storage": "1",
        "varName": "name",
        "name": "Parse From Stored Json"
      },
      {
        "behavior": "0",
        "varStorage": "1",
        "jsonObjectVarName": "reposJson",
        "path": "${tempVars(\"number\")}.html_url",
        "storage": "1",
        "varName": "html_url",
        "name": "Parse From Stored Json"
      },
      {
        "behavior": "0",
        "varStorage": "1",
        "jsonObjectVarName": "reposJson",
        "path": "${tempVars(\"number\")}.description",
        "storage": "1",
        "varName": "description",
        "name": "Parse From Stored Json"
      },
      {
        "behavior": "0",
        "varStorage": "1",
        "jsonObjectVarName": "reposJson",
        "path": "${tempVars(\"number\")}.language",
        "storage": "1",
        "varName": "language",
        "name": "Parse From Stored Json"
      },
      {
        "token": "",
        "user": "",
        "pass": "",
        "url": "https://api.github.com/repos/${tempVars(\"username\")}/${tempVars(\"name\")}/languages",
        "path": "${tempVars(\"language\")}",
        "storage": "1",
        "varName": "lanKB",
        "debugMode": "0",
        "headers": "",
        "reUse": "0",
        "name": "Store Json From WebAPI"
      },
      {
        "code": "parseInt(tempVars(\"lanKB\")).toLocaleString('en')",
        "behavior": "0",
        "interpretation": "1",
        "storage": "1",
        "varName": "newKB",
        "VTypeSelect": "1",
        "CVTypeValue": "",
        "name": "Run Script"
      },
      {
        "storage": "1",
        "varName": "embed",
        "fieldName": "${tempVars(\"name\")}",
        "message": "[Link to Repo](${tempVars(\"html_url\")})\n**Description:** ${tempVars(\"description\")}\nLanguage: **${tempVars(\"language\")}**\nLangPoints: ${tempVars(\"newKB\")}\n------------------------------",
        "inline": "1",
        "name": "Add Embed Field"
      },
      {
        "comment": "---end-for",
        "color": "#ffff00",
        "name": "Comment"
      },
      {
        "storage": "1",
        "varName": "number",
        "comparison": "14",
        "value": "20",
        "iftrue": "4",
        "iftrueVal": "send",
        "iffalse": "0",
        "iffalseVal": "",
        "name": "Check Variable"
      },
      {
        "storage": "1",
        "varName": "repoC",
        "comparison": "1",
        "value": "${tempVars(\"number\")}",
        "iftrue": "0",
        "iftrueVal": "",
        "iffalse": "4",
        "iffalseVal": "begin",
        "name": "Check Variable"
      },
      {
        "anchor_id": "send",
        "color": "#000000",
        "description": "",
        "name": "Create Anchor"
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