{
  "name": "tts",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "IOjjy",
  "actions": [
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "compara",
      "name": "Store Command Params"
    },
    {
      "text": "${tempVars(\"compara\")}",
      "storage": "1",
      "varName": "fileURL",
      "name": "Text To Speech"
    },
    {
      "url": "${tempVars(\"fileURL\")}",
      "fileName": "tts",
      "fileFormat": "mp3",
      "filePath": "./downloads/",
      "name": "Download File"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "0",
      "varName": "",
      "file": "/downloads/tts.mp3",
      "message": "",
      "name": "Send File"
    }
  ],
  "customData": {
    "Command Info": {
      "category": "Gaming",
      "description": "Send text as a voice message!",
      "include": "Yes"
    }
  }
}
