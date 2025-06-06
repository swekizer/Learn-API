document.getElementById('catButton').addEventListener('click', () => {
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
        document.getElementById('catFact').innerText = data.fact;
    })
});

document.getElementById('getDog').addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random') // Step 1: Make a request
        .then(response => response.json())            // Step 2: Convert response to JSON
        .then(data => {                               // Step 3: Access data from response
            document.getElementById('dogImage').src = data.message;                 // Step 4: Do something with the image URL
        });
});
