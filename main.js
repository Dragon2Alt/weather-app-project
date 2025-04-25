
/*WEATHER API*/
  const apiKey = "312abfd953c970ceaf81f671079f6e22";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Cavite";
  
  async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    
/*CHECKING IF THE API WORKING*/
    console.log(data);
  }
  checkWeather();
  
  /*DATE AND TIME*/
  function updateDateTime() {
  const now = new Date();

  // Array of month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Get date components
  const month = monthNames[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();

  // Get time components with leading zeros
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  // Update HTML elements
  document.getElementById('month').textContent = month;
  document.getElementById('day').textContent = day;
  document.getElementById('year').textContent = year;
  document.querySelector('.time').textContent = `${hours}:${minutes}`;
}

// Initial call to display immediately
updateDateTime();

// Update every minute (60000 milliseconds)
setInterval(updateDateTime, 60000);

    
/*CHANGE BACKGROUND COLOR AND TEXT*/
const greenBtn = document.querySelector('.green');
const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const blackBtn = document.querySelector('.black')

greenBtn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url(Wallpaper/NightSky.jpg)";
  document.body.style.color = 'white';
});

redBtn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url(Wallpaper/bluesky.jpg)";
  document.body.style.color = 'white';
});

blueBtn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url(Wallpaper/orangesky.jpg)";
document.body.style.color = 'white';
});

blackBtn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url(NightSky.jpg)";
document.body.style.color = 'white';
});

/*MENU NAVIGATION BAR*/
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
