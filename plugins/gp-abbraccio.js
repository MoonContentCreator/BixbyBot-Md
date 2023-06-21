let handler = async (m, { conn, usedPrefix, command, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    let user = global.db.data.users[who]
    if (!who) return m.reply(`Menziona chi vuoi abbracciare`)
   
   
let abrazo = await conn.reply(m.chat, `@${m.sender.split('@')[0]}  sta abbracciando @${who.split('@')[0]} `, m, { mentions: [who, m.sender] })

conn.sendMessage(m.chat, { react: { text: '🫂', key: abrazo.key }})
}
handler.customPrefix = /abbraccio|abbraccia/i
handler.command = new RegExp
export default handler