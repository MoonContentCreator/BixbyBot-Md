//test fabri115 
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import './config.js';
import './api.js';
import { createRequire } from "module"; 
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { platform } from 'process'
import * as ws from 'ws';
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, rmSync, watch } from 'fs';
import yargs from 'yargs';
import { spawn } from 'child_process';
import lodash from 'lodash';
import chalk from 'chalk';
import syntaxerror from 'syntax-error';
import { tmpdir } from 'os';
import { format } from 'util';
import P from 'pino';
import pino from 'pino';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { Low, JSONFile } from 'lowdb';
import { mongoDB, mongoDBV2 } from './lib/mongoDB.js';
import store from './lib/store.js'
import { error } from 'console';
const { DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion } = await import('@adiwajshing/baileys')
const { CONNECTING } = ws
const { chain } = lodash
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

protoType()
serialize()

global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

global.timestamp = { start: new Date }
global.videoList = [];
global.videoListXXX = [];

const __dirname = global.__dirname(import.meta.url)

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.prefix = new RegExp('^[' + (opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©️®️:;?&.\\-.@aA').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`))

global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(async function () {
if (!global.db.READ) {
clearInterval(this)
resolve(global.db.data == null ? global.loadDatabase() : global.db.data)
}
}, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read().catch(console.error)
global.db.READ = null
global.db.data = {
users: {},
chats: {},
stats: {},
msgs: {},
sticker: {},
settings: {},
...(global.db.data || {})
}
global.db.chain = chain(global.db.data)
}
loadDatabase()

/* Creditos a Otosaka (https://wa.me/51993966345) */

global.chatgpt = new Low(new JSONFile(path.join(__dirname, "/db/chatgpt.json")));
global.loadChatgptDB = async function loadChatgptDB() {
if (global.chatgpt.READ)
return new Promise((resolve) =>
setInterval(async function () {
if (!global.chatgpt.READ) {
clearInterval(this);
resolve( global.chatgpt.data === null ? global.loadChatgptDB() : global.chatgpt.data );
}}, 1 * 1000));
if (global.chatgpt.data !== null) return;
global.chatgpt.READ = true;
await global.chatgpt.read().catch(console.error);
global.chatgpt.READ = null;
global.chatgpt.data = {
users: {},
...(global.chatgpt.data || {}),
};
global.chatgpt.chain = lodash.chain(global.chatgpt.data);
};
loadChatgptDB();

/*------------------------------------------------*/

global.authFile = `MysticSession`
const { state, saveState, saveCreds } = await useMultiFileAuthState(global.authFile)
const msgRetryCounterMap = MessageRetryMap => { }
let { version } = await fetchLatestBaileysVersion();

const connectionOptions = {
printQRInTerminal: true,
patchMessageBeforeSending: (message) => {
const requiresPatch = !!( message.buttonsMessage || message.templateMessage || message.listMessage );
if (requiresPatch) { message = { viewOnceMessage: { message: { messageContextInfo: { deviceListMetadataVersion: 2, deviceListMetadata: {}, }, ...message, },},};}
return message;},
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg.message || undefined }
return { conversation: "hello, i'm Fabri115" }},   
msgRetryCounterMap,
logger: pino({ level: 'silent' }),
auth: state,
browser: ['𝐁𝐢𝐱𝐛𝐲-𝐁𝐨𝐭-𝐌𝐝 𝐛𝐞𝐭𝐚 𝟏.𝟔','Safari','9.7.0'],
version,
defaultQueryTimeoutMs: undefined
}

global.conn = makeWASocket(connectionOptions)
conn.isInit = false

if (!opts['test']) {
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp', "jadibts"], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])))
}, 30 * 1000)}

if (opts['server']) (await import('./server.js')).default(global.conn, PORT)

   
     /* Y ese fue el momazo mas bueno del mundo
        Aunque no dudara tan solo un segundo
        Mas no me arrepiento de haberme reido
        Por que la grasa es un sentimiento
        Y ese fue el momazo mas bueno del mundo
        Aunque no dudara tan solo un segundo
        que me arrepiento de ser un grasoso
        Por que la grasa es un sentimiento
        - El waza 👻👻👻👻 (Aiden)            */
   
   /* Yo tambien se hacer momazos Aiden... 
      ahi te va el ajuste de los borrados 
      inteligentes de las sesiones y de los sub-bot  
      By (Rey Endymion 👺👍🏼) */
/*ninguno es mejor que tilin god 
atte: sk1d*/
       
