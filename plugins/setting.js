const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")


cmd({
    pattern: "settings",
    alias: ["setting"],
    desc: "settings the bot",
    react: "⚙️",
    category: "owner"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃       ⚙️ KAVIYA_MD BOT SETTINGS ⚙️
┃━━━━━━━━━━━━━━━━━━━━━━━┃
┣━📰 24/7 NEWS SERVICE : 𝙾𝙽/𝙾𝙵𝙵
┣━✍️ AUTO BIO : 𝙾𝙽/𝙾𝙵𝙵
┃━━━━━━━━━━━━━━━━━━━━━━━┃
┃      🔗  CUSTOMIZE YOUR SETTINGS ⤵️
┗━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃       🔧 OPTIONS MENU 🔧
┃━━━━━━━━━━━━━━━━━━━━━━━┃

┣━ _24/7 NEWS SERVICE_ ⤵️
┃   ┣ 1.1 📰 Activate News Service
┃   ┗ 1.2 🛑 Deactivate News Service

┣━ _AUTO BIO_ ⤵️
┃   ┣ 2.1 ✍️ Auto Bio On
┃   ┗ 2.2 ✍️❌ Auto Bio Off
┗━━━━━━━━━━━━━━━━━━━━━━━┛

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴇɴᴇꜱʜ `;

        const vv = await conn.sendMessage(from, { image: { url: "https://i.ibb.co/tpJGQkr/20241122-203120.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply(".startnews" );
                        break;
                    case '1.2':               
                        reply(".stopnews");
                        break;
                    case '2.1':               
                        reply(".setautobio");  
                      break;
                    case '2.2':               
                        reply(".setautobio");
                    
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
