let city;
var cursor = true;
let dropdown_city;
function reveal() {
  if (cursor) {
    document.getElementById("places").style.opacity = 1;
    cursor = false;
  } else {
    document.getElementById("places").style.opacity = 0;
    cursor = true;
  }
}

const dropDown = document.getElementsByClassName("dropDown");
for (let i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener("click", () => {
    document.getElementById("input").value = dropDown[i].innerHTML;
    city = document.getElementById("input").value;
    dropdown_city = dropDown[i].innerHTML;
    getWeatherData();
    
    if (cursor) {
      document.getElementById("places").style.opacity = 1;
      cursor = false;
    } else {
      document.getElementById("places").style.opacity = 0;
      cursor = true;
    }
  });
}

//asynchronous function
async function getWeatherData() { 
    const response = await fetch(
        // `http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${city}&aqi=no`
        `http://localhost:8000/about`
        )
        .then(function (res) {
            console.log(res);
            return res.json()



        }

        );
        for(let i = 0;i<response.length;i++){
            if(response[i].location === dropdown_city) {
                console.log(response[i]);
                // console.log('response', response);
                document.getElementById("temp").innerHTML = response[i].temp_c + "°";
                document.getElementById("feels-like").innerHTML = "Feels  " + response[i].feelsLikeC + "°";
                document.getElementById("icon").innerHTML = `<img src='./images/partly-claudy.png' alt=""> `
                document.getElementById("input").value = response[i].location;
            }
        }
        // console.log(response[0]);
        // console.log('response', response);
        // document.getElementById("temp").innerHTML = response[0].temp_c + "°";
        // document.getElementById("feels-like").innerHTML = "Feels  " + response[0].feelsLikeC + "°";
        // document.getElementById("icon").innerHTML = `<img src='./images/partly-claudy.png' alt=""> `
        // document.getElementById("input").value = response[0].location;
    

    //     );
    // document.getElementById("feels-like").innerHTML = response.feelslike_f;
    // console.log('response', response);
    // document.getElementById("temp").innerHTML = response.current.temp_f + "°";
    // document.getElementById("feels-like").innerHTML = "Feels  " + response.current.feelslike_f + "°";
    // document.getElementById("icon").innerHTML = `<img src='./images/partly-claudy.png' alt=""> `
    // document.getElementById("input").value = response.location.name;

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

