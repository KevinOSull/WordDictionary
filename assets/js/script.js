console.log("Hello, World!");
console.log("This is a JavaScript file.");

let submit = document.getElementById("submitBtn");
submit.addEventListener("click",function(){
    console.log("Button clicked!");
})

fetch('https://api.dictionaryapi.dev/api/v2/entries/en/objects')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })