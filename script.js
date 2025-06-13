
const apiKey = "5b5b731343003351e1780f61e7a57c21";



// const apiKey2 = process.env.MI_API_KEY;
// console.log(apiKey2);

console.log(process.env.MI_API_KEY)



async function getWeather() {


  const cityInput = document.getElementById("city-input");
  const city = cityInput ? cityInput.value.trim() : "";

  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.innerText = "Por favor ingresa una ciudad.";
    return;
  }

  try {
    resultDiv.innerText = "Buscando...";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
    );

    if (!response.ok) throw new Error("Ciudad no encontrada.");

    const data = await response.json();
    const { name, main, weather } = data;

    console.log(data.sys.sunset);

    resultDiv.innerHTML = `
      <p><strong>Ciudad:</strong> ${name}</p>
      <p><strong>Temperatura:</strong> ${main.temp}°C</p>
      <p><strong>Clima:</strong> ${weather[0].description}</p>
    `;
  } catch (error) {
    console.log(error);
    resultDiv.innerText = error.message;
  }
}

