let handler = async (m, { command, text }) => m.reply(`
${['non lo so','e io che cazzo ne so','prova a cercarlo su google coglione','pornhub.com tieni ti servirà','sei proprio inutile','neanche perdo tempo a risponderti','ma quanto sei stupido?','ma quanto sei stupida?','non chiederlo a me','sei inutile','non sai fare proprio un cazzo eh?','non mi va di risponderti'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.customPrefix = /come/i
handler.command = new RegExp
export default handler