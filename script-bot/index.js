const { webkit } = require('playwright');
const { Telegraf } = require('telegraf');

const dozens1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const dozens2 = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
const dozens3 = ['25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'];
    
    (async () => {
        const browser = await webkit.launch();
        const page = await browser.newPage();

        await page.goto('https://livecasino.bet365.com/all-games/Exclusive');

        const context = await browser.newContext();

        await page.waitForLoadState('networkidle');

        await page.getByRole('link', { name: 'Roulette' }).dblclick();
        await page.waitForURL('https://livecasino.bet365.com/all-games/Roulette');


        let rouletteNames = await page.locator('.live-casino-static-games-grid-game-pod__header').allTextContents();
        let rouletteNumbers = await page.locator('.live-casino-roulette-rounds__round').allTextContents();

        const bot = new Telegraf('5644003987:AAGSo6Y-kVZpH2lqpK5-LgrLLGKws9-FnPM');

        const money = '\u{1F4B0}';
        const bomb = '\u{1F4A3}';
        const cassino = '\u{1F3B0}';
        const arrow = '\u{1F3AF}';
        const sinals = '\u{1F6A8}';
        const checked = '\u{2705}';

        const bet365Roulette = () => {

            const rouletteNumber = [];
            const rouletteName = []
            let strategyDozens1 = 0
            let strategyDozens2 = 0
            let strategyDozens3 = 0
            rouletteName.push(rouletteNames[1])
            for (let index = 0; index < 5; index += 1) {
                let array = rouletteNumbers[index]
                rouletteNumber.push( array)
                for (let indexx = 0; indexx < 12; indexx += 1) {
                    if (array === dozens1[indexx]) {
                        strategyDozens1 += 1;
                    } else if (array === dozens2[indexx]) {
                        strategyDozens2 += 1;
                    } else if (array === dozens3[indexx]) {
                        strategyDozens3 += 1;
                    }
                }
            }

            const site = 'https://livecasino.bet365.com/Play/bet365Roulette'

            if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
                return bot.telegram.sendMessage(-830628548, `${sinals}Bateu 5 dúzias Bet365 Roulette${sinals}\n\n` +
                `${arrow}Acesse a sala: ${site}\n\n` +
                `${bomb}Sequência: ${rouletteNumber}\n\n`)
            }
        }




        const roulette = () => {
            const rouletteNumber = [];
            const rouletteName = []
            let strategyDozens1 = 0
            let strategyDozens2 = 0
            let strategyDozens3 = 0
            rouletteName.push(rouletteNames[5])
            for (let index = 6; index < 11; index += 1) {
                let array = rouletteNumbers[index]
                rouletteNumber.push(array)
                for (let indexx = 0; indexx < 12; indexx += 1) {
                    if (array === dozens1[indexx]) {
                        strategyDozens1 += 1;
                    } else if (array === dozens2[indexx]) {
                        strategyDozens2 += 1;
                    } else if (array === dozens3[indexx]) {
                        strategyDozens3 += 1;
                    }
                }
            }
            
            const site = 'https://livecasino.bet365.com/Play/Roulette'

            if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
                return bot.telegram.sendMessage(-830628548, `${sinals}Bateu 5 dúzias Roulette${sinals}\n\n` +
                `${arrow}Acesse a sala: ${site}\n\n` +
                `${bomb}Sequência: ${rouletteNumber}\n\n`)
            }
        }

        const hindiRoulette = () => {
            const rouletteNumber = [];
            const rouletteName = []
            let strategyDozens1 = 0
            let strategyDozens2 = 0
            let strategyDozens3 = 0
            rouletteName.push(rouletteNames[8])
            for (let index = 12; index < 17; index += 1) {
                let array = rouletteNumbers[index]
                rouletteNumber.push(array)
                for (let indexx = 0; indexx < 12; indexx += 1) {
                    if (array === dozens1[indexx]) {
                        strategyDozens1 += 1;
                    } else if (array === dozens2[indexx]) {
                        strategyDozens2 += 1;
                    } else if (array === dozens3[indexx]) {
                        strategyDozens3 += 1;
                    }
                }
            }

            const site = 'https://livecasino.bet365.com/Play/HindiRoulette'

            if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
                return bot.telegram.sendMessage(-830628548, `${sinals}Bateu 5 dúzias Hindi Roulette${sinals}\n\n` +
                `${arrow}Acesse a sala: ${site}\n\n` +
                `${bomb}Sequência: ${rouletteNumber}\n\n`)
            } 
        }

        const speedRoulette = () => {
            const rouletteNumber = [];
            const rouletteName = []
            let strategyDozens1 = 0
            let strategyDozens2 = 0
            let strategyDozens3 = 0
            rouletteName.push(rouletteNames[9])
            for (let index = 18; index < 23; index += 1) {
                let array = rouletteNumbers[index]
                rouletteNumber.push(array)
                for (let indexx = 0; indexx < 12; indexx += 1) {
                    if (array === dozens1[indexx]) {
                        strategyDozens1 += 1;
                    } else if (array === dozens2[indexx]) {
                        strategyDozens2 += 1;
                    } else if (array === dozens3[indexx]) {
                        strategyDozens3 += 1;
                    }
                }
            }

            const site = 'https://livecasino.bet365.com/Play/SpeedRoulette'

            if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
                return bot.telegram.sendMessage(-830628548, `${sinals}Bateu 5 dúzias Speed Roulette${sinals}\n\n` +
                `${arrow}Acesse a sala: ${site}\n\n` +
                `${bomb}Sequência: ${rouletteNumber}\n\n`)
            }
        }

        const greekRoulette = () => {
            const rouletteNumber = [];
            const rouletteName = []
            let strategyDozens1 = 0
            let strategyDozens2 = 0
            let strategyDozens3 = 0
            rouletteName.push(rouletteNames[10])
            for (let index = 24; index < 29; index += 1) {
                let array = rouletteNumbers[index]
                rouletteNumber.push(array)
                for (let indexx = 0; indexx < 12; indexx += 1) {
                    if (array === dozens1[indexx]) {
                        strategyDozens1 += 1;
                    } else if (array === dozens2[indexx]) {
                        strategyDozens2 += 1;
                    } else if (array === dozens3[indexx]) {
                        strategyDozens3 += 1;
                    }
                }
            }

            const site = 'https://livecasino.bet365.com/Play/GreekRoulette'

            if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
                return bot.telegram.sendMessage(-830628548, `${sinals}Bateu 5 dúzias Greek Roulette${sinals}\n\n` +
                `${arrow}Acesse a sala: ${site}\n\n` +
                `${bomb}Sequência: ${rouletteNumber}\n\n`)
            }
        }

        const arabicRoulette = () => {
            const rouletteNumber = [];
            const rouletteName = []
            let strategyDozens1 = 0
            let strategyDozens2 = 0
            let strategyDozens3 = 0
            rouletteName.push(rouletteNames[11])
            for (let index = 30; index < 35; index += 1) {
                let array = rouletteNumbers[index]
                rouletteNumber.push(array)
                for (let indexx = 0; indexx < 12; indexx += 1) {
                    if (array === dozens1[indexx]) {
                        strategyDozens1 += 1;
                    } else if (array === dozens2[indexx]) {
                        strategyDozens2 += 1;
                    } else if (array === dozens3[indexx]) {
                        strategyDozens3 += 1;
                    }
                }
            }

            const site = 'https://livecasino.bet365.com/Play/ArabicRoulette'

            if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
                return bot.telegram.sendMessage(-830628548, `${sinals}Bateu 5 dúzias Arabic Roulette${sinals}\n\n` +
                `${arrow}Acesse a sala: ${site}\n\n` +
                `${bomb}Sequência: ${rouletteNumber}\n\n`)
            }
        }

        const turkishRoulette = () => {
            const rouletteNumber = [];
            const rouletteName = []
            let strategyDozens1 = 0
            let strategyDozens2 = 0
            let strategyDozens3 = 0
            rouletteName.push(rouletteNames[12])
            for (let index = 36; index < 41; index += 1) {
                let array = rouletteNumbers[index]
                rouletteNumber.push(array)
                for (let indexx = 0; indexx < 12; indexx += 1) {
                    if (array === dozens1[indexx]) {
                        strategyDozens1 += 1;
                    } else if (array === dozens2[indexx]) {
                        strategyDozens2 += 1;
                    } else if (array === dozens3[indexx]) {
                        strategyDozens3 += 1;
                    }
                }
            }

            const site = 'https://livecasino.bet365.com/Play/TurkishRoulette'

            if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
                return bot.telegram.sendMessage(-830628548, `${sinals}Bateu 5 dúzias Turkish Roulette${sinals}\n\n` +
                `${arrow}Acesse a sala: ${site}\n\n` +
                `${bomb}Sequência: ${rouletteNumber}\n\n`)
            }
        }

        const roletaBrasileira = () => {
            const rouletteNumber = [];
            const rouletteName = []
            let strategyDozens1 = 0
            let strategyDozens2 = 0
            let strategyDozens3 = 0
            rouletteName.push(rouletteNames[13])
            for (let index = 42; index < 47; index += 1) {
                let array = rouletteNumbers[index]
                rouletteNumber.push(array)
                for (let indexx = 0; indexx < 12; indexx += 1) {
                    if (array === dozens1[indexx]) {
                        strategyDozens1 += 1;
                    } else if (array === dozens2[indexx]) {
                        strategyDozens2 += 1;
                    } else if (array === dozens3[indexx]) {
                        strategyDozens3 += 1;
                    }
                }
            }

            const site = 'https://livecasino.bet365.com/Play/RoletaBrasileira'

            if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
                return bot.telegram.sendMessage(-830628548, `${sinals}Bateu 5 dúzias Roleta Brasileira${sinals}\n\n` +
                `${arrow}Acesse a sala: ${site}\n\n` +
                `${bomb}Sequência: ${rouletteNumber}\n\n`)
            }
        }

        const americanRoulette = () => {
            const rouletteNumber = [];
            const rouletteName = []
            let strategyDozens1 = 0
            let strategyDozens2 = 0
            let strategyDozens3 = 0
            rouletteName.push(rouletteNames[16])
            for (let index = 54; index < 59; index += 1) {
                let array = rouletteNumbers[index]
                rouletteNumber.push(array)
                for (let indexx = 0; indexx < 12; indexx += 1) {
                    if (array === dozens1[indexx]) {
                        strategyDozens1 += 1;
                    } else if (array === dozens2[indexx]) {
                        strategyDozens2 += 1;
                    } else if (array === dozens3[indexx]) {
                        strategyDozens3 += 1;
                    }
                }
            }

            const site = 'https://livecasino.bet365.com/Play/AmericanRoulette'

            if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
                return bot.telegram.sendMessage(-830628548, `${sinals}Bateu 5 dúzias American Roulette${sinals}\n\n` +
                `${arrow}Acesse a sala: ${site}\n\n` +
                `${bomb}Sequência: ${rouletteNumber}\n\n`)
            }
        }

        const bet365NederlandseRoulette = () => {
            const rouletteNumber = [];
            const rouletteName = []
            let strategyDozens1 = 0
            let strategyDozens2 = 0
            let strategyDozens3 = 0
            rouletteName.push(rouletteNames[18])
            for (let index = 60; index < 65; index += 1) {
                let array = rouletteNumbers[index]
                rouletteNumber.push(array)
                for (let indexx = 0; indexx < 12; indexx += 1) {
                    if (array === dozens1[indexx]) {
                        strategyDozens1 += 1;
                    } else if (array === dozens2[indexx]) {
                        strategyDozens2 += 1;
                    } else if (array === dozens3[indexx]) {
                        strategyDozens3 += 1;
                    }
                }
            }

            const site = 'https://livecasino.bet365.com/Play/bet365DutchRoulette'

            if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
                return bot.telegram.sendMessage(-830628548, `${sinals}Bateu 5 dúzias Bet365 Nederlandse Roulette${sinals}\n\n` +
                `${arrow}Acesse a sala: ${site}\n\n` +
                `${bomb}Sequência: ${rouletteNumber}\n\n`)
            }
        }

        const deutschesRoulette = () => {
            const rouletteNumber = [];
            const rouletteName = []
            let strategyDozens1 = 0
            let strategyDozens2 = 0
            let strategyDozens3 = 0
            rouletteName.push(rouletteNames[19])
            for (let index = 66; index < 71; index += 1) {
                let array = rouletteNumbers[index]
                rouletteNumber.push(array)
                for (let indexx = 0; indexx < 12; indexx += 1) {
                    if (array === dozens1[indexx]) {
                        strategyDozens1 += 1;
                    } else if (array === dozens2[indexx]) {
                        strategyDozens2 += 1;
                    } else if (array === dozens3[indexx]) {
                        strategyDozens3 += 1;
                    }
                }
            }

            const site = 'https://livecasino.bet365.com/Play/DeutschesRoulette'

            if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
                return bot.telegram.sendMessage(-830628548, `${sinals}Bateu 5 dúzias Deutsches Roulette${sinals}\n\n` +
                `${arrow}Acesse a sala: ${site}\n\n` +
                `${bomb}Sequência: ${rouletteNumber}\n\n`)
            }
        }

        const ukRoulette = () => {
            const rouletteNumber = [];
            const rouletteName = []
            let strategyDozens1 = 0
            let strategyDozens2 = 0
            let strategyDozens3 = 0
            rouletteName.push(rouletteNames[21])
            for (let index = 72; index < 77; index += 1) {
                let array = rouletteNumbers[index]
                rouletteNumber.push(array)
                for (let indexx = 0; indexx < 12; indexx += 1) {
                    if (array === dozens1[indexx]) {
                        strategyDozens1 += 1;
                    } else if (array === dozens2[indexx]) {
                        strategyDozens2 += 1;
                    } else if (array === dozens3[indexx]) {
                        strategyDozens3 += 1;
                    }
                }
            }

            const site = 'https://livecasino.bet365.com/Play/UKRoulette'

            if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
                return bot.telegram.sendMessage(-830628548, `${sinals}Bateu 5 dúzias UK Roulette${sinals}\n\n` +
                `${arrow}Acesse a sala: ${site}\n\n` +
                `${bomb}Sequência: ${rouletteNumber}\n\n`)
            }
        }

        const bucharestRoulette = () => {
            const rouletteNumber = [];
            const rouletteName = []
            let strategyDozens1 = 0
            let strategyDozens2 = 0
            let strategyDozens3 = 0
            rouletteName.push(rouletteNames[23])
            for (let index = 84; index < 89; index += 1) {
                let array = rouletteNumbers[index]
                rouletteNumber.push(array)
                for (let indexx = 0; indexx < 12; indexx += 1) {
                    if (array === dozens1[indexx]) {
                        strategyDozens1 += 1;
                    } else if (array === dozens2[indexx]) {
                        strategyDozens2 += 1;
                    } else if (array === dozens3[indexx]) {
                        strategyDozens3 += 1;
                    }
                }
            }

            const site = 'https://livecasino.bet365.com/Play/BucharestRoulette'

            if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
                return bot.telegram.sendMessage(-830628548, `${sinals}Bateu 5 dúzias Bucharest Roulette${sinals}\n\n` +
                `${arrow}Acesse a sala: ${site}\n\n` +
                `${bomb}Sequência: ${rouletteNumber}\n\n`)
            }
        }

        const rouletteItaliana = () => {
            const rouletteNumber = [];
            const rouletteName = []
            let strategyDozens1 = 0
            let strategyDozens2 = 0
            let strategyDozens3 = 0
            rouletteName.push(rouletteNames[24])
            for (let index = 90; index < 95; index += 1) {
                let array = rouletteNumbers[index]
                rouletteNumber.push(array)
                for (let indexx = 0; indexx < 12; indexx += 1) {
                    if (array === dozens1[indexx]) {
                        strategyDozens1 += 1;
                    } else if (array === dozens2[indexx]) {
                        strategyDozens2 += 1;
                    } else if (array === dozens3[indexx]) {
                        strategyDozens3 += 1;
                    }
                }
            }

            const site = 'https://livecasino.bet365.com/Play/RouletteItaliana'

            if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
                return bot.telegram.sendMessage(-830628548, `${sinals}Bateu 5 dúzias Roulette Italiana${sinals}\n\n` +
                `${arrow}Acesse a sala: ${site}\n\n` +
                `${bomb}Sequência: ${rouletteNumber}\n\n`)
            }
        }

        console.log('foi')
        bet365Roulette();
        roulette();
        hindiRoulette();
        speedRoulette();
        greekRoulette();
        arabicRoulette();
        turkishRoulette();
        roletaBrasileira();
        americanRoulette();
        bet365NederlandseRoulette();
        deutschesRoulette();
        ukRoulette();
        bucharestRoulette();
        rouletteItaliana();

        await context.close();
        await browser.close();

    })()
