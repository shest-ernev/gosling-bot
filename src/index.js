const bot = require('./bot')
const sendMsg = require('./function/sendMesseg')
const faces = require('./data/faces')
const rand = require('./function/random')
const badWords = require('./data/badWords')
const comands = require('./data/comands')
const popyskanie = require('./function/popyskanie')


let popysk = ''

bot.setMyCommands(comands)

bot.on('message', async (msg) => {
   if (msg.from.username == popysk) {
      await bot.sendMessage(msg.chat.id, popyskanie(popysk))
   }
   else if (msg.hasOwnProperty('text')) {
      return sendMsg(msg)
   }
   else {
      return false 
   }
})


bot.onText(/\/help/, async (msg) => {
   await bot.sendMessage(msg.chat.id, `
🤖Персональная помощь бота🤖

/help: Просто помощь от бота
/randomphoto: выводит рандомное фото и название
/badwords: выводит плохие слова
/coutpopysk: выводит ткущего попуска

Так же бот реагирует на мат, а так же на слова привет/пока
   `)
})

// Команда для рандомного вывода фоток с лицами моих братков из массива './data/faces.js'
bot.onText(/\/randomphoto/, async (msg) => {
   const num = rand(0, 5)

   await bot.sendPhoto(msg.chat.id, faces.at(num).img)
   await bot.sendMessage(msg.chat.id, faces.at(num).name)
})

// Просто команда для вывода списка плохих слов
bot.onText(/\/badwords/, async (msg) => {
   await bot.sendMessage(msg.chat.id, `Плохие слова: ${badWords}`)
})

// Команда для изменения человека, которому бот будет отвечать на каждое его отправленное сообщения
// команда доступна только админу, админ это переменная с id в телеграмме её можно поменять на нужное вам
// просто ваш айдишник запишите в неё
bot.onText(/\/popysk (.+)/, async (msg, match) => {
   // В эта переменная для админа
   const admin = 'shest_ernev'

   if (msg.from.username == admin) {
      popysk = match.at(1)
      await bot.sendMessage(msg.chat.id, `Попуск изменён`)
   }
   else if (msg.from.id !== 1108687799) {
      await bot.sendMessage(msg.chat.id, `У вас нет прав для изменения попуска`)
   }
})

// Вывод текущего человека, которому бот отвечает на каждое сообщение оскорблением
bot.onText(/\/coutpopysk/, async (msg) => {
   await bot.sendMessage(msg.chat.id, `Текущий попуск @${popysk}`)
})