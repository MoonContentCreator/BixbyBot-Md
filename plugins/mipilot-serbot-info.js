async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
await m.reply( '*—◉ ᴀǫᴜɪ ᴛɪᴇɴᴇ ʟᴀ ʟɪsᴛᴀ ᴅᴇ sᴜʙʙᴏᴛs (sᴇʀʙᴏᴛ/ᴊᴀᴅɪʙᴏᴛ) ᴀᴄᴛɪᴠᴏs 🤖️*')
await m.reply(users.map(v => '👉🏻 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado (${v.name})`).join('\n'))}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler
