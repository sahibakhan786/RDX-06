module.exports.config = {
    name: "sarvar",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SARDAR RDX",
    description: "War nát cái boxchat",
    commandCategory: "group",
    usages: "sarvar on/off",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
};

let serverStatus = false; // Sarvar default OFF
let interval;

module.exports.run = async function({ api, event, args }) {
    const adminUID = "61581637187236"; // Sirf ye admin control karega
    const userID = event.senderID;
    const command = args[0] ? args[0].toLowerCase() : "";

    const header = "➪ᴼʷⁿᵉʳ Øfficiål ♡Aliya♡\n\n"; // Stylish header + extra space
    const n = header;

    if(userID !== adminUID) {
        return api.sendMessage("❌ Sirf admin hi sarvar on/off kar sakta hai.", event.threadID);
    }

    if(command === "on") {
        if(serverStatus) return api.sendMessage("✅ Sarvar already ON hai.", event.threadID);
        serverStatus = true;
        api.sendMessage("✅ Sarvar ON ho gaya hai!", event.threadID);

        // Start sending messages
        sendAllMessages(api, event.threadID, n);
    } else if(command === "off") {
        if(!serverStatus) return api.sendMessage("❌ Sarvar already OFF hai.", event.threadID);
        serverStatus = false;
        clearInterval(interval);
        api.sendMessage("✅ Sarvar OFF kar diya gaya hai!", event.threadID);
    } else {
        return api.sendMessage("⚠️ Use: sarvar on / sarvar off", event.threadID);
    }
};

function sendAllMessages(api, threadID, n) {
    const messages = [
        "KUTTIIAAA K PILLE K BACHHEE BSDDKK",
        "TEEERIII MAA KI CHHUTT M LAAND BSDDDK MCC",
        "TERRI MAA KA KUTTA MAARU SALE LAWDEE BSDK",
        "BABA RAMDEV YAAD KR RHE TERI AMMA KO AAJ MUTH MARTE HUE",
        "TERI AMMI KO KUTTE KA LUND PASAND H YE NEWS PADSO AKHWAR M DEKHI MENE",
        "TERI MAA OR BEHEN ROJ MERE KAMRE P AATI H KYA KRVANE YE TU PTA LGA",
        "TERI MAA KO JOHNNY SINS K TUTION M DEKHA THA PADSO",
        "TERI BEHEN KI GAND MRVANE AA NA IDHR",
        "TERI MAA MIA KHALIFA KO TAKKAR DEGI",
        "TERI MAA KI GAAND M DANDA CHLA GYA 12 METRE KA",
        "TERI MAA KA BHOSHDE M CAMEL KA LAWDA 🤣🤣🤣",
        "TERI MAA KI CHUT KI RADIUS AAJ 1 CM OR BAD GAI",
        "TERI MAA KO AAJ MENE GB ROAD K EK KAMRE M DEKHA",
        "TERI MAA M JOHNNY SINS KA DOUBLE LAWDA",
        "TERI MAA KI CHUT M SAAP DALO RE KOI",
        "TERI MAA SUBH KO KUTTE KI TATTI KHATI H OR SAAM KO MERI",
        "TERI MAA KI GAAND KO KO HI DELETE KRDUNGA BSDK",
        "PRATHVI LGAATI H CHAKKAR SURYAA KA ✌️✌️ TU H NATIJAA MERE VIRYA KA🔥🔥🔥🤣🤣😂😂",
        "PANGA LIA HI H TO GAAND MARUNGAA DHANG SE TERE JESE CHELO KO NHI JANE DUNGA AB M SASTE M 😂",
        "PATLLI LAKDDI KO HAAM KEHTE H DANDI TERI MAA H SASTI RAANDI🤣🤣"
        // Yahan baki galiya continue kar sakte ho
    ];

    let index = 0;

    interval = setInterval(() => {
        if(!serverStatus) return clearInterval(interval);
        if(index >= messages.length) index = 0; // Loop messages agar chahiye

        api.sendMessage(`${n}${messages[index]}`, threadID);
        index++;
    }, 20000); // 20 sec interval
}
