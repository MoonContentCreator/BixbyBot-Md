let handler = async (m, { command, text }) => m.reply(`
 ${['si','no','impossile','secondo me no','e io che cazzo ne so','secondo me si','SI','è una stronzata','saresti un coglione se non lo facessi','devi farlo assolutamente','anche secondo me','provaci','per me è la cipolla','non ho capito bene, ripeti','AHAHAHAH'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.customPrefix = /secondo|cosa|parere|opinione|pareri|devo|/i
handler.command = new RegExp
export default handler