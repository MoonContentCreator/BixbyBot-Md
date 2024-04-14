let handler = async (m) => {
    let funzionitotali = Object.values(global.plugins).filter(v => v.command).length;
    m.reply(`ⓘ 𝐈𝐥 𝐛𝐨𝐭 𝐡𝐚 *${funzionitotali}*  𝐟𝐮𝐧𝐳𝐢𝐨𝐧𝐢.`);
}
handler.command = ['funzionitotali', 'functions'];
export default handler;