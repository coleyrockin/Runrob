var buttonEl = document.querySelector("#searchBtn");
var inputEl = document.querySelector("#input");
var foodEl = document.querySelector("#food");



var getNutrition = function(food){
    var apiUrl = "https://api.edamam.com/api/nutrition-data?app_id=34642c65&app_key=d86fd599cef056ad8909daacaab63cf2&nutrition-type=logging&ingr=" + food;
     fetch(apiUrl).then(function(response){
         response.json().then(function(data){
               console.log(data);

        });
    });
};

var getFood = function(event){
    event.preventDefault()
    var foodDiv = document.createElement("div");
    var food = inputEl.value.trim();
    
    foodDiv.textContent = foodData;
    foodEl.appendChild(foodDiv);
    getNutrition(food);
};
buttonEl.addEventListener("click", getFood);
