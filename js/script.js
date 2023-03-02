let a;
let b;
let c;

async function getWeatherData() { //asynchronous function
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${a}&aqi=no`)
    .then( function (res) {
            console.log(res);
            return res.json()
        }
    );
document.getElementById("feels-like").innerHTML=response.feelslike_f;

    console.log('response', response);
    // console.log(response.location.name);
    document.getElementById("feels-like").innerHTML ="Feels Like: "+ response.current.feelslike_c +"°C"   ;
    document.getElementById("country").innerHTML = response.location.country +` <sub class="state" > ${response.location.region}</sub>`   ;
    document.getElementById("city").innerHTML = response.location.name    ;
    document.getElementById("temp").innerHTML = response.current.temp_c +"°C"   ;
    b=response.current.condition.icon;
    c=response.current.condition.text;
    document.getElementById("icon").innerHTML=`<img class="temp-image" src='${b}' alt=""> ` + `<br><p class="image-text">  ${c}</p>`
    response.current.co
}
// response.current.condition.text == 'Sunny'
function result(){
    a=document.getElementById("input").value;
    console.log(a);
    getWeatherData();
}
