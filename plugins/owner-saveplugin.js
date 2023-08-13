import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `𝐈𝐧𝐬𝐞𝐫𝐢𝐬𝐜𝐢 𝐢𝐥 𝐧𝐨𝐦𝐞 𝐝𝐞𝐥 𝐩𝐥𝐮𝐠𝐢𝐧 𝐝𝐚 𝐬𝐚𝐥𝐯𝐚𝐫𝐞`
    if (!m.quoted.text) throw `𝐑𝐢𝐬𝐩𝐨𝐧𝐝𝐢 𝐚𝐥 𝐦𝐞𝐬𝐬𝐚𝐠𝐠𝐢𝐨`
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`𝐈𝐥 𝐩𝐥𝐮𝐠𝐢𝐧 𝐞' 𝐬𝐭𝐚𝐭𝐨 𝐬𝐚𝐥𝐯𝐚𝐭𝐨 𝐜𝐨𝐦𝐞 ${path}`)
}
handler.help = ['saveplugin'].map(v => v + ' <nombre>')
handler.tags = ['owner']
handler.command = /^salva|salvaplugin$/i

handler.rowner = true
export default handler