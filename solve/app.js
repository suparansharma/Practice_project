fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data =>  displayData(data))

function displayData(data){
    const countyInformation = document.getElementById("countyInformation");
    const ul = document.getElementById("underLine");

for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const countryName = element.name.common;
    const countryFlag = element.flags.png;
    const countryCapital = element.capital;
    const country = document.createElement("div");

    const h3 = document.createElement("h3");
    h3.innerText =countryName;

    const p = document.createElement("p");
    p.innerText=countryCapital;
    const img = document.createElement("img");
    img.src=countryFlag;
    
    country.appendChild(h3);
    country.appendChild(p);
    country.appendChild(img);
    countyInformation.appendChild(country);
    // countyInformation.appendChild(country);

    console.log(element.name.common);

}
}