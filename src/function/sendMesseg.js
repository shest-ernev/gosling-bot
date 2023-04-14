const bot = require('../bot')
const badWords = require('../data/badWords')


const sendMsg = async (m) => {
   const text = m.text.toLowerCase(),
         chatId = m.chat.id,
         firstName = m.from.first_name

   if (text === 'привет') {
      await bot.sendMessage(chatId, `Привет ${firstName}`)
   } else if (text === 'пока') {
      await bot.sendMessage(chatId, `Пока ${firstName}`)
   } else if (text) {
      // Бот реагирует на сообщения в которых есть плохое слово из массива в файле '../data/badWords.js'
      badWords.map(async (item) => {
         text.includes(item) && await bot.sendMessage(chatId, `Без негатива ${firstName}`)
      })
   }
}

module.exports = sendMsg