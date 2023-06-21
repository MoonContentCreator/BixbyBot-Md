let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ CALCOLATORE DI AMORE ❤️❤️*
*L'amore da parte della tua crush ${text} per te è* *${Math.floor(Math.random() * 100)}%* *di 100%*
*Perché non ti dichiari ?*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(crush)$/i
export default handler
