// Här hämtar vi ut element från index.html, vi hämtar element med specifika id:n
const inputElement = document.getElementById('message-input')
const outputElement = document.getElementById('message-output')

// Här lägger vi till en sk "lyssnare" som lyssnar på "händelser" (events). I det här fallet lyssnar vi specifikt på "keyup"-eventet
// som triggas varje gång jag har tryckt ner en tangent (när den lyfts).
inputElement.addEventListener("keyup", changeHandler)

function changeHandler(event) {
    // 1. Här plockar vi ut texten från eventet
    const text = event.target.value

    // 2. Här transformerar vi texten till något annat
    const result = makeLouder(text)

    // 3. Sätter output till resultatet
    outputElement.innerText = result
}


function doubleSwedish(str) {
    const words = str.split(' ')

    const duplicateWords = words.map(duplicate)

    return duplicateWords.join(' ')
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

// String.split splittar en sträng till en array av strängar
// Array.join klistrar ihop en array av strängar till en enda lång sträng

// function makeLouder(str) {
//     const loudText = str.toUpperCase()

//     const loudWords = loudText.split(' ')

//     const foo = loudWords.map(function (word) {
//         return word + '!'
//     })

//     return foo.join(' ')
// }

function duplicate(str) {
    return str + str
}
