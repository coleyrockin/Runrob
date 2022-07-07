var buttonEl = document.querySelector("#searchBtn");
var inputEl = document.querySelector("#input");
var foodEl = document.querySelector("#food");



var getNutrition = function(food){
    var foodDiv = document.createElement("div");

    var apiUrl = "https://api.edamam.com/api/nutrition-data?app_id=34642c65&app_key=d86fd599cef056ad8909daacaab63cf2&nutrition-type=logging&ingr=" + food;
     fetch(apiUrl).then(function(response){
         response.json().then(function(data){
             var foodData =  data.totalNutrients.PROCNT.quantity +  data.totalNutrients.PROCNT.unit + " of " + data.totalNutrients.PROCNT.label  + " per " + data.totalWeight + " grams";
            foodDiv.textContent = foodData;
            foodEl.appendChild(foodDiv);
               console.log(data);

        });
    });
};

var getFood = function(event){
    event.preventDefault()
    var food = inputEl.value.trim();
    getNutrition(food);
};
buttonEl.addEventListener("click", getFood);
