var txtInput = document.querySelector("#translate-input");
var btnTranslate = document.querySelector("#translate-button");
var outputDiv = document.querySelector("#translate-output");
var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("Error Occured!", error)
    alert("Error Occured! Couldn't connect with server :(");
}

function clickHandler(){

    var inputText = txtInput.value; //taking input

//calling server for processiong
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
