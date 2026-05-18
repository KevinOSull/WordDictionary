console.log("Hello, World!");
console.log("This is a JavaScript file.");

fetch('https://api.dictionaryapi.dev/api/v2/entries/en/objects')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })