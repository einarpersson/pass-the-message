const inputElement = document.getElementById('message-input')
const outputElement = document.getElementById('message-output')

inputElement.addEventListener("keyup", changeHandler)


function changeHandler (event) {
    const text = event.target.value

    outputElement.innerText = text
}
