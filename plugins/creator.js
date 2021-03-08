let handler = function (m) {
  // this.sendContact(m.chat, '628563243961', 'Mikorand', m)
  this.sendContact(m.chat, '628563243961', 'My Owner BOT', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
