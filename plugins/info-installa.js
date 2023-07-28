import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
const ims = './bb.jpg'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = (neww - old).toFixed(4)
let prova = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"
}, "message": { 
"orderMessage": { text: '𝐁𝐢𝐱𝐛𝐲 𝐕𝐢𝐬𝐢𝐨𝐧 🔮',
"itemCount": 2023,
"status": 1,
"surface" : 1,
    "message": '𝐒𝐜𝐚𝐫𝐢𝐜𝐚 𝐁𝐢𝐱𝐛𝐲 𝐕𝐢𝐬𝐢𝐨𝐧 🔮',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=15395490858:+1 (539) 549-0858\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
}}, "participant": "0@s.whatsapp.net"
}
let info = `
══════ •⊰✧⊱• ══════
𝐂𝐨𝐦𝐚𝐧𝐝𝐢 𝐩𝐞𝐫 𝐢𝐧𝐬𝐭𝐚𝐥𝐥𝐚𝐫𝐞
✧ cd
✧ termux-setup-storage
✧ apt update 
✧ pkg upgrade 
✧ pkg install git -y
✧ pkg install nodejs -y
✧ pkg install ffmpeg -y
✧ pkg install imagemagick -y
✧ pkg install yarn
✧ git clone https://github.com/MoonContentCreator/BixbyBot-Md.git
✧ cd BixbyBot-Md 
✧ yarn install 
✧ npm install
✧ npm update
✧ npm start

𝐒𝐜𝐚𝐫𝐢𝐜𝐚𝐫𝐞 𝐥𝐚 𝐜𝐚𝐫𝐭𝐞𝐥𝐥𝐚 𝐝𝐞𝐥 𝐛𝐨𝐭 📱
✧ cd /sdcard && rm -rf BixbyBot-Md && git clone https://github.com/MoonContentCreator/BixbyBot-Md.git && cd BixbyBot-Md && npm start
══════ •⊰✧⊱• ══════
`.trim() 
conn.reply(m.chat, info,prova, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: 'ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(scarica|installa|git|instalarbot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}