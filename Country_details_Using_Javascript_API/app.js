fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data =>  displayData(data))

function displayData(data){
    
    const ul = document.getElementById("underLine");
    const countyInformation = document.getElementById("countyInformation");

// for (let i = 0; i < data.length; i++) {
//     const element = data[i];
//     const countryName = element.name.common;
//     const countryFlag = element.flags.png;
//     const countryCapital = element.capital;
//     const country = document.createElement("div");

//     const h3 = document.createElement("h3");
//     h3.innerText =countryName;

//     const p = document.createElement("p");
//     p.innerText=countryCapital;
//     const img = document.createElement("img");
//     img.src=countryFlag;

    
//     country.appendChild(h3);
//     country.appendChild(p);
//     country.appendChild(img);
//     countyInformation.appendChild(country);
//     // countyInformation.appendChild(country);

//     console.log(element.name.common);

// }

data.forEach(country => {
    const divCountry = document.createElement("div");
    divCountry.className = 'country';
    const countryInfo = `
    <h1>${country.name.common}</h1>
    <p>${country.capital}</p>
    <button onclick ="displayClickCounty('${country.name.common}')">More Details</button>
    ` 
    const countryFlag = country.flags.png;
    const img = document.createElement("img");
    //img.src=countryFlag;
    divCountry.innerHTML=countryInfo; 
   
    divCountry.appendChild(img);
    countyInformation.appendChild(divCountry);
});
}


const displayClickCounty = clickCountry =>{
    const url = `https://restcountries.com/v3.1/name/${clickCountry}`;
    fetch(url)
    .then(res => res.json())
    .then(countryDtls => displayClickData(countryDtls[0]))
    console.log(url);
}

const displayClickData = dataShow =>{

    const countyI = document.getElementById("countryDetails");
     countyI.innerHTML = `
    <h1>Country name:${dataShow.name.common}</h1>
    <p>Population:${dataShow.population}</p>
    <img src="${dataShow.flags.png}">

    `
    console.log(dataShow)
}