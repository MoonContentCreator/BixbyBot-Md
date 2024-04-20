import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `𝐑𝐢𝐬𝐩𝐨𝐧𝐝𝐢 𝐚 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐨 𝐚 𝐮𝐧𝐚 𝐢𝐦𝐦𝐚𝐠𝐢𝐧𝐞 𝐜𝐨𝐧 .𝐮𝐫𝐥`
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`──────────────\n- 📁 ${media.length} Byte(s)\n\n- ${isTele ? 'Nessuna data di scadenza' : '(Sconosciuto)'}\n- ${link}\n──────────────`)
}
handler.command = ['url', 'tourl']

export default handler