import cp from 'child_process';
import { promisify } from 'util';
import translate from '@vitalets/google-translate-api';
const exec = promisify(cp.exec).bind(cp);

const handler = async (m) => {
  await conn.reply(m.chat, global.wait, m);
  let o;
  try {
    o = await exec('python3 speed.py --secure --share');
  } catch (e) {
    o = e;
  } finally {
    const { stdout, stderr } = o;
    if (stdout.trim()) {
      const translated = await translate(stdout, { to: 'it' });
      const text = translated.text
        .replace(/(Scarica)/g, 'Download')
        .replace(/(Carica)/g, 'Upload')
        .replace(/(Ospitato)/g, 'Hostato');
      m.reply(text);
    }
    if (stderr.trim()) {
      const translated = await translate(stderr, { to: 'it' });
      m.reply(translated.text);
    }
  }
};

handler.help = ['speedtest'];
handler.tags = ['info'];
handler.command = /^(speedtest?|test?speed)$/i;

export default handler;