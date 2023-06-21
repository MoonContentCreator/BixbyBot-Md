let handler = async (m, {
conn, args, participants
}) => {
let gruppo = global.db.data.users
let utenti = Object.entries(gruppo).map(([key, value]) => {
return {
...value, jid: key
}})

let sortedMessaggi = utenti.map(toNumber('messaggi')).sort(sort('messaggi'))
let utentiMessaggi = sortedMessaggi.map(enumGetKey)
let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 20)) : Math.min(20, sortedMessaggi.length)
let text = `🏆 Classifica
Top 20 migliori utenti per categoria

💬 Messaggi
🥇 ${sortedMessaggi.slice(0, len).map(({ jid, messaggi }, i) => `${participants.some(p => jid === p.jid) ? ` (${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} 〘 ${messaggi} 〙`).join`\n🏅`}

`.trim()
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
})
}
handler.command = /^(classifica)$/i
export default handler
function sort(property, ascending = true) {
if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}
function toNumber(property, _default = 0) {
if (property) return (a, i, b) => {
return {
...b[i], [property]: a[property] === undefined ? _default : a[property]
}
}
else return a => a === undefined ? _default : a
}
function enumGetKey(a) {
return a.jid
}