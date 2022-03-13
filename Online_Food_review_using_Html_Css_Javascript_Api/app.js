fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data =>catchFoodDetails(data));

const catchFoodDetails = allFoodInfo =>{

    const categoriesItem = allFoodInfo.categories;
    const allFoodDiv = document.getElementById("allFoodDiv");
    categoriesItem.forEach(food => {
        const foodDiv = document.createElement("div");
        foodDiv.className = "foodClass";
        foodDiv.innerHTML = `
        <h4>${food.strCategory}</h4>
        <img src="${food.strCategoryThumb}" onclick="displayThisFoodDetail('${food.strCategory}')">
        `
        allFoodDiv.appendChild(foodDiv);
        //console.log(food.strCategory);
    });
    
}



document.getElementById("clickForSearch").addEventListener("click",function(){
    const searchFood = document.getElementById("searchFood").value;
    console.log(searchFood);

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`;
        fetch(url)
        .then(res => res.json())
        .then(data => searchValue(data.meals[0]))
}) 

function searchValue(values){
    const mainDiv = document.getElementById("allFoodDiv");
    mainDiv.style.display = "none";
    const selectFood = document.getElementById("selectFood");
    selectFood.style.display ="block";

    const searchDiv = document.createElement("div");
    searchDiv.className = "srNext";
    searchDiv.innerHTML=`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${values.strMealThumb}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${values.strInstructions}</p>
  </div>
</div>
    <h1>${values.strCategory}</h1>
    `

    selectFood.appendChild(searchDiv);
    console.log(values);
}

const displayThisFoodDetail = foodData =>{
    const mainDiv = document.getElementById("allFoodDiv");
    mainDiv.style.display = "none";
    const selectFood = document.getElementById("selectFood");
    selectFood.style.display ="block";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodData}`
    fetch(url)
    .then(res => res.json())
    .then(data => oneSelectFood(data.meals[0]))
}


const oneSelectFood = details =>{
    const selectFood = document.getElementById("selectFood");
    const selectDiv = document.createElement("div");
    selectDiv.className = "srNext";
    selectDiv.innerHTML=`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${details.strMealThumb}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${details.strInstructions}</p>
  </div>
</div>
    <h1>${details.strCategory}</h1>
    `
    selectFood.appendChild(selectDiv);
}

// const showDetailsOfFood = see =>{





//////work for click
    // const selectFood = document.getElementById("selectFood");
    // const fdv = document.createElement("div");
    // fdv.innerHTML=`
    // <img src ="${see.strMealThumb}" >
    // <p>${see.strInstructions}</p>
    // `
    // selectFood.appendChild(fdv);
    // console.log(see)


// function displayThisFoodDetail(){
//     console.log("click")
// }


// function catchFoodDetails(FoodDetails){
    
//     const food = FoodDetails.categories;
//     console.log(food);
//     // for (let i = 0; i <  food.length; i++) {
//     //     const element =  food[i];
//     //     console.log(element);
        
//     // }
 