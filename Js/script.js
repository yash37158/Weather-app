// Declaring the variables
let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
const iconImg = document.getElementById('weather-icon');
let  Wind = document.getElementById('Wind');
let  humid = document.getElementById('Humid');
let Max = document.getElementById('Max temp');
let Min = document.getElementById('Min temp');

const kelvin = 273;





window.addEventListener("load", () => {
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition((position) => {
	console.log(position);
	lon = position.coords.longitude;
	lat = position.coords.latitude;

	// API ID
	const api = "6d055e39ee237af35ca066f35474e9df";

	// API URL
	const base =`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
	`lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

	


	// Calling the API
	fetch(base)
		.then((response) => {
		return response.json();
		})
		.then((data) => {
		const {icon} = data.weather[0];
		console.log(data);
		temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
		Max.textContent = "Max Temp: "+ " " + Math.floor(data.main.temp_max - kelvin) + "°C";
		Min.textContent = "Min Temp: "+ " " + Math.floor(data.main.temp_min - kelvin) + "°C";
		summary.textContent = data.weather[0].description;
		loc.textContent = data.name + "," + data.sys.country;
		Wind.textContent = "Wind speed: " + " " + data.wind.speed + " " + " " + "km/h" ;
		humid.textContent = "Humidity: " + " " + data.main.humidity + " " + "%";

		// convert sunrise time json to new date and time
		let unix = 11625443744;
        let date = new Date(unix*1000);
		// sunrise.innerText = date;

		// To get icon according to the weather condition
		const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
		iconImg.src = iconUrl;

		// To change background according to weather type 
		if(summary.textContent == "overcast clouds") {
			document.body.style.backgroundImage = "url('assets/black clouds.jpg')";
			
		}
		else if(summary.textContent == "clear sky"  ) {
				document.body.style.backgroundImage = "url('assets/clear-sky.jpg')";
		}
		else if(summary.textContent == "sunny") {
			document.body.style.backgroundImage = "url('assets/sunny day.jpg')";
		}
		else if(summary.textContent == "shower rain") {
			document.body.style.backgroundImage = "url('assets/raining.jpg')";
		}
		else if(summary.textContent == "snow") {
			document.body.style.backgroundImage = "url('assets/snow.jpg')";
		}
		else if(summary.textContent == "thunderstorm") {
			document.body.style.backgroundImage = "url('assets/thunder storm.jpg')";
		}
		else if(summary.textContent == "haze") {
			document.body.style.backgroundImage = "url('assets/haze.jpg')";
		}
		else if(summary.textContent == "scattered clouds") {
			document.body.style.backgroundImage = "url('assets/scattered clouds.jpg')";
	    }
				else if(summary.textContent == "scattere cloudsd") {
			document.body.style.backgroundImage = "url('assets/scattered clouds.jpg')";
	    }
		else if(summary.textContent == "light rain") {
			document.body.style.backgroundImage = "url('assets/raining.jpg')";
		}
		else if(summary.textContent == "few clouds") {
			document.body.style.backgroundImage = "url('assets/few clouds.jpg')";
		}
		else if(summary.textContent == "broken clouds") {
			document.body.style.backgroundImage = "url('assets/few clouds.jpg')";
		}

		});
	});

}
});
