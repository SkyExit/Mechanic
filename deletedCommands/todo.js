{
  "name": "todo",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "lgwhQ",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "id",
      "name": "Store Member Info"
    },
    {
      "storage": "1",
      "stringifyOutput": "1",
      "varName": "json.SQL1",
      "hostname": "sql292.your-server.de",
      "port": "3306",
      "username": "laurin_1",
      "password": "kGUWdSpSNFC3rts8",
      "database": "laurin_db1",
      "query": "CREATE TABLE IF NOT EXISTS `${tempVars(\"id\")}` (\nUNIXTIME TEXT,\nTODO TEXT,\nIMPORTANCE TEXT\n);",
      "path": "",
      "otype": "0",
      "source_conn_storage": "0",
      "source_conn_varName": "",
      "store_source_conn_storage": "1",
      "store_source_conn_varName": "connection.SQL",
      "debugMode": "0",
      "name": "Run SQL Query"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "Language",
      "comparison": "0",
      "value": "2",
      "iftrue": "0",
      "iftrueVal": "2",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "Language",
      "defaultVal": "\"en\"",
      "storage": "1",
      "varName2": "lang",
      "name": "Store Server Data"
    },
    {
      "filename": "./languages/en.txt",
      "storage": "1",
      "varName2": "language.File",
      "name": "Read File"
    },
    {
      "count": "3",
      "name": "Skip Actions"
    },
    {
      "filename": "./resources/config.json",
      "storage": "1",
      "varName2": "config.File",
      "name": "Read File"
    },
    {
      "behavior": "0",
      "jsonObjectVarName": "config.File",
      "path": "$.default-language",
      "storage": "1",
      "varName": "lang",
      "name": "Parse From Stored Json"
    },
    {
      "filename": "./languages/en.txt",
      "storage": "1",
      "varName2": "language.File",
      "name": "Read File"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Loading: <a:wooow:720558054185238580>",
      "storage": "1",
      "varName2": "embed.Message",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "anchor_id": "EditDone",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "behavior": "0",
      "varStorage": "1",
      "jsonObjectVarName": "language.File",
      "path": "$.commands.todo.Text0",
      "storage": "1",
      "varName": "language.TitleMain",
      "name": "Parse From Stored Json"
    },
    {
      "behavior": "0",
      "jsonObjectVarName": "language.File",
      "path": "$.commands.todo.Text6",
      "storage": "1",
      "varName": "language.Creation1",
      "name": "Parse From Stored Json"
    },
    {
      "behavior": "0",
      "jsonObjectVarName": "language.File",
      "path": "$.commands.todo.Text7",
      "storage": "1",
      "varName": "language.Creation2",
      "name": "Parse From Stored Json"
    },
    {
      "behavior": "0",
      "jsonObjectVarName": "language.File",
      "path": "$.commands.todo.Text4",
      "storage": "1",
      "varName": "language.Creation3",
      "name": "Parse From Stored Json"
    },
    {
      "behavior": "0",
      "jsonObjectVarName": "language.File",
      "path": "$.commands.todo.Text1",
      "storage": "1",
      "varName": "language.ImportanceTop",
      "name": "Parse From Stored Json"
    },
    {
      "behavior": "0",
      "jsonObjectVarName": "language.File",
      "path": "$.commands.todo.Text2",
      "storage": "1",
      "varName": "language.ImportanceBot",
      "name": "Parse From Stored Json"
    },
    {
      "behavior": "0",
      "jsonObjectVarName": "language.File",
      "path": "$.commands.todo.Text3",
      "storage": "1",
      "varName": "language.CreationInstruct",
      "name": "Parse From Stored Json"
    },
    {
      "behavior": "0",
      "jsonObjectVarName": "language.File",
      "path": "$.commands.todo.Text8",
      "storage": "1",
      "varName": "language.DeletionInstruct",
      "name": "Parse From Stored Json"
    },
    {
      "title": "${tempVars(\"language.TitleMain\")}",
      "author": "",
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
      "varName": "embed.Main",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed.Main",
      "message": "${tempVars(\"language.Creation1\")} ✏️ ${tempVars(\"language.Creation2\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed.Main",
      "Edit0": "0",
      "Edit1": "0",
      "Edit2": "0",
      "Edit3": "0",
      "Edit4": "0",
      "Edit5": "0",
      "Edit6": "0",
      "Edit7": "0",
      "Edit8": "0",
      "Edit9": "1",
      "Edit10": "0",
      "Edit11": "0",
      "Edit12": "0",
      "title": "",
      "url": "",
      "description": "",
      "color": "",
      "imageUrl": "",
      "imageUrl2": "",
      "thumbUrl": "",
      "thumbUrl2": "",
      "author": "",
      "authorUrl": "",
      "authorIcon": "",
      "footer": "By RigidStudios#6315",
      "footerIcon": "",
      "timestamp": "",
      "fieldNum": "",
      "fieldName": "",
      "fieldDescription": "",
      "fieldInline": "0",
      "name": "Edit Embed Object MOD"
    },
    {
      "storage": "1",
      "stringifyOutput": "1",
      "varName": "json.SQL1",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "password",
      "database": "todolists",
      "query": "SELECT TODO FROM `${tempVars(\"id\")}`\nWHERE IMPORTANCE = 1",
      "path": "",
      "otype": "0",
      "source_conn_storage": "1",
      "source_conn_varName": "connection.SQL",
      "store_source_conn_storage": "0",
      "store_source_conn_varName": "",
      "debugMode": "0",
      "name": "Run SQL Query"
    },
    {
      "storage": "1",
      "varName": "embed.Main",
      "fieldName": "**${tempVars(\"language.ImportanceTop\")}**",
      "message": "${tempVars(\"json.SQL1\").replace(/},{\"TODO\":\"/g, ',\\n').replace(/\",\\n/g, ',\\n').replace('[{\"TODO\":\"', '').replace('\"}]', '').replace(\"[]\", '**Empty**').replace(/`/g, \"'\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "stringifyOutput": "1",
      "varName": "json.SQL2",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "password",
      "database": "todolists",
      "query": "SELECT TODO FROM `${tempVars(\"id\")}`\nWHERE IMPORTANCE = 0",
      "path": "",
      "otype": "0",
      "source_conn_storage": "1",
      "source_conn_varName": "connection.SQL",
      "store_source_conn_storage": "0",
      "store_source_conn_varName": "",
      "debugMode": "0",
      "name": "Run SQL Query"
    },
    {
      "text": "${tempVars(\"json.SQL1\")}",
      "text2": "},{\"TODO\":",
      "text3": "\\n",
      "info": "1",
      "storage": "1",
      "varName": "json.SQLEdited1",
      "name": "Replace Text"
    },
    {
      "storage": "1",
      "varName": "embed.Main",
      "fieldName": "${tempVars(\"language.ImportanceBot\")}",
      "message": "${tempVars(\"json.SQL2\").replace(/},{\"TODO\":\"/g, ',\\n').replace(/\",\\n/g, ',\\n').replace('[{\"TODO\":\"', '').replace('\"}]', '').replace(\"[]\", '**Empty**').replace(/`/g, \"'\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed.Message",
      "message": "",
      "storage2": "1",
      "varName2": "embed.Main",
      "name": "Edit Message"
    },
    {
      "storage": "1",
      "varName": "embed.Message",
      "emoji": "4",
      "varName2": "✏️",
      "varName3": "",
      "name": "Add Reaction"
    },
    {
      "storage": "1",
      "varName": "embed.Message",
      "filter": "reaction.emoji.name === '✏️' && user.id === `${msg.author.id}`",
      "max": "1",
      "time": "45000",
      "maxEmojis": "",
      "maxUsers": "",
      "iftrue": "3",
      "iftrueVal": "1",
      "iffalse": "0",
      "iffalseVal": "",
      "storage2": "0",
      "varName2": "",
      "name": "Await Reaction Call Action"
    },
    {
      "description": "",
      "jump_to_anchor": "TO",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "storage": "1",
      "varName": "embed.Message",
      "name": "Clear reactions from message"
    },
    {
      "title": "${tempVars(\"language.TitleMain\")}",
      "author": "",
      "color": "",
      "url": "",
      "authorIcon": "",
      "authorUrl": "",
      "imageUrl": "",
      "thumbUrl": "",
      "timestamp": "custom",
      "debug": "false",
      "text": "",
      "year": "",
      "month": "",
      "day": "",
      "hour": "",
      "minute": "",
      "second": "",
      "storage": "1",
      "varName": "embed.Editing",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed.Editing",
      "message": "${tempVars(\"language.CreationInstruct\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed.Message",
      "message": "",
      "storage2": "1",
      "varName2": "embed.Editing",
      "name": "Edit Message"
    },
    {
      "storage": "1",
      "varName": "embed.Message",
      "emoji": "4",
      "varName2": "✅",
      "varName3": "",
      "name": "Add Reaction"
    },
    {
      "storage": "1",
      "varName": "embed.Message",
      "emoji": "4",
      "varName2": "❎",
      "varName3": "",
      "name": "Add Reaction"
    },
    {
      "storage": "1",
      "varName": "embed.Message",
      "emoji": "4",
      "varName2": "📎",
      "varName3": "",
      "name": "Add Reaction"
    },
    {
      "storage": "1",
      "varName": "embed.Message",
      "filter": "user.id === `${msg.author.id}`",
      "max": "1",
      "time": "45000",
      "maxEmojis": "",
      "maxUsers": "",
      "iftrue": "3",
      "iftrueVal": "1",
      "iffalse": "0",
      "iffalseVal": "",
      "storage2": "1",
      "varName2": "reactions.List",
      "name": "Await Reaction Call Action"
    },
    {
      "description": "",
      "jump_to_anchor": "TO",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "list": "7",
      "varName": "reactions.List",
      "getType": "0",
      "position": "",
      "storage": "1",
      "varName2": "reactions.Object",
      "name": "Get Item from List"
    },
    {
      "reaction": "1",
      "varName": "reactions.Object",
      "info": "3",
      "storage": "1",
      "varName2": "emoji.Name",
      "name": "Store Reaction Info"
    },
    {
      "storage": "1",
      "varName": "emoji.Name",
      "comparison": "1",
      "value": "'📎'",
      "iftrue": "0",
      "iftrueVal": "2",
      "iffalse": "3",
      "iffalseVal": "12",
      "name": "Check Variable"
    },
    {
      "comment": "Remove An Entry from the To-Do",
      "color": "#000000",
      "name": "Comment"
    },
    {
      "storage": "1",
      "varName": "embed.Editing",
      "Edit0": "0",
      "Edit1": "0",
      "Edit2": "1",
      "Edit3": "0",
      "Edit4": "0",
      "Edit5": "0",
      "Edit6": "0",
      "Edit7": "0",
      "Edit8": "0",
      "Edit9": "0",
      "Edit10": "0",
      "Edit11": "0",
      "Edit12": "0",
      "title": "",
      "url": "",
      "description": "${tempVars(\"language.DeletionInstruct\")}",
      "color": "",
      "imageUrl": "",
      "imageUrl2": "",
      "thumbUrl": "",
      "thumbUrl2": "",
      "author": "",
      "authorUrl": "",
      "authorIcon": "",
      "footer": "",
      "footerIcon": "",
      "timestamp": "",
      "fieldNum": "",
      "fieldName": "",
      "fieldDescription": "",
      "fieldInline": "0",
      "name": "Edit Embed Object MOD"
    },
    {
      "storage": "1",
      "varName": "embed.Editing",
      "fieldName": "**${tempVars(\"language.ImportanceTop\")}**",
      "message": "${tempVars(\"json.SQL1\").replace(/},{\"TODO\":\"/g, ',\\n').replace(/\",\\n/g, ',\\n').replace('[{\"TODO\":\"', '').replace('\"}]', '').replace(\"[]\", '**Empty**').replace(/`/g, \"'\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed.Editing",
      "fieldName": "${tempVars(\"language.ImportanceBot\")}",
      "message": "${tempVars(\"json.SQL2\").replace(/},{\"TODO\":\"/g, ',\\n').replace(/\",\\n/g, ',\\n').replace('[{\"TODO\":\"', '').replace('\"}]', '').replace(\"[]\", '**Empty**').replace(/`/g, \"'\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed.Message",
      "message": "",
      "storage2": "1",
      "varName2": "embed.Editing",
      "name": "Edit Message"
    },
    {
      "storage": "1",
      "varName": "embed.Message",
      "name": "Clear reactions from message"
    },
    {
      "storage": "0",
      "varName": "",
      "filter": "content.length > 0 && author.id === user.id",
      "max": "1",
      "time": "180000",
      "iftrue": "3",
      "iftrueVal": "1",
      "iffalse": "0",
      "iffalseVal": "",
      "storage2": "1",
      "varName2": "msg.Replied",
      "name": "Await Response Call Action"
    },
    {
      "description": "",
      "jump_to_anchor": "TO",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "storage": "1",
      "varName": "msg.Replied",
      "name": "Delete Message"
    },
    {
      "storage": "1",
      "stringifyOutput": "1",
      "varName": "json.SQL1",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "password",
      "database": "todolists",
      "query": "DELETE FROM `${msg.author.id}` WHERE TODO = '${tempVars(\"msg.Replied\").content}'",
      "path": "",
      "otype": "0",
      "source_conn_storage": "1",
      "source_conn_varName": "connection.SQL",
      "store_source_conn_storage": "0",
      "store_source_conn_varName": "",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "description": "",
      "jump_to_anchor": "EditDone",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "emoji.Name",
      "comparison": "1",
      "value": "'❎'",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "changeType": "0",
      "value": "1",
      "storage": "1",
      "varName": "importance",
      "name": "Control Variable"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "changeType": "0",
      "value": "0",
      "storage": "1",
      "varName": "importance",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "embed.Editing",
      "Edit0": "0",
      "Edit1": "0",
      "Edit2": "1",
      "Edit3": "0",
      "Edit4": "0",
      "Edit5": "0",
      "Edit6": "0",
      "Edit7": "0",
      "Edit8": "0",
      "Edit9": "0",
      "Edit10": "0",
      "Edit11": "0",
      "Edit12": "0",
      "title": "",
      "url": "",
      "description": "${tempVars(\"language.Creation3\")}",
      "color": "",
      "imageUrl": "",
      "imageUrl2": "",
      "thumbUrl": "",
      "thumbUrl2": "",
      "author": "",
      "authorUrl": "",
      "authorIcon": "",
      "footer": "",
      "footerIcon": "",
      "timestamp": "",
      "fieldNum": "",
      "fieldName": "",
      "fieldDescription": "",
      "fieldInline": "0",
      "name": "Edit Embed Object MOD"
    },
    {
      "storage": "1",
      "varName": "embed.Message",
      "message": "",
      "storage2": "1",
      "varName2": "embed.Editing",
      "name": "Edit Message"
    },
    {
      "storage": "1",
      "varName": "embed.Message",
      "name": "Clear reactions from message"
    },
    {
      "storage": "0",
      "varName": "",
      "filter": "content.length > 0 && author.id === user.id",
      "max": "1",
      "time": "180000",
      "iftrue": "3",
      "iftrueVal": "1",
      "iffalse": "0",
      "iffalseVal": "",
      "storage2": "1",
      "varName2": "msg.Replied",
      "name": "Await Response Call Action"
    },
    {
      "description": "",
      "jump_to_anchor": "TO",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "storage": "1",
      "varName": "msg.Replied",
      "name": "Delete Message"
    },
    {
      "storage": "1",
      "stringifyOutput": "1",
      "varName": "json.SQL1",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "password",
      "database": "todolists",
      "query": "INSERT INTO `${tempVars(\"id\")}`(`UNIXTIME`, `TODO`, `IMPORTANCE`) VALUES ('${Date.now()}','${tempVars(\"msg.Replied\").content.replace(\"'\",\"`\")}','${tempVars(\"importance\")}')",
      "path": "",
      "otype": "0",
      "source_conn_storage": "1",
      "source_conn_varName": "connection.SQL",
      "store_source_conn_storage": "0",
      "store_source_conn_varName": "",
      "debugMode": "0",
      "name": "Run SQL Query"
    },
    {
      "description": "",
      "jump_to_anchor": "EditDone",
      "color": "#000000",
      "name": "Jump to Anchor"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "TO",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "storage": "1",
      "varName": "embed.Main",
      "Edit0": "0",
      "Edit1": "0",
      "Edit2": "2",
      "Edit3": "0",
      "Edit4": "0",
      "Edit5": "0",
      "Edit6": "0",
      "Edit7": "0",
      "Edit8": "0",
      "Edit9": "0",
      "Edit10": "0",
      "Edit11": "0",
      "Edit12": "0",
      "title": "",
      "url": "",
      "description": "",
      "color": "",
      "imageUrl": "",
      "imageUrl2": "",
      "thumbUrl": "",
      "thumbUrl2": "",
      "author": "",
      "authorUrl": "",
      "authorIcon": "",
      "footer": "",
      "footerIcon": "",
      "timestamp": "",
      "fieldNum": "",
      "fieldName": "",
      "fieldDescription": "",
      "fieldInline": "0",
      "name": "Edit Embed Object MOD"
    },
    {
      "storage": "1",
      "varName": "embed.Message",
      "message": "Timed out.",
      "storage2": "1",
      "varName2": "embed.Main",
      "name": "Edit Message"
    },
    {
      "storage": "1",
      "varName": "embed.Message",
      "name": "Clear reactions from message"
    }
  ],
  "comType": "0",
  "customData": {
    "Test Extension": {
      "input1": 0,
      "input2": 0
    },
    "Command Info": {
      "category": "Ownership",
      "description": "Coming Soon!",
      "include": "Yes"
    }
  }
}
