<script>
  function getWeather() {
    var location = "McAllen"; // Replace with the location you want to get the weather for
    var apiKey = "4c4695e81a33085c2d46225163e78057"; // Replace with your API key

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&appid=" + apiKey, true);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var forecast = response.list;

        // Display the forecast on the page
        var forecastDiv = document.getElementById("weather-forecast");
        forecastDiv.innerHTML = "<h2>5-Day Weather Forecast for " + location + "</h2>";

        for (var i = 0; i < forecast.length; i += 8) {
          var date = new Date(forecast[i].dt_txt);
          var iconUrl = "https://openweathermap.org/img/w/" + forecast[i].weather[0].icon + ".png";
          var temperature = Math.round(forecast[i].main.temp - 273.15);
          var description = forecast[i].weather[0].description;

          forecastDiv.innerHTML += "<div class='forecast-item'>" +
                                    "<div class='forecast-date'>" + date.toDateString() + "</div>" +
                                    "<div class='forecast-icon'><img src='" + iconUrl + "' alt='" + description + "'></div>" +
                                    "<div class='forecast-temp'>" + temperature + "°C</div>" +
                                    "<div class='forecast-desc'>" + description + "</div>" +
                                  "</div>";
        }
      }
    };

    xhr.send();
  }

  window.onload = getWeather;
</script>