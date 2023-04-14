# GOSLING bot

Не судите строго это мой первый опыт создания бота на NodeJS, и в целом я первый раз писал на NodeJS. Писал я бота не в серьёз, а чисто ради прикола и просто попробовать. Бот работает как в личных сообщениях, так и в чате. Для работы бота в чате, его нужно просто пригласить в беседу и дать боту права на отправку сообщений. Данного бота можно считать, как банальная тудушка на React.

### *Инструкция по запуску бота*

Для запуска проекта на вашем устройстве обязательно должен быть установлен NodeJS. Если вы собераетесь скачивать проект через Git, а не архивом то Git тоже должен быть установлен

- И так первым делом скачиваете проект архивом или создаюте папку, переходите в неё через терминал командой
```
cd <путь к папке>
```

- Когда перешли в папку пишите команду, эта команда скачает проект в выбранную вами папку
```
git clone https://github.com/shest-ernev/bot.git
```

- Дальше скачиваете все зависимости с помощью команды (вы по прежнему должны находится в директории проекта)
```
npm install
```

- Если вы очень крутой и у вас на компьютере установлен yarn, то зависимости можно скачать с помощью команды (вы также по прежнему должны находится в директории проекта)
```
yarn
```

- Дальше открываете в проекте файл './src/bot.js' и в переменную token вставляете токен вашего телеграмм бота
- Ещё можете в файле './src/function/index.js' вписать в переменную admin (58 строка) свой id (тип тема которая пишеться в чатах так @user) в телеграмме, чтобы админская команда '/popysk (id_user)' работала у вас или у вписанного вами человека

- Дальше указанной командой запускаем бота (вы всё ещё должны находится в директории проекта)
```
npm run dev
```

- Ну или вы можете запустить бота при помощи yarn командой
```
yarn dev
```

- После запуска, в консоли появятся несколько сообщений, последнее из которых должно быть
```
[nodemon] starting `node ./src/index.js`
```

- Если ничё не получилось, но вы по прежнему хотите запустить проект можете обратиться ко мне лично, то вот ссылки: ВК - https://vk.com/shest_ernev, ТГ - https://t.me/shest_ernev

### *Что собственно бот может*

1) Отвечает на сообщение 'Привет', сообщением 'Привет {имя пользователя}'
2) Отвечает на сообщение 'Пока', сообщением 'Пока {имя пользователя}'
3) Отвечает на сообщения в которых присутствуют слова из массива матов ('./src/data/badWords.js'), сообщением 'Без негатива {имя пользователя}'
4) По команде `/randomphoto` - отправит рандомно фото из массива рандомных фоток ('./src/data/faces.js')
5) По команде `/badwords` - отправит спосок плохих слов
6) По команде `/help` - отправит список команд для бота
7) По команде `/coutpopysk` - отправит айди человека (тип '@user'), которому бот отвечает без обидными оскорблениями на каждое сообщение. Такой человек устанавливается админской командой, которая ниже
8) По команде `/popysk <id>`  (команда админская, админа можно поменять в файле './src/index.js' 58 строка) - устанавливает человека, которому бот будет отвечать безобидными оскорблениями

<br>
<br>
<br>
<br>
<br>

:)