var buttonEl = document.querySelector("#searchBtn");
var inputEl = document.querySelector("#input");
var foodEl = document.querySelector("#food");

if (localStorage.getItem("FoodInfo1")){
    var foodHeader = document.createElement("div");
    foodHeader.setAttribute("class", "card-header");
    foodHeader.classList = "mt-3"
    
    var foodTitle = document.createElement("div");
    foodTitle.setAttribute("class", "card-header-title");
    var input0 = localStorage.getItem("FoodInfo1");
    foodTitle.textContent = input0;
         
    var foodP1= document.createElement("p");
    foodP1.setAttribute("class", "card-content");
    var input1 = localStorage.getItem("FoodInfo2");
    foodP1.textContent = input1;
         
    var foodP2= document.createElement("p");
    foodP2.setAttribute("class", "card-content");
    var input2 = localStorage.getItem("FoodInfo3");
    foodP2.textContent = input2;
         
    var foodP3= document.createElement("p");
    foodP3.setAttribute("class", "card-content");
    var input3 = localStorage.getItem("FoodInfo4");
    foodP3.textContent = input3;

    var priceEl = document.createElement("p");
    priceEl.setAttribute("class", "card-content")
    var input5 = localStorage.getItem("foodPrice");
    priceEl.textContent = input5;
 
    foodHeader.appendChild(foodTitle);
    foodTitle.appendChild(foodP1);
    foodTitle.appendChild(foodP2);
    foodTitle.appendChild(foodP3);
    foodEl.appendChild(foodHeader);
    foodEl.appendChild(priceEl);
  
}

// First API EDAMAM getting nutritonal facts - Protein, Carbs, Fat
var getNutrition = function(food){
    var apiUrl = "https://api.edamam.com/api/nutrition-data?app_id=34642c65&app_key=d86fd599cef056ad8909daacaab63cf2&nutrition-type=logging&ingr=" + food;
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
        var foodData1 =  (data.totalNutrients.PROCNT.quantity / data.calories).toFixed(2) +  data.totalNutrients.PROCNT.unit + " of " + data.totalNutrients.PROCNT.label  + " per calorie";
        var foodData2 = (data.totalNutrients.CHOCDF.quantity / data.calories).toFixed(2) +  data.totalNutrients.CHOCDF.unit + " of " + data.totalNutrients.CHOCDF.label  + " per calorie";
        var foodData3 = (data.totalNutrients.FAT.quantity / data.calories).toFixed(2) +  data.totalNutrients.FAT.unit + " of " + data.totalNutrients.FAT.label  + " per calorie";
            
        var foodHeader = document.createElement("div");
        foodHeader.setAttribute("class", "card-header");
        foodHeader.classList = "mt-3"
        
        var foodTitle = document.createElement("div");
        foodTitle.setAttribute("class", "card-header-title");
        foodTitle.textContent = food;
        localStorage.setItem("FoodInfo1" , food);
        var input0 = localStorage.getItem("FoodInfo1");
        foodTitle.textContent = input0;
             
        var foodP1= document.createElement("p");
        foodP1.setAttribute("class", "card-content");
        foodP1.textContent = foodData1;
        localStorage.setItem("FoodInfo2" , foodData1 );
        var input1 = localStorage.getItem("FoodInfo2");
        foodP1.textContent = input1;
        
        var foodP2= document.createElement("p");
        foodP2.setAttribute("class", "card-content");
        foodP2.textContent = foodData2;
        localStorage.setItem("FoodInfo3" , foodData2);
        var input2 = localStorage.getItem("FoodInfo3");
        foodP2.textContent = input2;
             
        var foodP3= document.createElement("p");
        foodP3.setAttribute("class", "card-content");
        foodP3.textContent = foodData3;
        localStorage.setItem("FoodInfo4" ,  foodData3);
        var input3 = localStorage.getItem("FoodInfo4");
        foodP3.textContent = input3;
             
        foodHeader.appendChild(foodTitle);
        foodTitle.appendChild(foodP1);
        foodTitle.appendChild(foodP2);
        foodTitle.appendChild(foodP3);
        
        foodHeader.appendChild(foodTitle);
        foodTitle.appendChild(foodP1);
        foodTitle.appendChild(foodP2);
        foodTitle.appendChild(foodP3);
        foodEl.appendChild(foodHeader);
        
        })
    })
};

// Second API REDCIRCLE getting price information on top four best matched products then averaging the price.
var getProductPrice = function(foodPrice){
    var apiUrl2 = "https://api.redcircleapi.com/request?api_key=8F36CF55536D4A5E85C6E3625ECB6127&type=search&search_term=" + foodPrice + "&sort_by=best_match";
    fetch(apiUrl2).then(function(response){
        response.json().then(function(data){
        console.log(data)

        var priceEl = document.createElement("p");
        priceEl.setAttribute("class", "card-content")
        priceEl.textContent = "$" + ((data.search_results[0].offers.primary.price + data.search_results[1].offers.primary.price + data.search_results[2].offers.primary.price + data.search_results[3].offers.primary.price) / 4).toFixed(2) + " Avg Price";
        localStorage.setItem("foodPrice" ,  priceEl.textContent);
        var input5 = localStorage.getItem("foodPrice");
        priceEl.textContent = input5;

        foodEl.appendChild(priceEl);
        foodEl.appendChild(saveBtn);
        })
    })
};

var getPrice= function(event){
    event.preventDefault()
    var price = inputEl.value.trim();
    getProductPrice(price);
};

var getFood = function(event){
    event.preventDefault()
    var food = inputEl.value.trim();
    getNutrition(food);
};

buttonEl.addEventListener("click", getFood);
buttonEl.addEventListener("click", getPrice);

