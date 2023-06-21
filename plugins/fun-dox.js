import { performance } from 'perf_hooks'
let handler = async (m, { conn, text }) => {
let start = `iniziando dox`
let boost = `${pickRandom(['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'])}%`
let boost2 = `${pickRandom(['21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'])}%`
let boost3 = `${pickRandom(['41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'])}%`
let boost4 = `${pickRandom(['61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'])}%`
let boost5 = `${pickRandom(['81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'])}%`
await m.reply(start)
await m.reply(boost)
await m.reply(boost3)
await m.reply(boost5)
let old = performance.now()
let neww = performance.now()
let speed = `${neww - old}`
let doxeo = `*[ ✔ ] Persona doxata con successo*

Nome: ${text}
Ip: ${pickRandom(['92.28.211.234','140.216.58.100','80.139.134.15','88.53.127.8','231.87.85.223','84.242.13.215','108.66.227.191','108.66.227.191','19.253.102.203','162.243.47.86','29.190.139.89','164.170.40.55','154.213.192.71','167.61.185.50','141.9.11.97','42.170.190.1','191.169.42.48','108.109.137.242','212.250.238.14','117.31.53.155'])}
*IPV6:* ${pickRandom(['4e4d:1176:3285:02bb:40c7:bd44:4094:4f37','806a:9b5d:c5b3:e852:b490:0492:bef9:085b','15d0:4f91:ebed:fbbb:b6c2:0ac6:7724:b067','d140:409a:2d05:7880:36da:392a:22fb:160a','ba02:221a:42f7:21dc:ef91:bb86:782c:3145','3aab:b4ac:f0c2:816b:ed0f:9d9d:820e:7c39','8faa:09b6:a367:f7e2:58f4:6234:ea33:eb06','cf4f:90c0:8ed9:8c2e:e4f5:552a:763f:3bd9','10e7:405c:fbd4:0de9:2256:81ee:42b6:2913','1bb3:69ca:76be:87c2:e413:0f57:bb7e:b1b9','c428:05d3:135d:d3f5:634f:d547:4b3c:5552','9a0a:c397:3fbb:cf31:b1da:5c57:19df:baed'])}
*UPNP:* ${pickRandom(['enabled','disabled'])}
*MAC:* ${pickRandom(['4A:93:23:18:BA:7F','F0:1A:30:3B:EA:D1','AD:7E:2A:FB:81:B3','21:13:6F:5F:F8:AE','EC:6E:46:4E:5E:AD','2E:DC:79:F7:08:A8','C1:57:31:79:15:2F','11:AE:62:34:0C:71','08:0E:DE:70:9C:0E','32:BD:29:FE:83:1C','C9:12:53:4F:53:7A','4D:D6:10:E6:59:EE'])}
*ISP:* ${pickRandom(['Telecom Italia','Vodafone','WINDTRE','Iliad','Fastweb','Tiscali','Linkem','Eolo'])}
*DNS:* ${pickRandom(['8.8.8.8','8.8.4.4','1.1.1.1'])}
*SUBNET MASK:* ${pickRandom(['255.255.128.0','255.255.255.240','255.192.0.0','255.255.248.0','255.255.224.0'])}
*ROUTER VENDEDOR:* ${pickRandom(['ERICCSON','Alcatel','Asus','Cisco','D-Link','Huawei','MikroTik','Motorola','NEC','NETGEAR','Nokia','ZTE','TP-Link'])}
*EXTERNAL MAC:* ${pickRandom(['4A:93:23:18:BA:7F','F0:1A:30:3B:EA:D1','AD:7E:2A:FB:81:B3','21:13:6F:5F:F8:AE','EC:6E:46:4E:5E:AD','2E:DC:79:F7:08:A8','C1:57:31:79:15:2F','11:AE:62:34:0C:71','08:0E:DE:70:9C:0E','32:BD:29:FE:83:1C','C9:12:53:4F:53:7A','4D:D6:10:E6:59:EE'])}
MODEM JUMPS: ${pickRandom(['61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80'])}`
m.reply(doxeo, null, { mentions: conn.parseMention(doxeo) })
}
handler.help = ['doxear <nombre> | <@tag>']
handler.tags = ['fun']
handler.command = /^Dox|dox/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
