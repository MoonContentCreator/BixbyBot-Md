let handler = async (m, { conn, isOwner }) => {
let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
let caption = `
┌〔𝐔𝐭𝐞𝐧𝐭𝐢 𝐛𝐥𝐨𝐜𝐜𝐚𝐭𝐢 👨🏻‍✈️〕
├ 𝐓𝐨𝐭𝐚𝐥𝐞 : ${users.length} ${users ? '\n' + users.map(([jid], i) => `
├ ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : '├'}
└────

┌〔𝐂𝐡𝐚𝐭 𝐛𝐥𝐨𝐜𝐜𝐚𝐭𝐞 👨🏻‍✈️〕
├ 𝐓𝐨𝐭𝐚𝐥𝐞 : ${chats.length} ${chats ? '\n' + chats.map(([jid], i) => `
├ ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : '├'}
└────
`.trim()
m.reply(caption, null, {mentions: conn.parseMention(caption)})}
handler.command = /^banlist(ned)?|ban(ned)?list|daftarban(ned)?$/i
handler.rowner = true
export default handler
