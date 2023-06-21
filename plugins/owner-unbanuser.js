let handler = async (m, { conn, text}) => {
if (!text) return
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) return
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `𝐬𝐛𝐥𝐨𝐜𝐜𝐚𝐭𝐨 𝐜𝐨𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐨 ✓`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser|unban$/i
handler.rowner = true
export default handler
