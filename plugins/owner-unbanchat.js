let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('𝐜𝐡𝐚𝐭 𝐬𝐛𝐥𝐨𝐜𝐜𝐚𝐭𝐚 𝐜𝐨𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐨 ✓')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat|unbangp$/i
handler.rowner = true
export default handler