/
function purgeSession() {
    let prekey = []
    let directorio = readdirSync("./MysticSession")
    let filesFolderPreKeys = directorio.filter(file => {
        return file.startsWith('pre-key-')
    })
    prekey = [...prekey, ...filesFolderPreKeys]
    filesFolderPreKeys.forEach(files => {
    unlinkSync(`./MysticSession/${files}`)
})

}  
function purgeSessionSB() {
let listaDirectorios = readdirSync('./jadibts/');
//console.log(listaDirectorios)
      let SBprekey = []
listaDirectorios.forEach(filesInDir => {
    let directorio = readdirSync(`./jadibts/${filesInDir}`)
    //console.log(directorio)
    let DSBPreKeys = directorio.filter(fileInDir => {
    return fileInDir.startsWith('pre-key-')
    })
    SBprekey = [...SBprekey, ...DSBPreKeys]
    DSBPreKeys.forEach(fileInDir => {
        unlinkSync(`./jadibts/${filesInDir}/${fileInDir}`) 
    })
    })
    
}

function purgeOldFiles() {
const directories = ['./MysticSession/', './jadibts/']
const oneHourAgo = Date.now() - (60 * 60 * 1000) 
directories.forEach(dir => {
    readdirSync(dir, (err, files) => {
        if (err) throw err
        files.forEach(file => {
            const filePath = path.join(dir, file)
            stat(filePath, (err, stats) => {
                if (err) throw err;
                if (stats.isFile() && stats.mtimeMs < oneHourAgo && file !== 'creds.json') { 
                    unlinkSync(filePath, err => {  
                        if (err) throw err
                        console.log(`Archivo ${file} eliminato`)
                    })
                } else {  
                    console.log(`Archivo ${file} non eliminato`) 
                } 
            }) 
        }) 
    }) 
})
}

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin } = update
global.stopped = connection    
if (isNewLogin) conn.isInit = true
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (code && code !== DisconnectReason.loggedOut && conn?.ws.readyState !== CONNECTING) {
console.log(await global.reloadHandler(true).catch(console.error))
global.timestamp.connect = new Date
}
if (global.db.data == null) loadDatabase()
if (update.qr != 0 && update.qr != undefined) {
console.log(chalk.yellow('𝐒𝐜𝐚𝐧𝐬𝐢𝐨𝐧𝐚 𝐪𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐝𝐢𝐜𝐞 𝐐𝐑, 𝐢𝐥 𝐜𝐨𝐝𝐢𝐜𝐞 𝐐𝐑 𝐬𝐜𝐚𝐝𝐞 𝐭𝐫𝐚 𝟔𝟎 𝐬𝐞𝐜𝐨𝐧𝐝𝐢.'))
}
if (connection == 'open') {
await conn.groupAcceptInvite('DrnPDROIs6W8ZGCLPvKL0t')
console.log(chalk.yellow('\n\n\n✧ 𝐁𝐈𝐗𝐁𝐘 𝐕𝐈𝐒𝐈𝐎𝐍 𝐂𝐎𝐍𝐍𝐄𝐒𝐒𝐎 𝐂𝐎𝐑𝐑𝐄𝐓𝐓𝐀𝐌𝐄𝐍𝐓𝐄 𝐀 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 🔮 \n\n\n'))}

if (connection == 'close') {
console.log(chalk.yellow(`🚩𝐂𝐨𝐧𝐧𝐞𝐬𝐬𝐢𝐨𝐧𝐞 𝐩𝐞𝐫𝐬𝐚, 𝐞𝐥𝐢𝐦𝐢𝐧𝐚 𝐥𝐚 𝐜𝐚𝐫𝐭𝐞𝐥𝐥𝐚 ${global.authFile} 𝐞 𝐫𝐢𝐬𝐜𝐚𝐧𝐬𝐢𝐨𝐧𝐚 𝐢𝐥 𝐜𝐨𝐝𝐢𝐜𝐞 𝐐𝐑`))}
}

process.on('uncaughtException', console.error)

let isInit = true;
let handler = await import('./handler.js')
global.reloadHandler = async function (restatConn) {
try {
const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
} catch (e) {
console.error(e)
}
if (restatConn) {
const oldChats = global.conn.chats
try { global.conn.ws.close() } catch { }
conn.ev.removeAllListeners()
global.conn = makeWASocket(connectionOptions, { chats: oldChats })
isInit = true
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
  
conn.welcome = '@user 𝐛𝐞𝐧𝐯𝐞𝐧𝐮𝐭𝐨/𝐚 𝐢𝐧 @subject'
conn.bye = '@user 𝐬𝐞 𝐧𝐞 𝐯𝐚'
conn.spromote = '@user 𝐡𝐚 𝐢 𝐩𝐨𝐭𝐞𝐫𝐢'
conn.sdemote = '@user 𝐧𝐨𝐧 𝐡𝐚 𝐩𝐢𝐮 𝐢 𝐩𝐨𝐭𝐞𝐫𝐢'
conn.sIcon = '𝐢𝐦𝐦𝐚𝐠𝐢𝐧𝐞 𝐠𝐫𝐮𝐩𝐩𝐨 𝐦𝐨𝐝𝐢𝐟𝐢𝐜𝐚𝐭𝐚'
conn.sRevoke = '𝐥𝐢𝐧𝐤 𝐫𝐞𝐢𝐦𝐩𝐨𝐬𝐭𝐚𝐭𝐨, 𝐧𝐮𝐨𝐯𝐨 𝐥𝐢𝐧𝐤: @revoke'
conn.handler = handler.handler.bind(global.conn)
conn.participantsUpdate = handler.participantsUpdate.bind(global.conn)
conn.groupsUpdate = handler.groupsUpdate.bind(global.conn)
conn.onDelete = handler.deleteUpdate.bind(global.conn)
conn.onCall = handler.callUpdate.bind(global.conn)
conn.connectionUpdate = connectionUpdate.bind(global.conn)
conn.credsUpdate = saveCreds.bind(global.conn, true)

const currentDateTime = new Date();
const messageDateTime = new Date(conn.ev);
if (currentDateTime >= messageDateTime) {
    let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
  //console.log(chats, conn.ev); 
} else {
    let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])}
 //console.log(chats, 'Omitiendo mensajes en espera.'); }

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('group-participants.update', conn.participantsUpdate)
conn.ev.on('groups.update', conn.groupsUpdate)
conn.ev.on('message.delete', conn.onDelete)
conn.ev.on('call', conn.onCall)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}

