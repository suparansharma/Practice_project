fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data =>catchFoodDetails(data));

const catchFoodDetails = allFoodInfo =>{

    const categoriesItem = allFoodInfo.categories;
    const allFoodDiv = document.getElementById("allFoodDiv");
    categoriesItem.forEach(food => {
        const foodDiv = document.createElement("div");
        foodDiv.innerHTML = `
        <h4>${food.strCategory}</h4>
        `
        allFoodDiv.appendChild(foodDiv);
        console.log(food.strCategory);
    });
  

    
}


// function catchFoodDetails(FoodDetails){
    
//     const food = FoodDetails.categories;
//     console.log(food);
//     // for (let i = 0; i <  food.length; i++) {
//     //     const element =  food[i];
//     //     console.log(element);
        
//     // }
 