let city;

//asynchronous function
async function getWeatherData() { 
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${city}&aqi=no`)
        .then(function (res) {
            console.log(res);
            return res.json()
        }
        );
    document.getElementById("feels-like").innerHTML = response.feelslike_f;
    console.log('response', response);
    document.getElementById("temp").innerHTML = response.current.temp_f + "°";
    document.getElementById("feels-like").innerHTML = "Feels  " + response.current.feelslike_f + "°";
    document.getElementById("icon").innerHTML = `<img src='./images/partly-claudy.png' alt=""> `
    document.getElementById("input").value = response.location.name;

}
document.getElementById("input").addEventListener('keyup',
    function (event) {
        if (event.code === 'Enter') {
            event.preventDefault();
            city = document.getElementById("input").value;
            console.log(city);
            getWeatherData();
        }
    })