import { tmpdir } from 'os';
import path, { join } from 'path';
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs';

const handler = async (m, { conn, usedPrefix: _p, __dirname, args, text }) => {
  const ar = Object.keys(plugins);
  const ar1 = ar.map((v, i) => `${i + 1}. ${v.replace('.js', '')}`);
  if (!text) throw `📌 *_Esempio uso:_*\n*#deleteplugin Menu-official*`;
  if (!ar1.includes(args[0])) return m.reply(`*🗃️ non esiste questo plugin!*\n•••••••••••••••••••••••••••••••••••••••••••••••••••••••\n\n${ar1.join('\n')}`);
  const file = join(__dirname, `../plugins/${ar[parseInt(args[0]) - 1]}`);
  unlinkSync(file);

  conn.reply(m.chat, `_plugins/${ar[parseInt(args[0]) - 1]}`, m);
};

handler.help = ['deleteplugin', 'deleteplugin'];
handler.tags = ['owner'];
handler.command = /^(deleteplugin|dp|deleteplu)$/i;

handler.rowner = true;

export default handler;