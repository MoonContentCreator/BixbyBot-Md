var handler = async (m, {conn, groupMetadata }) => {

conn.reply(m.chat, `ⓘ 𝐋' 𝐢𝐝 𝐝𝐢 𝐪𝐮𝐞𝐬𝐭𝐨 𝐠𝐫𝐮𝐩𝐩𝐨 𝐞' ${await groupMetadata.id}`, m, )

}
handler.command = /^(id|gpid|gcid)$/i
handler.group = true
export default handler