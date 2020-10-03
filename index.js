// Här hämtar vi ut element från index.html, vi hämtar element med specifika id:n
const inputElement = document.getElementById('message-input')
const outputElement = document.getElementById('message-output')

// Här lägger vi till en sk "lyssnare" som lyssnar på "händelser" (events). I det här fallet lyssnar vi specifikt på "keyup"-eventet
// som triggas varje gång jag har tryckt ner en tangent (när den lyfts).
inputElement.addEventListener("keyup", changeHandler)

function changeHandler(event) {
    console.log("vi kommer hit")

    // 1. Här plockar vi ut texten från eventet
    const text = event.target.value

    // 2. Här transformerar vi texten till något annat
    const result = statistics(text)

    // 3. Sätter output till resultatet
    outputElement.innerText = result
}

function statistics(str) { 
    const words = str.split(' ')

    return 'Number of words: ' + words.length
}

function doubleSwedish(str) {
    // Words blir en array av strängar. Varje element är ett ord.
    const words = str.split(' ')

    // duplicateWords är en ny array av strängar, där varje ord är output av funktionen duplicate
    const duplicateWords = words.map(duplicate)

    // result är en sträng, som klistrats ihop av alla element i duplicateWords
    const result = duplicateWords.join(' ')

    // strängen result returneras
    return result
}

function makeLoud(str) {
    return str.toUpperCase()
}

function makeLouder(str) {
    return str
        .toUpperCase()
        .split(' ')
        .map(function (word) {
            return word + '!'
        })
        .join(' ')
}

function duplicate(str) {
    return str + str
}
