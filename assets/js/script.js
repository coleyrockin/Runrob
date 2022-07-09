var buttonEl = document.querySelector("#searchBtn");
var inputEl = document.querySelector("#input");
var foodEl = document.querySelector("#food");



var getNutrition = function(food){
    


    var apiUrl = "https://api.edamam.com/api/nutrition-data?app_id=34642c65&app_key=d86fd599cef056ad8909daacaab63cf2&nutrition-type=logging&ingr=" + food;
     fetch(apiUrl).then(function(response){
         response.json().then(function(data){
             var foodData =  (data.totalNutrients.PROCNT.quantity / data.calories).toFixed(2) +  data.totalNutrients.PROCNT.unit + " of " + data.totalNutrients.PROCNT.label  + " per calorie";
             
             var foodHeader = document.createElement("div");
             foodHeader.setAttribute("class", "card-header");
             foodHeader.classList = "mt-3"
         
            
             var foodTitle = document.createElement("div");
             foodTitle.setAttribute("class", "card-header-title");
             foodTitle.textContent = f;
             
             var foodP= document.createElement("p");
             foodP.setAttribute("class", "card-content");
             foodP.textContent = foodData;
             
             
             
            
             
             foodHeader.appendChild(foodTitle);
             foodTitle.appendChild(foodP);
            
             
    
            foodEl.appendChild(foodHeader);
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
