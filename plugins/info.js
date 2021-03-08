let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Bang mikorand 
Script: @randi 
Github: 
https://github.com/Tersakiti404-cyber/BuatRandi

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @mikorand_husblenov
➥ YouTube:
private 

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Randi 
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ SmartFren: 081931793215
╠➥ Tsel: 081216914137
╠➥ Indosat: 08563243961
║>Request? Wa.me/6281216914137
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = true
handler.mods = true
handler.premium = true
handler.group = true
handler.private = true

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

