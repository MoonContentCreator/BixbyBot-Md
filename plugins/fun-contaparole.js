let handler = async (m, { text }) => {
    let txt = text || (m.quoted && m.quoted.text);
    
    if (!txt) {
        throw '> ⓘ 𝐅𝐨𝐫𝐧𝐢𝐬𝐜𝐢 𝐮𝐧 𝐭𝐞𝐬𝐭𝐨 𝐝𝐚 𝐜𝐨𝐧𝐭𝐚𝐫𝐞.';
    }
    
    const caratterispeciali = /[^\w\d\s]/.test(txt);
    if (caratterispeciali) {
        throw '> ⚠️ 𝐈𝐥 𝐭𝐞𝐬𝐭𝐨 𝐢𝐧𝐬𝐞𝐫𝐢𝐭𝐨 𝐜𝐨𝐧𝐭𝐢𝐞𝐧𝐞 𝐜𝐚𝐫𝐚𝐭𝐭𝐞𝐫𝐢 𝐬𝐩𝐞𝐜𝐢𝐚𝐥𝐢.';
    }
    
    const parole = txt.match(/\b\w+\b/g);
    
    const numeroParole = parole ? parole.length : 0;
    
    const numeroNumeri = txt.match(/\b\d+\b/g) ? txt.match(/\b\d+\b/g).length : 0;
    
    const numeriSpeciali = ['𝟏', '𝟐', '𝟑', '𝟒', '𝟓', '𝟔', '𝟕', '𝟖', '𝟗'];
    const numeriParole = numeroParole.toString().split('').map(digit => numeriSpeciali[digit]).join('');
    
    const numeriNumeri = numeroNumeri.toString().split('').map(digit => numeriSpeciali[digit]).join('');
    
    let messaggio = ` ⓘ 𝐈𝐥 𝐭𝐞𝐬𝐭𝐨 𝐢𝐧𝐬𝐞𝐫𝐢𝐭𝐨 𝐜𝐨𝐧𝐭𝐢𝐞𝐧𝐞 ${numeriParole} 𝐩𝐚𝐫𝐨𝐥𝐞`;
    
    if (numeroNumeri > 0) {
        messaggio += ` 𝐞 ${numeriNumeri} 𝐧𝐮𝐦𝐞𝐫𝐢`;
    }
    
    if (numeroNumeri === 0) {
        messaggio += `.`;
    }
    
    m.reply(messaggio);
}

handler.command = ['contaparole'];
export default handler;