/*

const pluginFolder = join(__dirname, './plugins');
const pluginFilter = filename => /\.js$/.test(filename);
global.plugins = {};

async function filesInit(folder) {
  for (let filename of readdirSync(folder).filter(pluginFilter)) {
    try {
      let file = join(folder, filename);
      const module = await import(file);
      global.plugins[file] = module.default || module;
    } catch (e) {
      console.error(e);
      delete global.plugins[filename];
    }
  }

  for (let subfolder of readdirSync(folder)) {
    const subfolderPath = join(folder, subfolder);
    if (statSync(subfolderPath).isDirectory()) {
      await filesInit(subfolderPath);
    }
  }
}

await filesInit(pluginFolder).then(_ => Object.keys(global.plugins)).catch(console.error);

*/

const pluginFolder = global.__dirname(join(__dirname, './plugins/index'))
const pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
async function filesInit() {
for (let filename of readdirSync(pluginFolder).filter(pluginFilter)) {
try {
let file = global.__filename(join(pluginFolder, filename))
const module = await import(file)
global.plugins[filename] = module.default || module
} catch (e) {
conn.logger.error(e)
delete global.plugins[filename]
}}}
filesInit().then(_ => Object.keys(global.plugins)).catch(console.error)

global.reload = async (_ev, filename) => {
if (pluginFilter(filename)) {
let dir = global.__filename(join(pluginFolder, filename), true)
if (filename in global.plugins) {
if (existsSync(dir)) conn.logger.info(` updated plugin - '${filename}'`)
else {
conn.logger.warn(`deleted plugin - '${filename}'`)
return delete global.plugins[filename]
}
} else conn.logger.info(`new plugin - '${filename}'`)
let err = syntaxerror(readFileSync(dir), filename, {
sourceType: 'module',
allowAwaitOutsideFunction: true
})
if (err) conn.logger.error(`syntax error while loading '${filename}'\n${format(err)}`)
else try {
const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`))
global.plugins[filename] = module.default || module
} catch (e) {
conn.logger.error(`error require plugin '${filename}\n${format(e)}'`)
} finally {
global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
}}}
Object.freeze(global.reload)
watch(pluginFolder, global.reload)
await global.reloadHandler()
async function _quickTest() {
let test = await Promise.all([
spawn('ffmpeg'),
spawn('ffprobe'),
spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
spawn('convert'),
spawn('magick'),
spawn('gm'),
spawn('find', ['--version'])
].map(p => {
return Promise.race([
new Promise(resolve => {
p.on('close', code => {
resolve(code !== 127)
})}),
new Promise(resolve => {
p.on('error', _ => resolve(false))
})])}))
let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
let s = global.support = { ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find }
Object.freeze(global.support)
}
setInterval(async () => {

if (stopped == 'close') return        
const status = global.db.data.settings[conn.user.jid] || {}
let _uptime = process.uptime() * 1000    
let uptime = clockString(_uptime)
let bio = `𝐁𝐢𝐱𝐛𝐲𝐁𝐨𝐭-𝐌𝐝 Ꮻ𝐍𝐋𝕀𝐍𝚵 𝐃𝚲 ${uptime} https://github.com/Fabri115/botwhaita `
await conn.updateProfileStatus(bio).catch(_ => _)
}, 60000)
function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [d, ' 𝐆𝕀Ꮻ𝐑𝐍𝕀 ️', h, ' Ꮻ𝐑𝚵 ', m, ' 𝐌𝕀𝐍𝐔𝐓𝕀 ', s, ' 𝐒𝚵𝐂Ꮻ𝐍𝐃𝕀 '].map(v => v.toString().padStart(2, 0)).join('')}
_quickTest()
.then(() => conn.logger.info(`𝐂𝐚𝐫𝐢𝐜𝐚𝐦𝐞𝐧𝐭𝐨．．．\n`))
.catch(console.error)