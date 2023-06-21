let handler = async (m, { conn, isOwner }) => {
let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].ismuto)
let users = Object.entries(global.db.data.users).filter(user => user[1].muto)
let caption = `
┌〔𝐔𝐭𝐞𝐧𝐭𝐢 𝐦𝐮𝐭𝐚𝐭𝐢 🔇〕
├ 𝐓𝐨𝐭𝐚𝐥𝐞 : ${users.length} ${users ? '\n' + users.map(([jid], i) => `
├ ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : '├'}
└────


`.trim()
m.reply(caption, null, {mentions: conn.parseMention(caption)})}
handler.command = /^listamuti?$/i
handler.rowner = true
export default handler
