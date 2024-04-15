let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {
    if (!event) return await m.reply(`

    ${usedPrefix + command} 𝐛𝐞𝐧𝐯𝐞𝐧𝐮𝐭𝐨 @user
    ${usedPrefix + command} 𝐚𝐝𝐝𝐢𝐨 @user
    ${usedPrefix + command} 𝐩𝐫𝐨𝐦𝐨𝐳𝐢𝐨𝐧𝐞 @user
    ${usedPrefix + command} 𝐫𝐞𝐭𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐨𝐧𝐞 @user`) 
    let mentions = text.replace(event, '').trimStart()
    let who = mentions ? conn.parseMention(mentions) : []
    let part = who.length ? who : [m.sender]
    let act = false
    let eventText = ''
    switch (event.toLowerCase()) {
        case 'add':
        case 'invite':
        case 'welcome':
        case 'bienvenida':
        case 'benvenuto':       
            act = 'add'
            eventText = "𝐛𝐞𝐧𝐯𝐞𝐧𝐮𝐭𝐨"
            break
        case 'bye':
        case 'kick':
        case 'leave':
        case 'remove':
        case 'sacar':
        case 'addio':
            act = 'remove'
            eventText = "𝐚𝐝𝐝𝐢𝐨"
            break
        case 'promote':
        case 'daradmin':
        case 'darpoder':
        case 'promozione':
        case 'p':       
            act = 'promote'
            eventText = "𝐩𝐫𝐨𝐦𝐨𝐳𝐢𝐨𝐧𝐞"
            break
        case 'demote':
        case 'quitaradmin':
        case 'quitarpoder':
        case 'retrocessione':
        case 'r':       
            act = 'demote'
            eventText = "𝐫𝐞𝐭𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐨𝐧𝐞"
            break
        default:
            throw 'ⓘ 𝐈𝐧𝐬𝐞𝐫𝐢𝐬𝐜𝐢 𝐮𝐧𝐚 𝐨𝐩𝐳𝐢𝐨𝐧𝐞 𝐯𝐚𝐥𝐢𝐝𝐚'
    }
    m.reply(`ⓘ 𝐒𝐢𝐦𝐮𝐥𝐚𝐳𝐢𝐨𝐧𝐞 ${eventText}...`)
    if (act) return conn.participantsUpdate({
        id: m.chat,
        participants: part,
        action: act
    })
}
handler.help = ['simula <evento> [@mention]','sim <evento>'] 
handler.tags = ['owner']
handler.command = /^sim|simula$/i
handler.group = true
export default handler