document.getElementById('getWeatherBtn').addEventListener('click', function() {
    let city = document.getElementById('city').value.trim();  
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    let apiKey = '0e3c8d7f0e4f4dd9bb4160626241211';  
    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;  

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);  
            if (data.error) {
                alert('City not found! Please check the name or try again.');
            } else {
                document.getElementById('temperature').textContent = `Temperature: ${data.current.temp_c}°C`;
                document.getElementById('humidity').textContent = `Humidity: ${data.current.humidity}%`;
                document.getElementById('windSpeed').textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
                document.getElementById('description').textContent = `Weather: ${data.current.condition.text}`;
            }
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            alert('There was an issue fetching the weather data. Please try again later.');
        });
});
