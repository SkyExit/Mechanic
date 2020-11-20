{
  "name": "bigify",
  "permissions": "NONE",
  "restriction": "0",
  "_id": "vUytX",
  "actions": [
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "words",
      "name": "Store Command Params"
    },
    {
      "code": "var words = tempVars(\"words\");\n\nif(!words) {words = \"emolets\"}\n\nlet word = \"\";\n\nfunction GetCharacter(input){  \n    if((\"=\").includes(input)){\n        return \":\" + (\"neon\") + input + \":\";\n    }else{  \n        switch (input) {\n            case \"0\":\n                return `\n╭━━━╮\n┃╭━╮┃\n┃┃┃┃┃\n┃┃┃┃┃\n┃╰━╯┃\n╰━━━╯`\n                break;\n            case \"1\":\n                return `\n╱╭╮\n╭╯┃\n╰╮┃\n╱┃┃\n╭╯╰╮\n╰━━╯`\n                break;\n            case \"2\":\n                return `\n╭━━━╮\n┃╭━╮┃\n╰╯╭╯┃\n╭━╯╭╯\n┃┃╰━╮\n╰━━━╯`\n                break;\n            case \"3\":\n                return `\n╭━━━╮\n┃╭━╮┃\n╰╯╭╯┃\n╭╮╰╮┃\n┃╰━╯┃\n╰━━━╯`\n                break;\n            case \"4\":\n                return `\n╭╮╱╭╮\n┃┃╱┃┃\n┃╰━╯┃\n╰━━╮┃\n╱╱╱┃┃\n╱╱╱╰╯`\n                break;\n            case \"5\":\n                return `\n╭━━━╮\n┃╭━━╯\n┃╰━━╮\n╰━━╮┃\n╭━━╯┃\n╰━━━╯`\n                break;\n            case \"6\":\n                return `\n╭━━━╮\n┃╭━━╯\n┃╰━━╮\n┃╭━╮┃\n┃╰━╯┃\n╰━━━╯`\n                break;\n            case \"7\":\n                return `\n╭━━━╮\n┃╭━╮┃\n╰╯╭╯┃\n╱╱┃╭╯\n╱╱┃┃\n╱╱╰╯`\n                break;\n            case \"8\":\n                return `\n╭━━━╮\n┃╭━╮┃\n┃╰━╯┃\n┃╭━╮┃\n┃╰━╯┃\n╰━━━╯`\n                break;\n            case \"9\":\n                return `\n╭━━━╮\n┃╭━╮┃\n┃╰━╯┃\n╰━━╮┃\n╭━━╯┃\n╰━━━╯`\n                break;\n            case \"!\":\n                return `\n╭╮\n┃┃\n┃┃\n╰╯\n╭╮\n╰╯`\n                break;\n            case \"<\":\n                return ':arrow_backward:'\n                break;\n            case \">\":\n                return ':arrow_forward:'\n                break;\n            case \",\":\n                return `\n╭╮\n╰┫\n╱╯`\n                break;\n            case \" \":\n                return `\\n \\n \\n`\n                break;\n            case \".\":\n                return `\n╭╮\n╰╯`\n                break;\n            case \"@\":\n                return '@'\n                break;\n            case \"?\":\n                return `\n╭━━━╮\n┃╭━╮┃\n╰╯╭╯┃\n╱╱┃╭╯\n╱╱╭╮\n╱╱╰╯`\n                break;\n            case \"a\":\n                return `\n╭━━━╮\n┃╭━╮┃\n┃┃╱┃┃\n┃╰━╯┃\n┃╭━╮┃\n╰╯╱╰╯`\n                break;\n            case \"b\":\n                return `\n╭━━╮\n┃╭╮┃\n┃╰╯╰╮\n┃╭━╮┃\n┃╰━╯┃\n╰━━━╯`\n                break;\n            case \"c\":\n                return `\n╭━━━╮\n┃╭━╮┃\n┃┃╱╰╯\n┃┃╱╭╮\n┃╰━╯┃\n╰━━━╯`\n                break;\n            case \"d\":\n                return `\n╭━━━╮\n╰╮╭╮┃\n╱┃┃┃┃\n╱┃┃┃┃\n╭╯╰╯┃\n╰━━━╯`\n                break;\n            case \"e\":\n                return `\n╭━━━╮\n┃╭━━╯\n┃╰━━╮\n┃╭━━╯\n┃╰━━╮\n╰━━━╯`\n                break;\n            case \"f\":\n                return `\n╭━━━╮\n┃╭━━╯\n┃╰━━╮\n┃╭━━╯\n┃┃\n╰╯`\n                break;\n            case \"g\":\n                return `\n╭━━━╮\n┃╭━╮┃\n┃┃╱╰╯\n┃┃╭━╮\n┃╰┻━┃\n╰━━━╯`\n                break;\n            case \"h\":\n                return `\n╭╮╱╭╮\n┃┃╱┃┃\n┃╰━╯┃\n┃╭━╮┃\n┃┃╱┃┃\n╰╯╱╰╯`\n                break;\n            case \"i\":\n                return `\n╭━━╮\n╰┫┣╯\n╱┃┃\n╱┃┃\n╭┫┣╮\n╰━━╯`\n                break;\n            case \"j\":\n                return `\n╱╱╭╮\n╱╱┃┃\n╱╱┃┃\n╭╮┃┃\n┃╰╯┃\n╰━━╯`\n                break;\n            case \"k\":\n                return `\n╭╮╭━╮\n┃┃┃╭╯\n┃╰╯╯\n┃╭╮┃\n┃┃┃╰╮\n╰╯╰━╯`\n                break;\n            case \"l\":\n                return `\n╭╮\n┃┃\n┃┃\n┃┃╱╭╮\n┃╰━╯┃\n╰━━━╯`\n                break;\n            case \"m\":\n                return `\n╭━╮╭━╮\n┃┃╰╯┃┃\n┃╭╮╭╮┃\n┃┃┃┃┃┃\n┃┃┃┃┃┃\n╰╯╰╯╰╯`\n                break;\n            case \"n\":\n                return `\n╭━╮╱╭╮\n┃┃╰╮┃┃\n┃╭╮╰╯┃\n┃┃╰╮┃┃\n┃┃╱┃┃┃\n╰╯╱╰━╯`\n                break;\n            case \"o\":\n                return `\n╭━━━╮\n┃╭━╮┃\n┃┃╱┃┃\n┃┃╱┃┃\n┃╰━╯┃\n╰━━━╯`\n                break;\n            case \"p\":\n                return `\n╭━━━╮\n┃╭━╮┃\n┃╰━╯┃\n┃╭━━╯\n┃┃\n╰╯`\n                break;\n            case \"q\":\n                return `\n╭━━━╮\n┃╭━╮┃\n┃┃╱┃┃\n┃┃╱┃┃\n┃╰━╯┃\n╰━━╮┃\n╱╱╱╰╯`\n                break;\n            case \"r\":\n                return `\n╭━━━╮\n┃╭━╮┃\n┃╰━╯┃\n┃╭╮╭╯\n┃┃┃╰╮\n╰╯╰━╯`\n                break;\n            case \"s\":\n                return `\n╭━━━╮\n┃╭━╮┃\n┃╰━━╮\n╰━━╮┃\n┃╰━╯┃\n╰━━━╯`\n                break;\n            case \"t\":\n                return `\n╭━━━━╮\n┃╭╮╭╮┃\n╰╯┃┃╰╯\n╱╱┃┃\n╱╱┃┃\n╱╱╰╯`\n                break;\n            case \"u\":\n                return `\n╭╮╱╭╮\n┃┃╱┃┃\n┃┃╱┃┃\n┃┃╱┃┃\n┃╰━╯┃\n╰━━━╯`\n                break;\n            case \"v\":\n                return `\n╭╮╱╱╭╮\n┃╰╮╭╯┃\n╰╮┃┃╭╯\n╱┃╰╯┃\n╱╰╮╭╯\n╱╱╰╯`\n                break;\n            case \"w\":\n                return `\n╭╮╭╮╭╮\n┃┃┃┃┃┃\n┃┃┃┃┃┃\n┃╰╯╰╯┃\n╰╮╭╮╭╯\n╱╰╯╰╯`\n                break;\n            case \"x\":\n                return `\n╭━╮╭━╮\n╰╮╰╯╭╯\n╱╰╮╭╯\n╱╭╯╰╮\n╭╯╭╮╰╮\n╰━╯╰━╯`\n                break;\n            case \"y\":\n                return `\n╭╮╱╱╭╮\n┃╰╮╭╯┃\n╰╮╰╯╭╯\n╱╰╮╭╯\n╱╱┃┃\n╱╱╰╯`\n                break;\n            case \"z\":\n                return `\n╭━━━━╮\n╰━━╮━┃\n╱╱╭╯╭╯\n╱╭╯╭╯\n╭╯━╰━╮\n╰━━━━╯`\n                break;\n            default:\n                return ' ' \n                break;\n        }\n    }\t\n}\n\nwords.toLowerCase().split('').forEach(function(char){ word += char ? GetCharacter(char) : \" \"})\n\nif(word && word.length < 1999){\n    msg.channel.send(word)\n}else{\n    msg.channel.send('That message is to long! After the conversion you had ' + (word ? word.length : \"n/a\") +'/1999 characters')\n}",
      "behavior": "0",
      "interpretation": "0",
      "storage": "0",
      "varName": "",
      "VTypeSelect": "0",
      "CVTypeValue": "",
      "name": "Run Script"
    }
  ],
  "comType": "0",
  "customData": {
    "Command Info": {
      "category": "Gaming",
      "description": "Send a message with animated emojis!",
      "include": "Yes"
    }
  }
}
