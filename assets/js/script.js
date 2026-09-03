console.log("Script loaded!");

let inputField = document.getElementById("inputFieldId")
let outputField = document.getElementById("outputFieldId")
const wordMeaning = document.getElementById("outputFieldId");
let submit = document.getElementById("btn1");


submit.addEventListener("click",function(){
    let word = inputField.value;
    if(!checkIsInputEmpty()){
        outputField.innerHTML = "Please enter a word.";
    }else{
        fetchDefinition(word);
    }
});

let reset = document.getElementById("btn2");
reset.addEventListener("click",function(){
    resetButton();
})

function resetButton(){
    outputField.innerHTML = "";
    inputField.value = "";
}

function checkIsInputEmpty(){
    return inputField.value !== "";
}

function fetchDefinition(word){
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        wordMeaning.innerHTML = data[0].meanings[0].definitions[0].definition;
    })
}