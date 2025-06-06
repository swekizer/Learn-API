const api_key = 'cad7522e70538b16c92b0282730f0203';

document.getElementById('getWeather').addEventListener('click', () => {

    const city = document.getElementById('cityInput').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;


    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })

        .then(data => {
            const temperature = data.main.temp;
            const weather = data.weather[0].description;
            const cityName = data.name;

            document.getElementById('weatherResult').innerHTML = `
                <h2>Weather in ${cityName}</h2>
                <p><strong>Temperature:</strong> ${temperature}°C</p>
                <p><strong>Condition:</strong> ${weather}</p>
      `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
        });
});