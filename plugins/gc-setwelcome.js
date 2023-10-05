let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply(`𝐈𝐥 𝐛𝐞𝐧𝐯𝐞𝐧𝐮𝐭𝐨 𝐞̀ 𝐬𝐭𝐚𝐭𝐨 𝐢𝐦𝐩𝐨𝐬𝐭𝐚𝐭𝐨`)
} else throw `𝐢𝐧𝐬𝐞𝐫𝐢𝐬𝐜𝐢 𝐢𝐥 𝐦𝐞𝐬𝐬𝐚𝐠𝐠𝐢𝐨 𝐝𝐢 𝐛𝐞𝐧𝐯𝐞𝐧𝐮𝐭𝐨 𝐜𝐡𝐞 𝐝𝐞𝐬𝐢𝐝𝐞𝐫𝐢 𝐚𝐠𝐠𝐢𝐮𝐧𝐠𝐞𝐫𝐞, 𝐮𝐬𝐚:\n- @𝐮𝐬𝐞𝐫 (𝐦𝐞𝐧𝐳𝐢𝐨𝐧𝐞)\n- @𝐠𝐫𝐨𝐮𝐩 (𝐧𝐨𝐦𝐞 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐩𝐨)\n- @𝐝𝐞𝐬𝐜 (𝐝𝐞𝐬𝐜𝐫𝐢𝐳𝐢𝐨𝐧𝐞 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐩𝐨)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
export default handler
