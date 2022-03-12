fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data =>  displayData(data))

function displayData(data){
    const countryName = document.getElementById("countryName");
    const ul = document.getElementById("underLine");

for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const countryName = element.name.common;
    const countryFlag = element.flags.png;
    const li = document.createElement("li");
    const img = document.createElement("img");
    li.innerText =countryName;
    img.src=countryFlag;
    ul.appendChild(li);
    ul.appendChild(img);

    console.log(element.name.common);

}
}