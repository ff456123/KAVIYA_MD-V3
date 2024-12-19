const {cmd , commands} = require('../command')
const yts = require('yt-search');
const fg = require('api-dylux');

// -------- Song Download --------
cmd({
    pattern: 'song',
    desc: 'download songs',
    react: "🎶",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply('Please enter a query or a url !');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `🎼 KAVIYA MD SONG DOWNLOADER . .⚙️

🎼 TITLE - ${data.title}

🎼 VIEWS - ${data.views}

🎼 DESCRIPTION - ${data.description}

🎼 TIME - ${data.timestamp}

🎼 AGO - ${data.ago}

Reply This Message With Option

1 || Audio With Normal Format
2 || Audio With Document Format

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ 𝐊𝐀𝐕𝐈𝐘𝐀💚 `;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let down = await fg.yta(url);
                        let downloadUrl = down.dl_url;
                        await conn.sendMessage(from, { audio: { url:downloadUrl }, caption: '> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ 𝐊𝐀𝐕𝐈𝐘𝐀💚 ', mimetype: 'audio/mpeg'},{ quoted: mek });
                        break;
                    case '2':               
                        // Send Document File
                        let downdoc = await fg.yta(url);
                        let downloaddocUrl = downdoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloaddocUrl }, caption: '> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ 𝐊𝐀𝐕𝐈𝐘𝐀💚 ', mimetype: 'audio/mpeg', fileName:data.title + ".mp3"}, { quoted: mek });
                        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
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
