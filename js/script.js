async function getWeatherData() { //asynchronous function
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=kolkata&aqi=no")
    .then( function (res) {
            console.log(res);
            return res.json()
        }
    );
document.getElementById("feels-like").innerHTML=response.feelslike_f;

    console.log('response', response);
    // console.log(response.location.name);
    document.getElementById("feels-like").innerHTML ="Feels Like: "+ response.current.feelslike_c +"°C"   ;
    document.getElementById("country").innerHTML = response.location.country   ;
    document.getElementById("city").innerHTML = response.location.name    ;
    document.getElementById("temp").innerHTML = response.current.temp_c +"°C"   ;
}
getWeatherData();