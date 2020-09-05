{
    "name": "gitinfo",
    "permissions": "NONE",
    "restriction": "1",
    "_id": "Xrhat",
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
        "url": "https://api.github.com/users/${tempVars(\"username\")}",
        "path": "",
        "storage": "1",
        "varName": "userInfoJson",
        "debugMode": "0",
        "headers": "",
        "name": "Store Json From WebAPI"
      },
      {
        "behavior": "0",
        "varStorage": "1",
        "jsonObjectVarName": "userInfoJson",
        "path": "name",
        "storage": "1",
        "varName": "name",
        "name": "Parse From Stored Json"
      },
      {
        "behavior": "0",
        "varStorage": "1",
        "jsonObjectVarName": "userInfoJson",
        "path": "avatar_url",
        "storage": "1",
        "varName": "avatar_url",
        "name": "Parse From Stored Json"
      },
      {
        "behavior": "0",
        "varStorage": "1",
        "jsonObjectVarName": "userInfoJson",
        "path": "html_url",
        "storage": "1",
        "varName": "html_url",
        "name": "Parse From Stored Json"
      },
      {
        "behavior": "0",
        "varStorage": "1",
        "jsonObjectVarName": "userInfoJson",
        "path": "location",
        "storage": "1",
        "varName": "location",
        "name": "Parse From Stored Json"
      },
      {
        "behavior": "0",
        "varStorage": "1",
        "jsonObjectVarName": "userInfoJson",
        "path": "public_repos",
        "storage": "1",
        "varName": "public_repos",
        "name": "Parse From Stored Json"
      },
      {
        "title": "${tempVars(\"username\")}'s GitHub",
        "author": "",
        "color": "",
        "timestamp": "false",
        "url": "${tempVars(\"html_url\")}",
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
        "fieldName": "Location",
        "message": "${tempVars(\"location\")}",
        "inline": "0",
        "name": "Add Embed Field"
      },
      {
        "storage": "1",
        "varName": "embed",
        "fieldName": "Repos",
        "message": "${tempVars(\"public_repos\")}",
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
      }
    ]
  }