const _0x3e3258 = _0x15b8;
(function (_0x288139, _0x11079d) {
    const _0x161f30 = _0x15b8, _0x4235dd = _0x288139();
    while (!![]) {
        try {
            const _0x476ce4 = parseInt(_0x161f30(0x1dc)) / (0x50 * -0x42 + 0x15c * 0xf + -0x1 * -0x3d) + parseInt(_0x161f30(0x1c0)) / (0x894 + 0x1f13 + -0x27a5) + -parseInt(_0x161f30(0x1cc)) / (0x2210 + 0x2 * -0xc92 + -0x1 * 0x8e9) * (parseInt(_0x161f30(0x1fb)) / (0xfa6 + -0x166 + -0xe3c)) + -parseInt(_0x161f30(0x1eb)) / (0x1ec7 + 0x9e8 + 0xa * -0x411) + -parseInt(_0x161f30(0x1e1)) / (-0x11 * -0x131 + 0x9 * 0x125 + -0x1e88) + parseInt(_0x161f30(0x20c)) / (-0xfa * -0xa + 0x22 * 0x19 + -0x1 * 0xd0f) * (parseInt(_0x161f30(0x1c3)) / (0xec7 + 0xc39 + -0x8 * 0x35f)) + parseInt(_0x161f30(0x1f5)) / (0x19e7 + 0x222a + -0x3c08);
            if (_0x476ce4 === _0x11079d)
                break;
            else
                _0x4235dd['push'](_0x4235dd['shift']());
        } catch (_0x5efa0a) {
            _0x4235dd['push'](_0x4235dd['shift']());
        }
    }
}(_0x5b83, -0x1ab18 + 0x4c * 0x1e2 + 0x505ca));
import { createHash } from 'crypto';
import _0x23649a from 'awesome-phonenumber';
import {
    canLevelUp,
    xpRange
} from '../lib/levelling.js';
import _0x113572 from 'node-fetch';
let handler = async (_0x20ff63, {
    conn: _0x4806c5,
    usedPrefix: _0x35577c,
    command: _0x500004
}) => {
    const _0x36e21b = _0x15b8, _0x1fa4f4 = {
            'hVlJb': _0x36e21b(0x1f6),
            'ZqjUo': function (_0x35ac99, _0x3f9614) {
                return _0x35ac99 in _0x3f9614;
            },
            'lmZqb': 'image',
            'DwnTH': _0x36e21b(0x1b2),
            'mjMUI': function (_0x31d110, _0x54d7ff) {
                return _0x31d110 !== _0x54d7ff;
            },
            'eHyoD': function (_0x5a2661, _0x244943) {
                return _0x5a2661 !== _0x244943;
            },
            'MGOju': _0x36e21b(0x1f7),
            'nmXap': function (_0x40617d, _0x2873d9) {
                return _0x40617d(_0x2873d9);
            },
            'OHPyy': function (_0x19cc4a, _0x312a29, _0x2b4d12) {
                return _0x19cc4a(_0x312a29, _0x2b4d12);
            },
            'QbzAm': function (_0x18397a, _0x2c58c5) {
                return _0x18397a + _0x2c58c5;
            },
            'bzAzA': function (_0x796c91, _0x33d504) {
                return _0x796c91 - _0x33d504;
            },
            'PmqLT': _0x36e21b(0x1fc),
            'Lntrn': _0x36e21b(0x1c1),
            'gzNrs': function (_0x1965cd, _0x584f63) {
                return _0x1965cd === _0x584f63;
            },
            'QJIco': function (_0x1528b3, _0x5ea333) {
                return _0x1528b3 * _0x5ea333;
            },
            'JhJMu': function (_0x2899b9, _0x1c2633) {
                return _0x2899b9(_0x1c2633);
            },
            'pXrVs': _0x36e21b(0x1fe),
            'yALWh': _0x36e21b(0x1c6),
            'RPnuq': _0x36e21b(0x1b5),
            'ugqSf': function (_0x427376, _0x2a15a8) {
                return _0x427376(_0x2a15a8);
            },
            'TMJcZ': _0x36e21b(0x208),
            'XzhWp': function (_0x1e8cc8, _0x5bc76d) {
                return _0x1e8cc8(_0x5bc76d);
            },
            'hjimP': _0x36e21b(0x1e8),
            'lhOtP': _0x36e21b(0x1ad)
        };
    let _0x1b6eab = _0x20ff63['quoted'] ? _0x20ff63['quoted'][_0x36e21b(0x20f)] : _0x20ff63['mentionedJid'] && _0x20ff63[_0x36e21b(0x1c2)][0x12dd + 0x17 * -0x4f + -0xbc4] ? _0x20ff63['mentionedJid'][-0x3 * 0xaaf + -0x2559 + 0x4566] : _0x20ff63['fromMe'] ? _0x4806c5[_0x36e21b(0x1cf)][_0x36e21b(0x1df)] : _0x20ff63[_0x36e21b(0x20f)];
    if (!_0x1fa4f4[_0x36e21b(0x1a9)](_0x1b6eab, global['db'][_0x36e21b(0x201)][_0x36e21b(0x1f4)]))
        throw '*L\x27utente\x20deve\x20ancora\x20scrivere\x20un\x20messaggio*';
    global['db'][_0x36e21b(0x201)][_0x36e21b(0x1f4)][_0x1b6eab][_0x36e21b(0x212)] = global['db'][_0x36e21b(0x201)]['users'][_0x1b6eab][_0x36e21b(0x212)] || 0x2 * -0x32b + -0x9 * 0x389 + 0x2627, global['db'][_0x36e21b(0x201)]['users'][_0x1b6eab][_0x36e21b(0x212)] += 0x437 * -0x8 + 0x8bb * 0x3 + 0x788;
    const _0x23161f = await _0x4806c5['profilePictureUrl'](_0x1b6eab, _0x1fa4f4['lmZqb'])['catch'](_0x48de05 => null) || _0x1fa4f4[_0x36e21b(0x1b0)];
    let _0x4d85b8;
    if (_0x1fa4f4[_0x36e21b(0x1bc)](_0x23161f, _0x1fa4f4['DwnTH'])) {
        if (_0x1fa4f4[_0x36e21b(0x209)](_0x36e21b(0x1f7), _0x1fa4f4['MGOju'])) {
            const _0x395b18 = _0x4fa4f4[_0x36e21b(0x1b1)](/https:\/\/(?:www\.)?instagram\.com\/([^/?]+)/);
            if (_0x395b18)
                return _0x36e21b(0x1d5) + _0x395b18[0x2480 + -0x26bc + 0x23d];
            else
                return _0x4ede0a[_0x36e21b(0x207)](_0x1fa4f4[_0x36e21b(0x1e0)]) ? _0x36e21b(0x1d5) + _0x1f1cbf['replace'](_0x1fa4f4[_0x36e21b(0x1e0)], '') : _0x36e21b(0x1d5) + _0x445aec;
        } else
            _0x4d85b8 = await (await _0x1fa4f4['nmXap'](_0x113572, _0x23161f))[_0x36e21b(0x210)]();
    } else
        _0x4d85b8 = await (await _0x113572(_0x36e21b(0x1ef)))[_0x36e21b(0x210)]();
    let _0x2f599c = global['db']['data'][_0x36e21b(0x1f4)][_0x1b6eab], {
            name: _0x18e522,
            exp: _0x17dfc4,
            messaggi: _0x2f4109,
            lastclaim: _0x2664d7,
            registered: _0x192614,
            regTime: _0x2cbb15,
            age: _0x84e3da,
            level: _0x2fb973,
            role: _0x2ae827,
            warn: _0x569a51,
            nomeinsta: _0x41aa37
        } = global['db'][_0x36e21b(0x201)][_0x36e21b(0x1f4)][_0x1b6eab], _0x4b4174 = await _0x4806c5[_0x36e21b(0x1d2)](_0x20ff63[_0x36e21b(0x20f)]), {
            min: _0x258467,
            xp: _0x5b3dd1,
            max: _0x3ecd66
        } = _0x1fa4f4['OHPyy'](xpRange, _0x2f599c[_0x36e21b(0x1a8)], global[_0x36e21b(0x1aa)]), _0x3d5f0f = _0x4806c5['getName'](_0x1b6eab), _0x37e214 = _0x1fa4f4['QbzAm']('@', _0x20ff63[_0x36e21b(0x20f)][_0x36e21b(0x1ca)](_0x36e21b(0x1d1))[-0x1191 * 0x1 + 0x1c32 + -0xaa1]), _0xc3fc72 = _0x1fa4f4[_0x36e21b(0x1c9)](_0x3ecd66, _0x5b3dd1), _0x347238 = global['prems'][_0x36e21b(0x207)](_0x1b6eab[_0x36e21b(0x1ca)]`@`[-0x2115 + -0x116 * 0x15 + 0x37e3]), _0x558ce1 = _0x1fa4f4[_0x36e21b(0x1e3)](createHash, _0x1fa4f4[_0x36e21b(0x1cb)])['update'](_0x1b6eab)[_0x36e21b(0x1ea)](_0x1fa4f4[_0x36e21b(0x1ff)]), _0xee864 = _0x1fa4f4[_0x36e21b(0x1d9)](_0x569a51, 0xbde * 0x1 + 0x1 * -0x969 + -0x275) ? '👌' : _0x1fa4f4[_0x36e21b(0x1d9)](_0x569a51, 0x15ed + -0x55 * 0x19 + -0x1 * 0xd9f) ? '⚠️' : '‼️', _0x46c0a7 = performance[_0x36e21b(0x1b3)](), _0x29f408 = performance['now'](), _0xe8daa = _0x1fa4f4[_0x36e21b(0x1c9)](_0x29f408, _0x46c0a7)['toFixed'](-0x1a21 + -0x507 + -0x69 * -0x4c), _0x1c2138 = _0x1fa4f4[_0x36e21b(0x1c7)](process[_0x36e21b(0x1b7)](), 0x1 * 0x1492 + -0x1 * 0xa39 + -0x671 * 0x1), _0x38acae = _0x1fa4f4[_0x36e21b(0x1bd)](clockString, _0x1c2138), _0x183d02 = {
            'key': {
                'participants': _0x1fa4f4['pXrVs'],
                'fromMe': ![],
                'id': _0x1fa4f4[_0x36e21b(0x203)]
            },
            'message': {
                'locationMessage': {
                    'name': '𝐏𝐫𝐨𝐟𝐢𝐥𝐨\x20𝐔𝐭𝐞𝐧𝐭𝐞',
                    'jpegThumbnail': await (await _0x1fa4f4[_0x36e21b(0x1e3)](_0x113572, _0x1fa4f4[_0x36e21b(0x20b)]))[_0x36e21b(0x210)](),
                    'vcard': _0x36e21b(0x200)
                }
            },
            'participant': _0x36e21b(0x1fe)
        }, _0x5c0b70 = {
            'key': {
                'participants': _0x1fa4f4[_0x36e21b(0x1ac)],
                'fromMe': ![],
                'id': _0x1fa4f4[_0x36e21b(0x203)]
            },
            'message': {
                'locationMessage': {
                    'name': '𝐔𝐭𝐞𝐧𝐭𝐞\x20𝐏𝐫𝐞𝐦𝐢𝐮𝐦',
                    'jpegThumbnail': await (await _0x1fa4f4[_0x36e21b(0x1dd)](_0x113572, _0x1fa4f4[_0x36e21b(0x1f3)]))[_0x36e21b(0x210)](),
                    'vcard': _0x36e21b(0x200)
                }
            },
            'participant': _0x36e21b(0x1fe)
        }, _0x293fe2 = {
            'key': {
                'participants': _0x1fa4f4[_0x36e21b(0x1ac)],
                'fromMe': ![],
                'id': _0x36e21b(0x1c6)
            },
            'message': {
                'locationMessage': {
                    'name': '𝐏𝐫𝐨𝐟𝐢𝐥𝐨\x20𝐀𝐝𝐦𝐢𝐧',
                    'jpegThumbnail': await (await _0x1fa4f4[_0x36e21b(0x202)](_0x113572, _0x1fa4f4[_0x36e21b(0x20b)]))[_0x36e21b(0x210)](),
                    'vcard': _0x36e21b(0x200)
                }
            },
            'participant': _0x1fa4f4[_0x36e21b(0x1ac)]
        };
    const _0x5d058b = global['db'][_0x36e21b(0x201)][_0x36e21b(0x1f4)][_0x1b6eab][_0x36e21b(0x1de)] ? _0x5c0b70 : _0x2f599c[_0x36e21b(0x1e7)] ? _0x293fe2 : _0x183d02;
    let _0x3ecb5c = _0x2f599c['gruppiincuieadmin'] ? _0x36e21b(0x1f9) + _0x2f599c[_0x36e21b(0x1d8)][_0x36e21b(0x1ca)](';')['map']((_0xe1f2c5, _0x52a874) => _0x36e21b(0x1db) + _0xe1f2c5[_0x36e21b(0x1e2)]())[_0x36e21b(0x1bf)]('\x0a') + _0x36e21b(0x205) : _0x1fa4f4[_0x36e21b(0x1a7)], _0x4a9156 = _0x41aa37 ? _0x1fa4f4[_0x36e21b(0x202)](formatInstagramValue, _0x41aa37) : _0x1fa4f4[_0x36e21b(0x1b8)], _0x4a0582 = _0x41aa37 ? '' : 'ⓘ\x20𝐔𝐬𝐚\x20𝐢𝐥\x20𝐜𝐨𝐦𝐚𝐧𝐝𝐨\x20' + _0x35577c + _0x36e21b(0x1bb);
    const {
        antiToxic: _0xe5ee31,
        antilinkhard: _0x131da4,
        antiPrivate: _0x522a44,
        antitraba: _0xa46edb,
        antiArab: _0x17ad85,
        antiviewonce: _0x545b4d,
        isBanned: _0x31f20b,
        welcome: _0x551160,
        detect: _0x5a1b26,
        sWelcome: _0x560964,
        sBye: _0x5df00f,
        sPromote: _0x45065a,
        sDemote: _0x3dd358,
        antiLink: _0x39d0bd,
        antilinkbase: _0x2a814f,
        antitiktok: _0xff107a,
        sologruppo: _0x2b0601,
        soloprivato: _0x4bddbf,
        antiCall: _0x168eff,
        modohorny: _0x5c8b58,
        gpt: _0x55d18a,
        antiinsta: _0x216631,
        antielimina: _0x296106,
        antitelegram: _0x4e2a73,
        antiSpam: _0x396900,
        autosticker: _0x4e1b14,
        bestemmiometro: _0x2b2c4e,
        comandieseguiti: _0x4b98ff,
        modoadmin: _0x3d5f95,
        audios: _0x1b6c79,
        delete: _0x34e987
    } = global['db'][_0x36e21b(0x201)][_0x36e21b(0x1f2)][_0x20ff63[_0x36e21b(0x1af)]];
    let _0xfc5333 = String[_0x36e21b(0x204)]`${ _0x3ecb5c }
 💬 𝐌𝐞𝐬𝐬𝐚𝐠𝐠𝐢: ${ global['db'][_0x36e21b(0x201)][_0x36e21b(0x1f4)][_0x1b6eab][_0x36e21b(0x1f1)] }
 ${ _0x2b2c4e ? '🤬\x20𝐁𝐞𝐬𝐭𝐞𝐦𝐦𝐢𝐞:\x20' + global['db'][_0x36e21b(0x201)][_0x36e21b(0x1f4)][_0x1b6eab][_0x36e21b(0x1ab)] + '\x0a' : '' }${ _0x2b2c4e ? '\x20' : '' }${ _0xee864 } 𝐖𝐚𝐫𝐧: ${ global['db'][_0x36e21b(0x201)][_0x36e21b(0x1f4)][_0x1b6eab][_0x36e21b(0x1e6)] } / 3
 ${ global['db']['data']['users'][_0x1b6eab]['muto'] ? _0x36e21b(0x1fa) : '' }${ global['db'][_0x36e21b(0x201)]['users'][_0x1b6eab][_0x36e21b(0x20a)] ? '\x20' : '' }${ global['db'][_0x36e21b(0x201)][_0x36e21b(0x1f4)][_0x1b6eab][_0x36e21b(0x1fd)] ? _0x36e21b(0x1cd) : '' }${ global['db']['data']['users'][_0x1b6eab]['banned'] ? '\x20' : '' }${ _0x4b98ff ? _0x36e21b(0x1da) + (global['db']['data'][_0x36e21b(0x1f4)][_0x1b6eab][_0x36e21b(0x212)] || -0x11f7 + 0x1d2 * -0x11 + 0x30e9) + '\x0a' : '' }${ _0x4b98ff ? '\x20' : '' }${ _0x4a9156 ? '' + _0x4a9156 : '' }
──────────────`, _0x3c9725 = _0x3ecb5c + _0x36e21b(0x1c5) + _0x35577c + _0x36e21b(0x1e5) + _0xe8daa + '\x0a>\x20🟢\x20𝐀𝐭𝐭𝐢𝐯𝐢𝐭𝐚\x27\x20:\x20' + _0x38acae + _0x36e21b(0x1d7) + global['db']['data'][_0x36e21b(0x1f4)][_0x1b6eab]['messaggi'] + '\x0a>\x20✅️\x20𝐒𝐜𝐚𝐫𝐢𝐜𝐚\x20𝐢𝐥\x20𝐛𝐨𝐭\x20:\x20https://github.com/MoonContentCreator/BixbyBot-Md\x0a──────────────', _0xcb5eda = _0x1fa4f4['gzNrs'](_0x4806c5[_0x36e21b(0x1cf)][_0x36e21b(0x1df)], _0x1b6eab) ? _0x4a0582 : _0x4a0582, _0x4e710e = _0x1fa4f4[_0x36e21b(0x1d9)](_0x4806c5[_0x36e21b(0x1cf)]['jid'], _0x1b6eab) ? '' + _0x18e522 : '' + _0x18e522, _0x2f367b = global['db']['data'][_0x36e21b(0x1d6)] || _0x36e21b(0x1c8);
    _0x4806c5['sendMessage'](_0x20ff63['chat'], {
        'text': _0x1b6eab === _0x4806c5[_0x36e21b(0x1cf)][_0x36e21b(0x1df)] ? _0x3c9725 : _0xfc5333,
        'contextInfo': {
            'mentionedJid': _0x4806c5[_0x36e21b(0x1ce)](wm),
            'forwardingScore': 0x63,
            'isForwarded': !![],
            'forwardedNewsletterMessageInfo': {
                'newsletterJid': _0x36e21b(0x1b6),
                'serverMessageId': '',
                'newsletterName': '' + _0x2f367b
            },
            'externalAdReply': {
                'title': _0x4e710e,
                'body': _0xcb5eda,
                'mediaType': 0x1,
                'renderLargerThumbnail': ![],
                'previewType': _0x36e21b(0x1d3),
                'thumbnail': _0x4d85b8,
                'sourceUrl': _0x1b6eab === _0x4806c5[_0x36e21b(0x1cf)][_0x36e21b(0x1df)] ? _0x36e21b(0x1c4) : _0x36e21b(0x20e) + _0x1b6eab[_0x36e21b(0x1ca)]('@')[0x4 * -0x169 + -0x109d + 0x1 * 0x1641]
            }
        }
    });
};
handler['help'] = ['bal'], handler[_0x3e3258(0x20d)] = ['xp'], handler[_0x3e3258(0x1b4)] = /^(msg|attività|attivitá|attivita|profilo|info)/i;
export default handler;
function _0x5b83() {
    const _0x29281d = [
        'bzAzA',
        'split',
        'PmqLT',
        '5427LyVBOu',
        '🤖\x20𝐔𝐬𝐨\x20𝐜𝐨𝐦𝐚𝐧𝐝𝐢:\x20Bloccati\x0a',
        'parseMention',
        'user',
        'map',
        '@s.whatsapp.net',
        'getName',
        'PHOTO',
        'npJUk',
        '🤳🏻\x20instagram.com/',
        'nomedelbot',
        '\x0a>\x20💬\x20𝐌𝐞𝐬𝐬𝐚𝐠𝐠𝐢\x20𝐝𝐞𝐥\x20𝐛𝐨𝐭\x20:\x20',
        'gruppiincuieadmin',
        'gzNrs',
        '🎨\x20𝐂𝐨𝐦𝐚𝐧𝐝𝐢\x20𝐞𝐬𝐞𝐠𝐮𝐢𝐭𝐢:\x20',
        '-\x20\x20',
        '504416jMHcUe',
        'ugqSf',
        'premium',
        'jid',
        'hVlJb',
        '2498742YPEOIZ',
        'trim',
        'nmXap',
        'cyVJs',
        '*\x0a>\x20🚀\x20𝐕𝐞𝐥𝐨𝐜𝐢𝐭𝐚\x27\x20:\x20',
        'warn',
        'isAdmin',
        '──────────────',
        'PePAZ',
        'digest',
        '2289350rBeGEf',
        'padStart',
        'toString',
        'pNOls',
        'https://telegra.ph/file/8ca14ef9fa43e99d1d196.jpg',
        'EkufQ',
        'messaggi',
        'chats',
        'TMJcZ',
        'users',
        '4626108fHCiEK',
        'https://instagram.com/',
        'dLgQx',
        'log',
        '──────────────\x0a\x20\x20👑\x20𝐆𝐞𝐬𝐭𝐢𝐬𝐜𝐞\x20𝐢\x20𝐠𝐫𝐮𝐩𝐩𝐢:\x0a',
        '🔇\x20𝐌𝐮𝐭𝐚𝐭𝐨:\x20𝐒𝐢\x0a',
        '908VENYpL',
        'md5',
        'banned',
        '0@s.whatsapp.net',
        'Lntrn',
        'BEGIN:VCARD\x0aVERSION:3.0\x0aN:;Unlimited;;;\x0aFN:Unlimited\x0aORG:Unlimited\x0aTITLE:\x0aitem1.TEL;waid=19709001746:+1\x20(970)\x20900-1746\x0aitem1.X-ABLabel:Unlimited\x0aX-WA-BIZ-DESCRIPTION:ofc\x0aX-WA-BIZ-NAME:Unlimited\x0aEND:VCARD',
        'data',
        'XzhWp',
        'yALWh',
        'raw',
        '\x20\x0a──────────────',
        'vzZJL',
        'includes',
        'https://telegra.ph/file/89ef7a1f940d72b738ae8.png',
        'eHyoD',
        'muto',
        'RPnuq',
        '29008IZacpA',
        'tags',
        'https://wa.me/',
        'sender',
        'buffer',
        'replace',
        'comandiEseguiti',
        'hjimP',
        'level',
        'ZqjUo',
        'multiplier',
        'blasphemy',
        'pXrVs',
        '🤳🏻\x20𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦:\x20𝐍𝐨𝐧\x20𝐢𝐦𝐩𝐨𝐬𝐭𝐚𝐭𝐨',
        'floor',
        'chat',
        'DwnTH',
        'match',
        './src/avatar_contact.png',
        'now',
        'command',
        'https://telegra.ph/file/2f38b3fd9cfba5935b496.jpg',
        '120363175463922716@newsletter',
        'uptime',
        'lhOtP',
        'LAdVG',
        'zvbWz',
        '𝐬𝐞𝐭𝐢𝐠',
        'mjMUI',
        'JhJMu',
        'bFhyW',
        'join',
        '987984onWosN',
        'hex',
        'mentionedJid',
        '56FFLuPo',
        'https://t.me/AssistenzaBixbyBot',
        '\x0a>\x20✍️\x20𝐏𝐫𝐞𝐟𝐢𝐬𝐬𝐨\x20:\x20*',
        'Halo',
        'QJIco',
        '𝐁𝐢𝐱𝐛𝐲𝐁𝐨𝐭-𝐌𝐝\x20🔮'
    ];
    _0x5b83 = function () {
        return _0x29281d;
    };
    return _0x5b83();
}
function _0x15b8(_0x4fd582, _0x551d5e) {
    const _0x430ab7 = _0x5b83();
    return _0x15b8 = function (_0xcd4a1d, _0x4298b6) {
        _0xcd4a1d = _0xcd4a1d - (-0x53 * 0x44 + -0x1b7a + -0x21 * -0x18d);
        let _0x44e347 = _0x430ab7[_0xcd4a1d];
        return _0x44e347;
    }, _0x15b8(_0x4fd582, _0x551d5e);
}
function formatInstagramValue(_0x1ff6f7) {
    const _0x36408e = _0x3e3258, _0x5715a1 = {
            'EkufQ': function (_0x4fa28e, _0x4bb052) {
                return _0x4fa28e / _0x4bb052;
            },
            'pNOls': function (_0x35e543, _0x52057f) {
                return _0x35e543 % _0x52057f;
            },
            'cyVJs': function (_0x47974b, _0x496079) {
                return _0x47974b / _0x496079;
            },
            'dImcC': function (_0x8d64b9, _0x1c68fd) {
                return _0x8d64b9 % _0x1c68fd;
            },
            'bFhyW': function (_0x68156, _0x208888) {
                return _0x68156 / _0x208888;
            },
            'vzZJL': _0x36408e(0x1b9),
            'sWAgK': _0x36408e(0x1f6)
        }, _0x5ee239 = _0x1ff6f7[_0x36408e(0x1b1)](/https:\/\/(?:www\.)?instagram\.com\/([^/?]+)/);
    if (_0x5ee239) {
        if (_0x5715a1[_0x36408e(0x206)] === _0x5715a1[_0x36408e(0x206)])
            return _0x36408e(0x1d5) + _0x5ee239[0x54 * -0x30 + 0xc36 + 0x38b];
        else {
            let _0x159f2f = _0x1c0af5[_0x36408e(0x1ae)](_0x5715a1[_0x36408e(0x1f0)](_0x3f3450, -0x2c2e06 + 0x2 * 0xbf4fd + 0x4b328c)), _0x1a0a88 = _0x5715a1[_0x36408e(0x1ee)](_0xfa5795[_0x36408e(0x1ae)](_0x5715a1[_0x36408e(0x1e4)](_0x52e28c, 0x17f46 + -0x9792 + 0x2ac)), -0x1219 + -0x1874 + 0x2ac9), _0x4f8f89 = _0x5715a1['dImcC'](_0x33b871[_0x36408e(0x1ae)](_0x5715a1[_0x36408e(0x1be)](_0x2627fc, 0x5 * -0x554 + -0x12ff * 0x1 + 0x318b)), -0x1 * -0x905 + 0x1cfa + -0x25c3);
            return _0x24f070['log']({
                'ms': _0x219a91,
                'h': _0x159f2f,
                'm': _0x1a0a88,
                's': _0x4f8f89
            }), [
                _0x159f2f,
                _0x1a0a88,
                _0x4f8f89
            ][_0x36408e(0x1d0)](_0x488f49 => _0x488f49[_0x36408e(0x1ed)]()[_0x36408e(0x1ec)](-0x1e3f + 0x19b8 + -0x183 * -0x3, 0x86 + -0x2580 + 0x1 * 0x24fa))['join'](':');
        }
    } else
        return _0x1ff6f7[_0x36408e(0x207)](_0x5715a1['sWAgK']) ? _0x36408e(0x1d5) + _0x1ff6f7[_0x36408e(0x211)](_0x5715a1['sWAgK'], '') : _0x36408e(0x1d5) + _0x1ff6f7;
}
function clockString(_0x122b88) {
    const _0x462d45 = _0x3e3258, _0x163d3e = {
            'npJUk': function (_0x2313ae, _0x5eb7ae) {
                return _0x2313ae % _0x5eb7ae;
            },
            'PePAZ': function (_0x49b6be, _0x535775) {
                return _0x49b6be / _0x535775;
            },
            'zvbWz': function (_0x3dce1c, _0x43016d) {
                return _0x3dce1c % _0x43016d;
            }
        };
    let _0x6b10f4 = Math[_0x462d45(0x1ae)](_0x122b88 / (0x4de * 0x1a7 + -0xc43c8 + 0x278a * 0x17f)), _0x52f432 = _0x163d3e[_0x462d45(0x1d4)](Math[_0x462d45(0x1ae)](_0x163d3e[_0x462d45(0x1e9)](_0x122b88, 0x2a4 * 0xb1 + 0x49 * 0x3d + -0x3215 * 0x5)), 0x263 + -0x16c9 + 0x8b * 0x26), _0x1a6aa5 = _0x163d3e[_0x462d45(0x1ba)](Math[_0x462d45(0x1ae)](_0x163d3e['PePAZ'](_0x122b88, -0x2b6 * -0x1 + 0x1 * 0x5cf + -0x49d)), 0x236a + 0x105f + 0x112f * -0x3);
    return console[_0x462d45(0x1f8)]({
        'ms': _0x122b88,
        'h': _0x6b10f4,
        'm': _0x52f432,
        's': _0x1a6aa5
    }), [
        _0x6b10f4,
        _0x52f432,
        _0x1a6aa5
    ][_0x462d45(0x1d0)](_0x285d13 => _0x285d13[_0x462d45(0x1ed)]()['padStart'](0x1f54 + 0x2 * 0xa9b + -0x3488, 0x7c4 * -0x2 + -0x2299 + -0x29 * -0x139))[_0x462d45(0x1bf)](':');
}