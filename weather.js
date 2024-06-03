const apiKey = 'feef2bb2503892414ba69701133185f0';
const city = 'dun'

 async function fechapi(city) {
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

   const data = await response.json();
   console.log(data);
  //  console.log(data.name
  //   );
   
  //  console.log(data.main.temp);
  //  console.log(data.
  //   wind.speed);
  //  console.log(data.main.
  //   humidity);
  //   console.log(data.
  //     visibility);
  fechui(data)
};

fechapi()

const cityElem = document.querySelector('.city')
const tem = document.querySelector('.temp');
const windSpeed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');
const visibility = document.querySelector('.visibility-distance');

const descriptionElem = document.querySelector('span')

function fechui(data) {
 
  cityElem.textContent = data.name;
  tem.textContent =Math.round(data.main.temp);
  windSpeed.textContent = data.wind.speed + "" + 'km/h';
  humidity.textContent = data.main.humidity;
  visibility.textContent = data.visibility/1000 + "" + 'km/h';  

  const currentdate = new Date();
  descriptionElem.textContent = currentdate.toDateString() ;
};


const formElement = document.querySelector(".search-form");
const inputElement = document.querySelector(".city-input");

formElement.addEventListener("submit", function (e) {
    e.preventDefault();

    const city = inputElement.value;
    if (city !== "") {
      fechapi(city);
        inputElement.value = "";
    }
});
