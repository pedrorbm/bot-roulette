const { webkit } = require('playwright');

const dozens1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const dozens2 = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
const dozens3 = ['25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'];

const numbersRoulette = async () => {
    const browser = await webkit.launch();
    const page = await browser.newPage();

    await page.goto('https://livecasino.bet365.com/all-games/Exclusive');

    const context = await browser.newContext();

    await page.waitForLoadState('networkidle');

    await page.getByRole('link', { name: 'Roulette' }).dblclick();
    await page.waitForURL('https://livecasino.bet365.com/all-games/Roulette');


    let rouletteNames = await page.locator('.live-casino-static-games-grid-game-pod__header').allTextContents();
    let rouletteNumbers = await page.locator('.live-casino-roulette-rounds__round').allTextContents();

    const bet365Roulette = () => {

        const rouletteNameNumber = [];
        let strategyDozens1 = 0
        let strategyDozens2 = 0
        let strategyDozens3 = 0
        rouletteNameNumber.push(rouletteNames[1])
        for (let index = 0; index < 5; index += 1) {
            let array = rouletteNumbers[index]
            rouletteNameNumber.push(array)
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

        if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
            console.log('Preparar 5 dúzias em bet365 Roulette')
        } else if (strategyDozens1 >= 4 || strategyDozens2 >= 4 || strategyDozens3 >= 4) {
            console.log('Preparar 4 dúzias em bet365 Roulette')
        }

        return rouletteNameNumber;
    }

    const roulette = () => {
        const rouletteNameNumber = [];
        let strategyDozens1 = 0
        let strategyDozens2 = 0
        let strategyDozens3 = 0
        rouletteNameNumber.push(rouletteNames[5])
        for (let index = 6; index < 11; index += 1) {
            let array = rouletteNumbers[index]
            rouletteNameNumber.push(array)
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

        if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
            console.log('Preparar 5 dúzias em Roulette')
        } else if (strategyDozens1 >= 4 || strategyDozens2 >= 4 || strategyDozens3 >= 4) {
            console.log('Preparar 4 dúzias em Roulette')
        }

        return rouletteNameNumber;
    }

    const hindiRoulette = () => {
        const rouletteNameNumber = [];
        let strategyDozens1 = 0
        let strategyDozens2 = 0
        let strategyDozens3 = 0
        rouletteNameNumber.push(rouletteNames[8])
        for (let index = 12; index < 17; index += 1) {
            let array = rouletteNumbers[index]
            rouletteNameNumber.push(array)
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

        if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
            console.log('Preparar 5 dúzias em Hindi Roulette')
        } else if (strategyDozens1 >= 4 || strategyDozens2 >= 4 || strategyDozens3 >= 4) {
            console.log('Preparar 4 dúzias em Hindi Roulette')
        }

        return rouletteNameNumber;
    }

    const speedRoulette = () => {
        const rouletteNameNumber = [];
        let strategyDozens1 = 0
        let strategyDozens2 = 0
        let strategyDozens3 = 0
        rouletteNameNumber.push(rouletteNames[9])
        for (let index = 18; index < 23; index += 1) {
            let array = rouletteNumbers[index]
            rouletteNameNumber.push(array)
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

        if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
            console.log('Preparar 5 dúzias em Speed Roulette')
        } else if (strategyDozens1 >= 4 || strategyDozens2 >= 4 || strategyDozens3 >= 4) {
            console.log('Preparar 4 dúzias em Speed Roulette')
        }

        return rouletteNameNumber;
    }

    const greekRoulette = () => {
        const rouletteNameNumber = [];
        let strategyDozens1 = 0
        let strategyDozens2 = 0
        let strategyDozens3 = 0
        rouletteNameNumber.push(rouletteNames[10])
        for (let index = 24; index < 29; index += 1) {
            let array = rouletteNumbers[index]
            rouletteNameNumber.push(array)
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

        if (strategyDozens1 >= 5 || strategyDozens2 >= 5 || strategyDozens3 >= 5) {
            console.log('Preparar 5 dúzias em Greek Roulette')
        } else if (strategyDozens1 >= 4 || strategyDozens2 >= 4 || strategyDozens3 >= 4) {
            console.log('Preparar 4 dúzias em Greek Roulette')
        }

        return rouletteNameNumber;
    }

    console.log(bet365Roulette());
    console.log(roulette());
    console.log(hindiRoulette());
    console.log(speedRoulette());
    console.log(greekRoulette());

    await context.close();
    await browser.close();

}

module.exports = { numbersRoulette };