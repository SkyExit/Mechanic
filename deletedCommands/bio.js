{
  "name": "bio",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "mzCEr",
  "actions": [
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "compara",
      "name": "Store Command Params"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.discord.username",
      "storage": "1",
      "varName": "nameDiscord",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.details.slug",
      "storage": "1",
      "varName": "nameSlug",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.details.user_id",
      "storage": "1",
      "varName": "user_id",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.details.verified",
      "storage": "1",
      "varName": "verified",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.details.description",
      "storage": "1",
      "varName": "description",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.details.location",
      "storage": "1",
      "varName": "location",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.details.birthday",
      "storage": "1",
      "varName": "birthday",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.details.email",
      "storage": "1",
      "varName": "email",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.details.occupation",
      "storage": "1",
      "varName": "occupation",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.details.premium",
      "storage": "1",
      "varName": "premium",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.details.likes",
      "storage": "1",
      "varName": "likes",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.discord.avatar",
      "storage": "1",
      "varName": "avatar",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "comment": "connections",
      "color": "#000000",
      "name": "Comment"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[0].connection_type",
      "storage": "1",
      "varName": "connectionType0",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[0].name",
      "storage": "1",
      "varName": "connectionName0",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[0].url",
      "storage": "1",
      "varName": "connectionUrl0",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[1].connection_type",
      "storage": "1",
      "varName": "connectionType1",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[1].name",
      "storage": "1",
      "varName": "connectionName1",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[1].url",
      "storage": "1",
      "varName": "connectionUrl1",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[2].connection_type",
      "storage": "1",
      "varName": "connectionType2",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[2].name",
      "storage": "1",
      "varName": "connectionName2",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[2].url",
      "storage": "1",
      "varName": "connectionUrl2",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[3].connection_type",
      "storage": "1",
      "varName": "connectionType3",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[3].name",
      "storage": "1",
      "varName": "connectionName3",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[3].url",
      "storage": "1",
      "varName": "connectionUrl3",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[4].connection_type",
      "storage": "1",
      "varName": "connectionType4",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[4].name",
      "storage": "1",
      "varName": "connectionName4",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[4].url",
      "storage": "1",
      "varName": "connectionUrl4",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[5].connection_type",
      "storage": "1",
      "varName": "connectionType5",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[5].name",
      "storage": "1",
      "varName": "connectionName5",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[5].url",
      "storage": "1",
      "varName": "connectionUrl5",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[6].connection_type",
      "storage": "1",
      "varName": "connectionType6",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[6].name",
      "storage": "1",
      "varName": "connectionName6",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[6].url",
      "storage": "1",
      "varName": "connectionUrl6",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[7].connection_type",
      "storage": "1",
      "varName": "connectionType7",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[7].name",
      "storage": "1",
      "varName": "connectionName7",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[7].url",
      "storage": "1",
      "varName": "connectionUrl7",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[8].connection_type",
      "storage": "1",
      "varName": "connectionType8",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[8].name",
      "storage": "1",
      "varName": "connectionName8",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[8].url",
      "storage": "1",
      "varName": "connectionUrl8",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[9].connection_type",
      "storage": "1",
      "varName": "connectionType9",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[9].name",
      "storage": "1",
      "varName": "connectionName9",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[9].url",
      "storage": "1",
      "varName": "connectionUrl9",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[10].connection_type",
      "storage": "1",
      "varName": "connectionType10",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[10].name",
      "storage": "1",
      "varName": "connectionName10",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.discordConnections[10].url",
      "storage": "1",
      "varName": "connectionUrl10",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "comment": "otherConnections",
      "color": "#000000",
      "name": "Comment"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.userConnections.instagram",
      "storage": "1",
      "varName": "insta",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.userConnections.snapchat",
      "storage": "1",
      "varName": "snapchat",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.userConnections.website",
      "storage": "1",
      "varName": "website",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://api.discord.bio/v1/user/details/${tempVars(\"compara\")}",
      "path": "payload.user.userConnections.linkedin",
      "storage": "1",
      "varName": "linkedin",
      "debugMode": "0",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "comment": "message",
      "color": "#000000",
      "name": "Comment"
    },
    {
      "title": "Discord.bio",
      "author": "${tempVars(\"compara\")}",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "https://cdn.discordapp.com/avatars/${tempVars(\"user_id\")}/${tempVars(\"avatar\")}?size=2048",
      "imageUrl": "",
      "thumbUrl": "https://cdn.discordapp.com/avatars/${tempVars(\"user_id\")}/${tempVars(\"avatar\")}?size=2048",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "About",
      "message": "${tempVars(\"description\")}",
      "inline": "0",
      "name": "Add Embed Field"
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
      "fieldName": "Birthday",
      "message": "${tempVars(\"birthday\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Email",
      "message": "${tempVars(\"email\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Occupation",
      "message": "${tempVars(\"occupation\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Connections",
      "message": "${tempVars(\"connectionType0\")}: [${tempVars(\"connectionName0\")}](${tempVars(\"connectionUrl0\")})\n${tempVars(\"connectionType1\")}: [${tempVars(\"connectionName1\")}](${tempVars(\"connectionUrl1\")})\n${tempVars(\"connectionType2\")}: [${tempVars(\"connectionName2\")}](${tempVars(\"connectionUrl2\")})\n${tempVars(\"connectionType3\")}: [${tempVars(\"connectionName3\")}](${tempVars(\"connectionUrl3\")})\n${tempVars(\"connectionType4\")}: [${tempVars(\"connectionName4\")}](${tempVars(\"connectionUrl4\")})\n${tempVars(\"connectionType5\")}: [${tempVars(\"connectionName5\")}](${tempVars(\"connectionUrl5\")})\n${tempVars(\"connectionType6\")}: [${tempVars(\"connectionName6\")}](${tempVars(\"connectionUrl6\")})\n${tempVars(\"connectionType7\")}: [${tempVars(\"connectionName7\")}](${tempVars(\"connectionUrl7\")})\n${tempVars(\"connectionType8\")}: [${tempVars(\"connectionName8\")}](${tempVars(\"connectionUrl8\")})\n${tempVars(\"connectionType9\")}: [${tempVars(\"connectionName9\")}](${tempVars(\"connectionUrl9\")})\n${tempVars(\"connectionType10\")}: [${tempVars(\"connectionName10\")}](${tempVars(\"connectionUrl10\")})",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Other Connections",
      "message": "Insta: [${tempVars(\"insta\")}](https://www.instagram.com/${tempVars(\"insta\")})\nSnapchat: [${tempVars(\"snapchat\")}](https://www.snapchat.com/add/${tempVars(\"snapchat\")})\nWebsite: [WEBSITE](${tempVars(\"website\")})\nLinkedin: [${tempVars(\"linkedin\")}]() - Coming Soon",
      "inline": "1",
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
    },
    {
      "name": "End Action Sequence"
    },
    {
      "anchor_id": "nf",
      "color": "#000000",
      "description": "",
      "name": "Create Anchor"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "user **${tempVars(\"compara\")}** not found!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    }
  ],
  "customData": {
    "Command Info": {
      "category": "Ownership",
      "description": "Coming Soon!",
      "include": "Yes"
    }
  }
}