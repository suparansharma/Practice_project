const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click",function(){

    var typeInput = document.getElementById("typeInput").value;
    //console.log(typeInput);
    let countryName ="";

    

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${typeInput}&appid=805af68c71f238865fc5e9b2614a0e87`)
        .then(res => res.json())
        .then(data => {
            const cityName = data.name;

            const weatherResult = data.weather[0].main;

            const tempare = data.main.temp;
            const tempR = Math.round(tempare - 273.15);

            let iconSet = data.weather[0].icon;
            let icon = `https://openweathermap.org/img/wn/${iconSet}.png`;
            document.getElementById("images").src =icon;
            document.getElementById("cityName").innerText=cityName;
            document.getElementById("temp").innerText=tempR;
            document.getElementById("weather").innerText =weatherResult;
            console.log(tempR);
             console.log(weatherResult);
            console.log(cityName)
            console.log(data)
            document.getElementById("typeInput").value = "";
        }   )

        .catch(error =>console.log(error))

})

