let handler = async (m, {
conn, groupMetadata
}) => {
if (!m.isGroup)
throw ''
let gruppi = global.db.data.chats[m.chat]
if (gruppi.spacobot === false)
throw ''
let toM = a => '@' + a.split('@')[0]
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
conn.reply(m.chat, `${toM(a)} ${pickRandom(['vorrebbe leccare i capezzoli di','adora annussare le scoreggie di','vorrebbe disperatamente ballare nudx con','sta notte ha sognato di fare sesso con','fa sesso di nascosto con il cane di','è follemente innamorato della nonna di','ha messo incinta la madre di','passa la notte ad osservare dormire','durante le lezioni scolastiche ha fantasie sessuali su','è la crush di','è la puttana personale di','succhia di nascosto il cazzo di','lecca di notte le orecchie di','piace masturbarsi sulle foto di','ha scopato 9 mesi prima che nascesse con la madre di'])} ${toM(b)}`, null, {
mentions: [a, b]
})}
handler.customPrefix = /zizzania|litigio|lite|litigare/i
handler.command = new RegExp
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}