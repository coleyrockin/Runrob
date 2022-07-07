var foodEl = document.querySelector("#food")

var getNutrition = function(food){
    var apiUrl = "https://api.edamam.com/api/nutrition-data?app_id=34642c65&app_key=d86fd599cef056ad8909daacaab63cf2&nutrition-type=logging&ingr=white-rice";
     fetch(apiUrl).then(function(response){
        response.json().then(function(data){
                console.log(data);

        });
    });
};

        getNutrition();