const config = {
  "token":  "ODg3Mzk3NTQzNjg2ODUyNjQ5.YUDjXQ.X5GIOIy8i-y3oXfuFXt8jMksF_E",
  "prefix": "!",
  "admins": [720998216690303006],
  "dbUrl": "mongodb+srv://anautonell:torremirona21@cluster0.25onq.mongodb.net/Cluster0?retryWrites=true&w=majority",
  "patreons": [],
  "supporters": [],

  "dashboard" : {
    "oauthSecret": "lnWtKZw2cuNU_2ADwrP-yiP8ctWOoULw",
    "callbackURL": "http://dashy.anautonell.repl.co/callback", // add this to callback urls in your application's OAuth tab
    "sessionSecret": "ohmulol12445$@%#%#fcdshfuiwedfkh",
    "domain": "dashy.anautonell.repl.co",
    "port": 80
  },

  /* Channels */
  "appealEmbedChannel": "874021179051110457",
  "banListLogChannel": "874021179051110457",
  "reportRejectedEmbedChannel": "874021179051110457",
  "reportApprovedEmbedChannel": "874021179051110457",
  "newReportEmbed": "874021179051110457",
  "guildLogChannel": "874021179051110457",
  "commandLogChannel": "874021179051110457",
  "errorChannel": "874021179051110457",

  permLevels: [
    { level: 0,
      name: "User",
      check: () => true
    },

    { level: 2,
      name: "Moderator",
      check: (message) => {
        try {
          if (message.member.hasPermission("MANAGE_MESSAGES") || message.member.hasPermission("MANAGE_GUILD") ||  message.member.roles.get(message.guild.settings.modRole) !== undefined) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      }
    },

    { level: 3,
      name: "Administrator",
      check: (message) => {
        try {
          if (message.member.hasPermission("ADMINISTRATOR") ||  message.member.roles.get(message.guild.settings.adminRole) !== undefined) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      }
    },

    { level: 4,
      name: "Server Owner",
      check: (message) => {
        if (message.channel.type === "text" && message.guild.ownerID) {
          if (message.guild.ownerID === message.author.id) return true;
        } else {
          return false;
        }
      }
    },

    { level: 9,
      name: "Bot Admin",
      check: (message) => config.admins.includes(message.author.id)
    },

    { level: 10,
      name: "Bot Owner",
      check: (message) => message.client.appInfo.owner.id === message.author.id
    }
  ]
};

module.exports = config;
