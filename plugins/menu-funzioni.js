import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@whiskeysockets/baileys'
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
const { antiToxic, antilinkhard, antiPrivate, antitraba, antiArab, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antilinkbase, antitiktok, sologruppo, soloprivato, antiCall, modohorny, gpt, antiinsta, antielimina, antitelegram, antiSpam, autosticker, modoadmin, audios, delete: del } = global.db.data.chats[m.chat]
let prova = { "key": {"participants":"0@s.whatsapp.net", "fromMe": false, "id": "Halo"
}, "message": { 
"locationMessage": { name: `𝐌𝐞𝐧𝐮 𝐝𝐞𝐥𝐥𝐞 𝐟𝐮𝐧𝐳𝐢𝐨𝐧𝐚𝐥𝐢𝐭𝐚'`,
"jpegThumbnail": await (await fetch('https://telegra.ph/file/a756c4fa50e820ccbdc2f.jpg')).buffer(),}}, "participant": "0@s.whatsapp.net"
}
let text = `
══════ •⊰✦‌⊱• ══════
 ${detect ? '✓' : '☓'} • ${usedPrefix}𝐝𝐞𝐭𝐞𝐜𝐭
 ${gpt ? '✓' : '☓'} • ${usedPrefix}𝐠𝐩𝐭
 ${welcome ? '✓' : '☓'} • ${usedPrefix}𝐛𝐞𝐧𝐯𝐞𝐧𝐮𝐭𝐨
 ${sologruppo ? '✓' : '☓'} • ${usedPrefix}𝐬𝐨𝐥𝐨𝐠𝐫𝐮𝐩𝐩𝐨
 ${soloprivato ? '✓' : '☓'} • ${usedPrefix}𝐬𝐨𝐥𝐨𝐩𝐫𝐢𝐯𝐚𝐭𝐨
 ${modoadmin ? '✓' : '☓'} • ${usedPrefix}𝐦𝐨𝐝𝐨𝐚𝐝𝐦𝐢𝐧
 ${isBanned ? '✓' : '☓'} • ${usedPrefix}𝐛𝐚𝐧𝐠𝐩
 ${antiCall ? '✓' : '☓'} • ${usedPrefix}𝐚𝐧𝐭𝐢𝐜𝐚𝐥𝐥
 ${antitraba ? '✓' : '☓'} • ${usedPrefix}𝐚𝐧𝐭𝐢𝐭𝐫𝐚𝐯𝐚
 ${antiArab ? '✓' : '☓'} • ${usedPrefix}𝐚𝐧𝐭𝐢𝐩𝐚𝐤𝐢
 ${antiLink ? '✓' : '☓'} • ${usedPrefix}𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤
 ${antiinsta ? '✓' : '☓'} • ${usedPrefix}𝐚𝐧𝐭𝐢𝐢𝐧𝐬𝐭𝐚
 ${antitiktok ? '✓' : '☓'} • ${usedPrefix}𝐚𝐧𝐭𝐢𝐭𝐢𝐤𝐭𝐨𝐤
 ${del ? '☓' : '✓'} • ${usedPrefix}𝐚𝐧𝐭𝐢𝐞𝐥𝐢𝐦𝐢𝐧𝐚
> ⓘ 𝐈𝐧𝐟𝐨 𝐬𝐮𝐥𝐥𝐨 𝐬𝐭𝐚𝐭𝐨
> ${usedPrefix}𝐢𝐧𝐟𝐨𝐬𝐭𝐚𝐭𝐨
> ⓘ 𝐔𝐬𝐨 𝐝𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨
> ${usedPrefix}𝐚𝐭𝐭𝐢𝐯𝐚 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤
> ${usedPrefix}𝐝𝐢𝐬𝐚𝐛𝐢𝐥𝐢𝐭𝐚 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤
══════ •⊰✦‌⊱• ══════`.trim() 
conn.reply(m.chat, text, prova, m, false, )
}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(funzioni)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}