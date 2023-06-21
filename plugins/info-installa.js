import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler  = async (m, { conn }) => {
let texto = `══════ •⊰✧⊱• ══════\n𝐂𝐨𝐦𝐚𝐧𝐝𝐢 𝐩𝐞𝐫 𝐢𝐧𝐬𝐭𝐚𝐥𝐥𝐚𝐫𝐞
✧ cd
✧ termux-setup-storage
✧ apt update 
✧ pkg upgrade 
✧ pkg install git -y
✧ pkg install nodejs -y
✧ pkg install ffmpeg -y
✧ pkg install imagemagick -y
✧ pkg install yarn
✧ git clone https://github.com/Fabri115/BotWhaIta.git
✧ cd BotWhaIta 
✧ yarn install 
✧ npm install
✧ npm update
✧ npm start

𝐒𝐜𝐚𝐫𝐢𝐜𝐚𝐫𝐞 𝐥𝐚 𝐜𝐚𝐫𝐭𝐞𝐥𝐥𝐚 𝐝𝐞𝐥 𝐛𝐨𝐭 📱
cd /sdcard && rm -rf BixbyBot-Md && git clone https://github.com/Fabri115/BixbyBot-Md.git && cd BixbyBot-Md && npm start\n══════ •⊰✧⊱• ══════` 
let prova = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"
}, "message": { 
"groupInviteMessage": { caption: '𝙱𝙴𝚃𝙰 𝚃𝙴𝚂𝚃𝙸𝙽𝙶 𝟷.𝟼 ',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
}}, "participant": "0@s.whatsapp.net"
}
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: '𝗖𝗹𝗶𝗰𝗰𝗮 𝗾𝘂𝗶 𝗽𝗲𝗿 𝗰𝗼𝗻𝘁𝗮𝘁𝘁𝗮𝗿𝗲 𝗶𝗹 𝗰𝗿𝗲𝗮𝘁𝗼𝗿𝗲 ', body: '𝐁𝐢𝐱𝐛𝐲-𝐕𝐢𝐬𝐢𝐨𝐧-𝐌𝐝', thumbnail: fs.readFileSync("./betatest.jpg"), sourceUrl: `https://wa.me/3903717177117` }, mentionedJid: [m.sender] }}}, { quoted: prova })
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.command = /^(instalarbot|git|info-dono|dono|installa)/i
export default handler
