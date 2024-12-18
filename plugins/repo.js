const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    react: "📡",
    category: "main",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `
Rᴇᴘᴏ Sɪᴛɪ Iɴꜰᴏᴍᴀᴛɪᴏɴ

📍ʀᴇᴘᴏ ʟɪɴᴋ 📎👇

👨‍💻◦

📍ᴘʟᴇᴀꜱᴇ ꜱᴜʙꜱᴄʀɪʙᴇ ᴍʏ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴᴇʟ📎👇

👨‍💻◦ 

📍ᴘʟᴇᴀꜱᴇ ꜰᴏʟʟᴏᴡ ᴍʏ ᴡʜꜱᴛᴀᴘᴘ ᴄʜᴀɴᴇʟ 📎👇

👨‍💻◦ 

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ 𝐊𝐀𝐕𝐈𝐘𝐀 
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/tpJGQkr/20241122-203120.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
