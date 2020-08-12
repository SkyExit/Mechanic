{
  "name": "npm",
  "permissions": "NONE",
  "restriction": "4",
  "_id": "iXciQ",
  "actions": [
    {
      "behavior": "0",
      "interpretation": "1",
      "code": "const npmToInstall = msg.content.substring(this.getDBM().Files.data.settings.tag.length + 4)\nActions.storeValue(npmToInstall, 1, \"npm\", cache)",
      "storage": "0",
      "varName": "",
      "name": "Run Script"
    },
    {
      "storage": "1",
      "varName": "res",
      "messageToSend": "npm ${tempVars(\"npm\")}",
      "name": "Run Command in Console"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "${tempVars(\"res\")}",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    }
  ],
  "customData": {
    "Command Info": {
      "category": "Ownership",
      "description": "Install packages via npm",
      "include": "Yes"
    }
  }
}
