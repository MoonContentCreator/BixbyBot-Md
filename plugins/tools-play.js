import fetch from "node-fetch"
import yts from "yt-search"
import ytdl from 'ytdl-core'
import axios from 'axios'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
    let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality   
    
    if (!text) throw `> ⓘ 𝐔𝐬𝐨 𝐝𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨:\n> ${usedPrefix + command} Daddy Yankee - Con Calma`
    
    try {
        const yt_play = await search(args.join(" "))
        let additionalText = ''
        
        if (command === 'play') {
            additionalText = `𝐝𝐞𝐥𝐥'𝐚𝐮𝐝𝐢𝐨`
        } else if (command === 'video') {
            additionalText = '𝐝𝐞𝐥 𝐯𝐢𝐝𝐞𝐨'
        }
        
        let nomeDelBot = global.db.data.nomedelbot || `𝐁𝐢𝐱𝐛𝐲𝐁𝐨𝐭-𝐌𝐝 🔮`
        
const BixbyChar = (str) => {
return str.split('').map(char => {
switch (char) {
case 'A': return '𝐀';
case 'B': return '𝐁';
case 'C': return '𝐂';
case 'D': return '𝐃';
case 'E': return '𝐄';
case 'F': return '𝐅';
case 'G': return '𝐆';
case 'H': return '𝐇';
case 'I': return '𝐈';
case 'J': return '𝐉';
case 'K': return '𝐊';
case 'L': return '𝐋';
case 'M': return '𝐌';
case 'N': return '𝐍';
case 'O': return '𝐎';
case 'P': return '𝐏';
case 'Q': return '𝐐';
case 'R': return '𝐑';
case 'S': return '𝐒';
case 'T': return '𝐓';
case 'U': return '𝐔';
case 'V': return '𝐕';
case 'W': return '𝐖';
case 'X': return '𝐗';
case 'Y': return '𝐘';
case 'Z': return '𝐙';
case 'a': return '𝐚';
case 'b': return '𝐛';
case 'c': return '𝐜';
case 'd': return '𝐝';
case 'e': return '𝐞';
case 'f': return '𝐟';
case 'g': return '𝐠';
case 'h': return '𝐡';
case 'i': return '𝐢';
case 'j': return '𝐣';
case 'k': return '𝐤';
case 'l': return '𝐥';
case 'm': return '𝐦';
case 'n': return '𝐧';
case 'o': return '𝐨';
case 'p': return '𝐩';
case 'q': return '𝐪';
case 'r': return '𝐫';
case 's': return '𝐬';
case 't': return '𝐭';
case 'u': return '𝐮';
case 'v': return '𝐯';
case 'w': return '𝐰';
case 'x': return '𝐱';
case 'y': return '𝐲';
case 'z': return '𝐳';
default: return char;
        }
    }).join('');
};
        
        const formattedText = BixbyChar(`
──────────────
- 🗣 ${BixbyChar(yt_play[0].author.name)}
- 🔖 ${BixbyChar(yt_play[0].title)}
- 🕛 ${secondString(yt_play[0].duration.seconds)}
- 🟢 𝐈𝐧𝐯𝐢𝐨 ${additionalText} 𝐢𝐧 𝐜𝐨𝐫𝐬𝐨...
──────────────`);
        
        await conn.sendMessage(m.chat, { text: formattedText, contextInfo: { externalAdReply: { title: yt_play[0].title, body: nomeDelBot, thumbnailUrl: yt_play[0].thumbnail, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true } } }, { quoted: m });
        
        if (command == 'play') {        
            try {
                let q = '128kbps'
                let v = yt_play[0].url
                const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
                const dl_url = await yt.audio[q].download()
                const ttl = await yt.title
                const size = await yt.audio[q].fileSizeH
                
                await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg' }, { quoted: m})
                
            } catch {
                try {
                    const dataRE = await fetch(`https://api.akuari.my.id/downloader/youtube?link=${yt_play[0].url}`)
                    const dataRET = await dataRE.json()
                    
                    await conn.sendMessage(m.chat, { audio: { url: dataRET.mp3[1].url }, mimetype: 'audio/mpeg' }, { quoted: m})
                    
                } catch {
                    try {
                        let humanLol = await fetch(`https://api.lolhuman.xyz/api/ytplay?apikey=${lolkeysapi}&query=${yt_play[0].title}`)
                        let humanRET = await humanLol.json()
                        
                        await conn.sendMessage(m.chat, { audio: { url: humanRET.result.audio.link}, mimetype: 'audio/mpeg' }, { quoted: m})
                        
                    } catch {     
                        try {
                            let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`)    
                            let lolh = await lolhuman.json()
                            let n = lolh.result.title || 'error'
                            
                            await conn.sendMessage(m.chat, { audio: { url: lolh.result.link}, mimetype: 'audio/mpeg' }, { quoted: m})
                            
                        } catch {   
                            try {
                                let searchh = await yts(yt_play[0].url)
                                let __res = searchh.all.map(v => v).filter(v => v.type == "video")
                                let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
                                let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
                                
                                await conn.sendMessage(m.chat, { audio: { url: ress.url}, mimetype: 'audio/mpeg' }, { quoted: m})
                                
                            } catch {
                            }
                        }
                    }
                }
            }
        }  

        if (command == 'video') {
            try {
                let qu = '360'
                let q = qu + 'p'
                let v = yt_play[0].url
                const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
                const dl_url = await yt.video[q].download()
                const ttl = await yt.title
                const size = await yt.video[q].fileSizeH
                
                await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `${ttl}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
                
            } catch {   
                try {  
                    let mediaa = await ytMp4(yt_play[0].url)
                    
                    await conn.sendMessage(m.chat, { video: { url: mediaa.result }, fileName: `error.mp4`, caption: `_${wm}_`, thumbnail: mediaa.thumb, mimetype: 'video/mp4' }, { quoted: m })     
                    
                } catch {  
                    try {
                        let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`)    
                        let lolh = await lolhuman.json()
                        let n = lolh.result.title || 'error'
                        let n2 = lolh.result.link
                        let n3 = lolh.result.size
                        let n4 = lolh.result.thumbnail
                        
                        await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `${n}`, thumbnail: await fetch(n4) }, { quoted: m })
                        
                    } catch {
                    }
                }
            }
        }
    } catch(error) {
        console.error(error);
    }
}

handler.command = ['play', 'video']

export default handler

async function search(query, options = {}) {
    const search = await yts.search({ query, hl: "it", gl: "IT", ...options });
    return search.videos
}

function MilesNumber(number) {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = "$1.";
    let arr = number.toString().split(".");
    arr[0] = arr[0].replace(exp, rep);
    return arr[1] ? arr.join(".") : arr[0]
}

function secondString(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " giorno, " : " giorni, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " ora, " : " ore, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minuti, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " secondo" : " secondi") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}