const FRASE_ALEATORIA_API_URL = 'https://random-word-api.herokuapp.com/word'
const fraseDisplayElement = document.getElementById('fraseAleatoria')

function getFraseAleatoria() {
    return fetch(FRASE_ALEATORIA_API_URL)
        .then(Response => Response.json())
        .then(data => data.content)
}

async function renderProximaFrase() {
    const word = getFraseAleatoria()
    fraseDisplayElement.innerText = word
}

renderProximaFrase()