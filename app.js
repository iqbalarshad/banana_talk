
let translateButton = document.querySelector("#translate-button");

translateButton.addEventListener("click", buttonClickHandler)

// read input
let translateInput = document.querySelector("#translate-input");

// show output
let translateOutput = document.querySelector("#translate-output");


let url = "https://api.funtranslations.com/translate/minion.json"

function buttonClickHandler(event) {
    console.log("button clicked");
    let input = translateInput.value;
    let finalURL = constructURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"))

}

function constructURL(inputText) {
    let encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}