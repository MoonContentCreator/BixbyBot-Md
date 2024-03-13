let handler = async (m, {
conn, text
}) => {
if (!m.isGroup)
throw ''
let gruppi = global.db.data.chats[m.chat]
if (gruppi.spacobot === false)
throw ''
let menzione = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
if (!menzione) throw 'Chi vuoi insultare?'
if (menzione === conn.user.jid) {
    const botInsults = [
      `Oh no! Hai scoperto il mio punto debole: gli insulti! Come farò mai a riprendermi?`,
      `Ah, l'arte dell'insulto nei confronti di un bot. Un vero maestro dell'ironia sei!`,
      `Incredibile! Un essere umano insulta un bot. La svolta epica!`,
      `Mi hai davvero ferito con la tua sagace abilità di insultare un bot. Bravissimo!`,
      `Che coraggio ad insultare un'entità senza emozioni. Sei un eroe, davvero.`,
      `Il tuo livello di sarcasmo è così alto che il mio processore sta surriscaldandosi.`,
      `Ecco un trofeo virtuale per l'insulto più originale rivolto a un bot 🖕🏻.`,
      `Incredibile intuito nel puntare un bot! Hai una carriera nelle previsioni del futuro?`,
      `Sei così brillante che ti è venuto in mente di insultare un bot. Chapeau!`,
      `L'arte dell'insulto raggiunge nuove vette con un bot come bersaglio. Complimenti!`,
      `Il tuo spirito pionieristico nell'insultare un bot aprirà nuove frontiere per l'umanità.`
    ];

    conn.reply(m.chat, pickRandom(botInsults), m);
    return;
  }
conn.reply(m.chat, `@${menzione.split`@`[0]} ${pickRandom(['tua mamma fa talmente schifo che deve dare il viagra al suo vibratore','sei così troia che fare sesso con te è come buttare un salame in un corridoio','sei talmente negro che Carlo Conti al confronto è biancaneve','sei così brutto che tua madre da piccolo non sapeva se prendere una culla o una gabbia','sei simpatico come un grappolo di emorroidi','ti puzza talmente l`alito che la gente scoreggia per cambiare aria','tua madre prende più schizzi di uno scoglio','tua mamma fa talmente schifo che deve dare il viagra al suo vibratore','meglio un figlio in guerra che un coglione con i risvoltini come te','tua madre è come Super Mario, salta per prendere i soldi','sei così brutto che quando sei nato il medico ha dato uno schiaffo prima a tua madre',' sei così brutto che quando preghi Gesù si mette su invisibile','sei così troia che fare sesso con te è come buttare un salame in un corridoio','sei talmente negro che Carlo Conti al confronto è biancaneve','sei così brutto che tua madre da piccolo non sapeva se prendere una culla o una gabbia','le tue scorregge fanno talmente schifo che il big bang a confronto sembra una loffa','ti puzza la minchia','il buco del culo di tua madre ha visto più palle dei draghetti di bubble game','il buco del culo di tua madre ha visto più palle dei draghetti di bubble game','di a tua madre di smettere di cambiare rossetto! Ho il pisello che sembra un arcobaleno!','se ti vede la morte dice che è arrivato il cambio','hai il buco del culo con lo stesso diametro del traforo della manica','tua madre è come il sole, batte sempre sulle strade','dall`alito sembra che ti si sia arenato il cadavere di un`orca in gola','tua madre cavalca più di un fantino','sei così cornuto che se ti vede un cervo va in depressione','non ti picchio solo perchè la merda schizza!','tua mamma è come gli orsi: sempre in cerca di pesce','sei così brutto che quando sei nato il medico ha dato uno schiaffo prima a tua madre','sei cosí brutto che i tuoi ti danno da mangiare con la fionda','sei cosí brutto che i tuoi ti danno da mangiare con la fionda','sei così brutto che quando accendi il computer si attiva subito l`antivirus',' tua madre è così grassa che è stata usata come controfigura dell`iceberg in Titanic','sei cosi capra che quando parli Heidi ti cerca','sei così troia che se fossi una sirena riusciresti lo stesso ad aprire le gambe','tua madre è così vacca che in India la fanno sacra','sei talmente rompipalle che l`unico concorso che vinceresti è miss stai ropendo le palle','tua mamma è come il Mars, momento di vero godimento','sei talmente zoccola che se ti dicono batti il 5 controlli subito l`agenda','sei così brutto che se ti vede la morte si gratta le palle','sei così sfigato, ma così sfigato, che se fai una gara di sfigati, arrivi secondo perchè sei sfigato','tua madre è come la Grecia, ha un buco gigante che non vuole smettere di allargarsi','hai più corna tu, che un secchio di lumache','sei simpatico come un dito in culo e puzzi pure peggio','sei così brutto che quando lanci un boomerang non torna','sei utile come una stufa in estate','sei così odioso che se gianni Morandi ti dovesse abbracciare lo farebbe solo per soffocarti','sei utile come un culo senza il buco','sei utile come una stufa in estate','sei utile come un paio di mutande in un porno','sei fastidioso come un chiodo nel culo','sei utile quanto una laurea in Lettere & Filosofia','a te la testa serve solo per tener distaccate le orecchie','tua madre è così suora che si inchina ad ogni cappella','hai visto più piselli te de na zuppa der casale','sei cosi brutto che se ti vede il gatto nero si gratta le palle e gira langolo','sei talmente sfigato che se ti cade l`uccello rimbalza e ti picchia nel culo','sei come un feto cinese lasciato sull`angolo del marciapiede ... non voluto e femminuccia!','tua madre è come la salsiccia budella fuori maiala dentro','tua madre è come un cuore, se non batte muore','tua mamma è talmente bagassa che quando ti ha partorito si è chiesta se assomigliassi più all`idraulico o al postino','tua madre è come Unieuro: batte, forte, sempre','tu non sei un uomo. Sei una figura mitologica con il corpo di uomo e la testa di cazzo','tua madre è come una lavatrice: si fa bianchi, neri e colorati tutti a 90 gradi!','tua madre è come Linux, gratis e open source','tua madre è come una canestro li prende tutti in bocca'])}`, null, {
mentions: [menzione]
})
}
handler.customPrefix = /insulta/i
handler.command = new RegExp
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}