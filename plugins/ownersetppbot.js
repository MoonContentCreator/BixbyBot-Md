import Jimp from 'jimp'

let handler = async (m, { args, conn, command, usedPrefix }) => {
   let q = m.quoted ? m.quoted : m
   let mime = (q.msg || q).mimetype || q.mediaType || ''
   if (!/image/g.test(mime)) return m.reply('Rrispondi a una immagine.')
   let media = await q.download()
   if (args[0] == '--full') {
      let { img } = await pepe(media)
      await conn.query({
         tag: 'iq',
         attrs: {
            to: conn.user.jid,
            type: 'set',
            xmlns: 'w:profile:picture'
         },
         content: [{
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
         }]
      })
      return !0
   }
   await conn.updateProfilePicture(conn.user.jid, media)
   await m.reply('La foto profilo del bot è stata cambiata con successo.')
}

handler.help = ['setppbot']
handler.tags = ['owner']
handler.command = /^setpp|setppbot|immagineprofilo?$/i

handler.owner = true

export default handler

async function pepe(media) {
   const jimp_1 = await Jimp.read(media)
   const min = jimp_1.getWidth()
   const max = jimp_1.getHeight()
   const cropped = jimp_1.crop(0, 0, min, max)
   return {
      img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
      preview: await cropped.normalize().getBufferAsync(Jimp.MIME_JPEG)
   }
}