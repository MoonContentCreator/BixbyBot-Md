import {tmpdir} from 'os'; 
 import path, {join} from 'path'; 
 import { 
   readdirSync, 
   statSync, 
   unlinkSync, 
   existsSync, 
   readFileSync, 
   watch, 
 } from 'fs'; 
 const handler = async (m, {conn, usedPrefix: _p, __dirname, args, text}) => { 
   const ar = Object.keys(plugins); 
   const ar1 = ar.map((v) => v.replace('.js', '')); 
   if (!text) throw `📌 *_Esempio uso:_*\n*#deleteplugin Menu-official*`; 
   if (!ar1.includes(args[0])) return m.reply(`*🗃️ non esiste questo plugin!*\n•••••••••••••••••••••••••••••••••••••••••••••••••••••••\n\n${ar1.map((v) => ' ' + v).join`\n`}`); 
   const file = join(__dirname, '../plugins/' + args[0] + '.js'); 
   unlinkSync(file);
   let prova = { "key": {"participants":"0@s.whatsapp.net", "fromMe": false, "id": "Halo"
}, "message": { 
"extendedTextMessage": { text: `𝐈𝐥 𝐩𝐥𝐮𝐠𝐢𝐧 𝐞' 𝐬𝐭𝐚𝐭𝐨 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐭𝐨`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
}}, "participant": "0@s.whatsapp.net"
}
   conn.reply(m.chat, `_plugins/${args[0]}.js_`, prova); 
 }; 
 handler.help = ['deleteplugin <nombre>']; 
 handler.tags = ['owner']; 
 handler.command = /^(deleteplugin|dp|deleteplu)$/i; 
  
 handler.mods = true; 
  
 export default handler;