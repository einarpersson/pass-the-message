const inputElement = document.getElementById('message-input')
const outputElement = document.getElementById('message-output')

inputElement.addEventListener("keyup", changeHandler)

function changeHandler (event) {
    // console.log(event.target.value)
    outputElement.innerText = event.target.value
}

// changeHandler()
