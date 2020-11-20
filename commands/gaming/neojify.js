{
  "name": "neojify",
  "permissions": "NONE",
  "restriction": "0",
  "_id": "GgWHs",
  "actions": [
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "words",
      "name": "Store Command Params"
    },
    {
      "code": "var words = tempVars(\"words\");\n\nif(!words) {words = \"emolets\"}\n\nlet word = \"\";\n\nfunction GetCharacter(input){  \n    if((\"=\").includes(input)){\n        return \":\" + (\"neon\") + input + \":\";\n    }else{  \n        switch (input) {\n            case \"0\":\n                return ':zero:'\n                break;\n            case \"1\":\n                return ':one:'\n                break;\n            case \"2\":\n                return ':two:'\n                break;\n            case \"3\":\n                return ':three:'\n                break;\n            case \"4\":\n                return ':four:'\n                break;\n            case \"5\":\n                return ':five:'\n                break;\n            case \"6\":\n                return ':six:'\n                break;\n            case \"7\":\n                return ':seven:'\n                break;\n            case \"8\":\n                return ':eight:'\n                break;\n            case \"9\":\n                return ':nine:'\n                break;\n            case \"!\":\n                return ':grey_exclamation:'\n                break;\n            case \"<\":\n                return ':arrow_backward:'\n                break;\n            case \">\":\n                return ':arrow_forward:'\n                break;\n            case \",\":\n                return ','\n                break;\n            case \" \":\n                return '  '\n                break;\n            case \".\":\n                return '.'\n                break;\n            case \"@\":\n                return '@'\n                break;\n            case \"?\":\n                return ':question:'\n                break;\n            case \"a\":\n                return '<a:name:714125035174101082>'\n                break;\n            case \"b\":\n                return '<a:name:714125067574968400>'\n                break;\n            case \"c\":\n                return '<a:name:714125091918577765>'\n                break;\n            case \"d\":\n                return '<a:name:714125118808522803>'\n                break;\n            case \"e\":\n                return '<a:name:714125143579820053>'\n                break;\n            case \"f\":\n                return '<a:name:714125206347710476>'\n                break;\n            case \"g\":\n                return '<a:name:714125221983944785>'\n                break;\n            case \"h\":\n                return '<a:name:714125254490062948>'\n                break;\n            case \"i\":\n                return '<a:name:714125271481057322>'\n                break;\n            case \"j\":\n                return '<a:name:714125297661771816>'\n                break;\n            case \"k\":\n                return '<a:name:714125318046220299>'\n                break;\n            case \"l\":\n                return '<a:name:714125357963542559>'\n                break;\n            case \"m\":\n                return '<a:name:714125398539239494>'\n                break;\n            case \"n\":\n                return '<a:name:714125416142602250>'\n                break;\n            case \"o\":\n                return '<a:name:714125430470344805>'\n                break;\n            case \"p\":\n                return '<a:name:714125451068702763>'\n                break;\n            case \"q\":\n                return '<a:name:714125477215993907>'\n                break;\n            case \"r\":\n                return '<a:name:714125500146253948>'\n                break;\n            case \"s\":\n                return '<a:name:714125523831488582>'\n                break;\n            case \"t\":\n                return '<a:name:714125551610363945>'\n                break;\n            case \"u\":\n                return '<a:name:714125573475008542>'\n                break;\n            case \"v\":\n                return '<a:name:714125590550282336>'\n                break;\n            case \"w\":\n                return '<a:name:714125610435477554>'\n                break;\n            case \"x\":\n                return '<a:name:714125628844015647>'\n                break;\n            case \"y\":\n                return '<a:name:714125646351302658>'\n                break;\n            case \"z\":\n                return '<a:name:714125686129950741>'\n                break;\n            default:\n                return ' ' \n                break;\n        }\n    }\t\n}\n\nwords.toLowerCase().split('').forEach(function(char){ word += char ? GetCharacter(char) : \" \"})\n\nif(word && word.length < 1999){\n    msg.channel.send(word)\n}else{\n    msg.channel.send('That message is to long! After the conversion you had ' + (word ? word.length : \"n/a\") +'/1999 characters')\n}",
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
