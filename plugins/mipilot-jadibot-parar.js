let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'ok', m)
else {
await conn.reply(m.chat, 'bye bot :\')', m)
conn.ws.close()}}
handler.command = /^(berhenti|stop)$/i
handler.owner = true  
handler.fail = null
export default handler
