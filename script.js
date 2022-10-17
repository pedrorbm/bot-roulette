/* const { numbersRoulette } = require("./index"); */

const createElement = () => {
    const body = document.querySelector('#body');
    const ul = body.createElement('ul')
    return body.appendChild(ul)
}
createElement()
/* const rouletteNamesAndNumbers = async() => {
    const roulette = await numbersRoulette()
    return roulette;
} */
