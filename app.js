const TelegramBot = require('node-telegram-bot-api');

const token = '7388646340:AAEgyi0ULTolNZAjw_kuAwY7uUgKhfJNys8';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    async function startBot() {
        const menu_game = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "▶️ Jogue agora",
                            web_app: {url: "https://fastcup.click/wFBQ9f"},
                        },
                    ],
                    [
                        {
                            text: "🌐 Web - versão",
                            url: "https://fastcup.click/wFBQ9f",
                        },
                    ]
                ],
            },
            parse_mode: 'HTML'
        }

        if (text === '/start') {
            await bot.sendPhoto(chatId, './img/home.jpg');
            await bot.sendMessage(chatId, "Bem-vindo ao Brazino \n\n Agora você pode jogar diretamente telegrama!", menu_game)
        }
    }
    startBot()
})