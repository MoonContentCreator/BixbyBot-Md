let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('𝐜𝐡𝐚𝐭 𝐛𝐥𝐨𝐜𝐜𝐚𝐭𝐚 𝐜𝐨𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐨 ✓')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat|bangp$/i
handler.rowner = true
export default handler
