import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (!(who in global.db.data.users)) throw `*L'utente deve ancora scrivere un messaggio*`
  
  global.db.data.users[who].comandiEseguiti = global.db.data.users[who].comandiEseguiti || 0;
  global.db.data.users[who].comandiEseguiti += 1;
  const pp = await conn.profilePictureUrl(who, 'image').catch((_) => null) || './src/avatar_contact.png';
  let thumbnail;
  if (pp !== './src/avatar_contact.png') {
    thumbnail = await (await fetch(pp)).buffer();
  } else {
    thumbnail = await (await fetch('https://telegra.ph/file/8ca14ef9fa43e99d1d196.jpg')).buffer();
  }

  let user = global.db.data.users[who]

  let { name, exp, messaggi, lastclaim, registered, regTime, age, level, role, warn, nomeinsta } = global.db.data.users[who]
  let nome = await conn.getName(m.sender)
  let { min, xp, max } = xpRange(user.level, global.multiplier)
  let username = conn.getName(who)
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
  let math = max - xp
  let prem = global.prems.includes(who.split`@`[0])
  let sn = createHash('md5').update(who).digest('hex') 
  let emojiWarn = warn === 0 ? '👌' : warn === 1 ? '⚠️' : '‼️';
  let old = performance.now();
  let neww = performance.now();
  let speed = (neww - old).toFixed(4);
  let _uptime = process.uptime() * 1000;
  let uptime = clockString(_uptime);
  
  let provautente = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "fromMe": false,
      "id": "Halo"
    },
    "message": {
      "locationMessage": {
        name: `𝐏𝐫𝐨𝐟𝐢𝐥𝐨 𝐔𝐭𝐞𝐧𝐭𝐞`,
        "jpegThumbnail": await (await fetch('https://telegra.ph/file/2f38b3fd9cfba5935b496.jpg')).buffer(),
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  }
  let gruppiArray = user.gruppiincuieadmin
    ? `──────────────\n  👑 𝐆𝐞𝐬𝐭𝐢𝐬𝐜𝐞 𝐢 𝐠𝐫𝐮𝐩𝐩𝐢:\n${user.gruppiincuieadmin.split(';').map((gruppo, index) => `-  ${gruppo.trim()}`).join('\n')} \n──────────────`
    : '──────────────';

  let instagramString = nomeinsta ? formatInstagramValue(nomeinsta) : '🤳🏻 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: 𝐍𝐨𝐧 𝐢𝐦𝐩𝐨𝐬𝐭𝐚𝐭𝐨';

  let igBody = nomeinsta ? '' : `ⓘ 𝐔𝐬𝐚 𝐢𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${usedPrefix}𝐬𝐞𝐭𝐢𝐠`;

const { antiToxic, antilinkhard, antiPrivate, antitraba, antiArab, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antilinkbase, antitiktok, sologruppo, soloprivato, antiCall, modohorny, gpt, antiinsta, antielimina, antitelegram, antiSpam, autosticker, bestemmiometro, comandieseguiti,  modoadmin, audios, delete: del } = global.db.data.chats[m.chat]

  let text = String.raw`${gruppiArray}
 💬 𝐌𝐞𝐬𝐬𝐚𝐠𝐠𝐢: ${global.db.data.users[who].messaggi}
 ${bestemmiometro ? `🤬 𝐁𝐞𝐬𝐭𝐞𝐦𝐦𝐢𝐞: ${global.db.data.users[who].blasphemy}\n` : ''}${bestemmiometro ? ' ' : ''}${emojiWarn} 𝐖𝐚𝐫𝐧: ${global.db.data.users[who].warn} / 3
 ${global.db.data.users[who].muto ? `🔇 𝐌𝐮𝐭𝐚𝐭𝐨: 𝐒𝐢\n` : ''}${global.db.data.users[who].muto ? ' ' : ''}${global.db.data.users[who].banned ? `🤖 𝐔𝐬𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐢: Bloccati\n` : ''}${global.db.data.users[who].banned ? ' ' : ''}${comandieseguiti ? `🎨 𝐂𝐨𝐦𝐚𝐧𝐝𝐢 𝐞𝐬𝐞𝐠𝐮𝐢𝐭𝐢: ${global.db.data.users[who].comandiEseguiti || 0}\n` : ''}${comandieseguiti ? ' ' : ''}${instagramString ? `${instagramString}` : ''}
──────────────`;
 let textbot = ` ${gruppiArray}
  💬 𝐌𝐞𝐬𝐬𝐚𝐠𝐠𝐢 𝐝𝐞𝐥 𝐛𝐨𝐭: ${global.db.data.users[who].messaggi}
  ⁉️ 𝐀𝐬𝐬𝐢𝐬𝐭𝐞𝐧𝐳𝐚 :
  https://t.me/AssistenzaBixbyBot
──────────────`

let body = conn.user.jid === who ? `🚀 ${speed}` : igBody;

  let title = conn.user.jid === who ? `🟢 ${uptime}` : `${name} ${premiumLabel}`;

conn.sendMessage(m.chat, { 
  text: who === conn.user.jid ? textbot : text, 
  contextInfo: {
    "externalAdReply": {
      "title": title,
      "previewType": "PHOTO",
      "thumbnail": thumbnail,
      "body": body,
      "sourceUrl": `https://wa.me/${who.split('@')[0]}`,
      "mediaType": 1
    }
  }
}, { quoted: provautente });
}

handler.help = ['bal']
handler.tags = ['xp']
handler.command = /^(msg|attività|attivitá|attivita|profilo|info)/i
export default handler

function formatInstagramValue(username) {
  const matches = username.match(/https:\/\/(?:www\.)?instagram\.com\/([^/?]+)/);
  
  if (matches) {
    return `🤳🏻 instagram.com/${matches[1]}`;
  } else if (username.includes('https://instagram.com/')) {
    return `🤳🏻 instagram.com/${username.replace('https://instagram.com/', '')}`;
  } else {
    return `🤳🏻 instagram.com/${username}`;
  }
}
function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    console.log({ ms, h, m, s });
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}