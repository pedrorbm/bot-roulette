const { numbersRoulette } = require("./script-bot/index");
const { Telegraf } = require('telegraf');

const rouletteNamesAndNumbers = async() => {
    const roulette = await numbersRoulette()
    return roulette;
}

const test = () => {
    return 'teste roulette'
}

const finale = () => {
    const roulette = rouletteNamesAndNumbers()
    const vai = test()

    const bot = new Telegraf('5644003987:AAGSo6Y-kVZpH2lqpK5-LgrLLGKws9-FnPM');
    const message =  bot.telegram.sendMessage(-830628548, `${roulette}`);

    return message;
}

finale()