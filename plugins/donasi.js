let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [081931793215]
│ • Telkomsel [081216914137]
│ • Gopay [081216914137]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281216914137
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa telkomsel"
3.)Dan terus masukkan nomor kami 081216914137
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
