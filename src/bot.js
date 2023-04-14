const TelegramBot = require('node-telegram-bot-api')


// В token вставьте свой токен для вашего бота
const token = ''
const bot = new TelegramBot(token, {polling: true})

module.exports = bot