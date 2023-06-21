//import db from '../lib/database.js'
let reg = 40
let handler = async (m, { conn, args, usedPrefix, command }) => {
    let fa = `.`.trim()
    let users = global.db.data.users[m.sender]
    let apuesta = parseInt(args[0])

    let emojis = ["🪙", "🎰", "💎"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let x = [],
        y = [],
        z = [];
    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    let end;
    if (a == b && b == c) {
        end = `𝐡𝐚𝐢 𝐯𝐢𝐧𝐭𝐨 🎉 🎁`
        users.exp += apuesta + apuesta
    } else if (a == b || a == c || b == c) {
        end = `𝐜𝐨𝐧𝐭𝐢𝐧𝐮𝐚 𝐚 𝐭𝐞𝐧𝐭𝐚𝐫𝐞 . . .`
    } else {
        end = `𝐡𝐚𝐢 𝐩𝐞𝐫𝐬𝐨 🤡`
        users.exp -= apuesta
    }
    return await m.reply(
        `
       🎰 ┃ 𝐒𝐋𝐎𝐓
     ──────────
       ${x[0]} : ${y[0]} : ${z[0]}
       ${x[1]} : ${y[1]} : ${z[1]}
       ${x[2]} : ${y[2]} : ${z[2]}
     ──────────
        
${end}`) 
}
handler.help = ['slot <apuesta>']
handler.tags = ['game']
handler.command = ['slot']

export default handler