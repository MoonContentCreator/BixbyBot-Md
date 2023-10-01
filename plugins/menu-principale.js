import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import fs from 'fs'
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
const grup = './no.png'
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let name = await
conn.getName(m.sender)
let prova = { "key": {"participants":"0@s.whatsapp.net", "fromMe": false, "id": "Halo"
}, "message": { 
"orderMessage": { text: '𝐁𝐢𝐱𝐛𝐲 𝐕𝐢𝐬𝐢𝐨𝐧 🔮',
"itemCount": 2023,
"status": 1,
"surface" : 1,
    "message": '𝐁𝐢𝐱𝐛𝐲 𝐕𝐢𝐬𝐢𝐨𝐧 🔮',
"thumbnail": fs.readFileSync('./bb.png'),
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
}}, "participant": "0@s.whatsapp.net"
}
let text = `
══════ •⊰✧⊱• ══════ 
✰‌ ‌𝐔𝐭𝐞𝐧𝐭𝐞: ${name}
✰‌ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐞: 𝐌𝐨𝐝𝐝𝐞𝐫
✰‌ 𝐏𝐫𝐞𝐟𝐢𝐬𝐬𝐨: *${usedPrefix}*
═══════════════
✧‌⃟ᗒ ${usedPrefix}𝐩𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨
✧‌⃟ᗒ ${usedPrefix}𝐬𝐭𝐚𝐭𝐨
✧‌⃟ᗒ ${usedPrefix}𝐟𝐮𝐧𝐳𝐢𝐨𝐧𝐢
✧‌⃟ᗒ ${usedPrefix}𝐚𝐝𝐦𝐢𝐧
✧‌⃟ᗒ ${usedPrefix}𝐠𝐫𝐮𝐩𝐩𝐨
✧‌⃟ᗒ ${usedPrefix}𝐥𝐨𝐠𝐡𝐢
✧‌⃟ᗒ ${usedPrefix}𝐚𝐮𝐝𝐢𝐨
✧‌⃟ᗒ ${usedPrefix}𝐨𝐰𝐧𝐞𝐫
✧‌⃟ᗒ ${usedPrefix}𝐢𝐧𝐬𝐭𝐚𝐥𝐥𝐚
✰‌⃟ᗒ ${usedPrefix}𝐜𝐫𝐞𝐝𝐢𝐭𝐢               ᵐᵒᵈᵈᵉᵈ ᵇʸ ᵈᵃⁿⁱ
══════ •⊰✧⊱• ══════ `.trim() 
conn.reply(m.chat, text, prova, m, false, )
}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(menu|comandi)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}