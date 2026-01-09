module.exports.config = {
  name: "apk",
  version: "1.1.0",
  hasPermssion: 0,
  credits: "OFFICIAL ALIYA",
  description: "Find app links from Google & Play Store",
  commandCategory: "utility",
  usages: "apk <app name>",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  if (!args[0]) {
    return api.sendMessage(
`✨ 𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡 𝘼𝙡𝙞𝙮𝙖 ✨

❌ 𝘼𝙥𝙥 𝙣𝙖𝙢𝙚 𝙢𝙞𝙨𝙨𝙞𝙣𝙜

📌 Example:
apk instagram
apk whatsapp`,
      event.threadID,
      event.messageID
    );
  }

  const appName = args.join(" ");
  const q = encodeURIComponent(appName);

  const google = `https://www.google.com/search?q=${q}`;
  const play = `https://play.google.com/store/search?q=${q}&c=apps`;

  const msg =
`✨ 𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡 𝘼𝙡𝙞𝙮𝙖 ✨
━━━━━━━━━━━━━━━━━━

📱 𝗔𝗣𝗣 𝗡𝗔𝗠𝗘
➥ ${appName}

🔍 𝗚𝗢𝗢𝗚𝗟𝗘
➥ ${google}

▶ 𝗣𝗟𝗔𝗬 𝗦𝗧𝗢𝗥𝗘
➥ ${play}

━━━━━━━━━━━━━━━━━━
💖 Powered by ALIYA
`;

  api.sendMessage(msg, event.threadID, event.messageID);
};
