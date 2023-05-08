let recipeSave = {}
let recipeSaveButtonText = $("#saveRecipe").text()

const settingsUmami = {
	async: true,
	crossDomain: true,
	url: 'https://themealdb.p.rapidapi.com/search.php?s=fish',
	method: 'GET',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'fb86f9c2b8mshf93f18832749770p146adajsn70f18f6fb0ba',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};

$.ajax(settingsUmami).done(function (response) {
	console.log(response);

    
    for (var i = 1; i < 10; i++) {
		if (response.meals[i]) {
			const recipeInfo = response.meals[i];
            const recipeCard = document.createElement("div");
            recipeCard.setAttribute("id", "card-recipe" + i);
            document.getElementById("card-container").appendChild(recipeCard);

            const recipeSection = document.createElement("section");
            recipeSection.setAttribute("id", "recipe-section" + i);
            recipeCard.appendChild(recipeSection);
			recipeCard.setAttribute("class", "card-style");

            const recipeSavbutton = document.createElement("a");
            recipeSavbutton.setAttribute("id", "saveRecipe");
			recipeSavbutton.setAttribute("class", "save-button")
            recipeSavbutton.innerText = "Save this recipe!";
            recipeSection.appendChild(recipeSavbutton);

			
            const recipeTitle = document.createElement("h3");
            recipeTitle.innerText = recipeInfo.strMeal;
            recipeSection.appendChild(recipeTitle);
			
            const recipeImage = document.createElement("img");
            recipeImage.setAttribute("class", "rrimage")
            recipeImage.setAttribute("src", recipeInfo.strMealThumb);
            recipeSection.appendChild(recipeImage);
			
            const recipeVideo = document.createElement("a");
            recipeVideo.setAttribute("href", recipeInfo.strYoutube);
            recipeVideo.setAttribute("target", "_blank");
            recipeVideo.innerText = "WATCH RECIPE VIDEO HERE!"
            recipeSection.appendChild(recipeVideo);

			
		}
		
    }
	
	for (var i = 1; i < response.meals.length; i++) {
			const recipeInfo = response.meals[i];
			console.log(recipeInfo.strMeal)
			recipeSave["recipeName"] = recipeInfo.strMeal
			recipeSave["ingredients"] = []
			for (var j = 1; j < 20; j++) {
				const  cookingMeasure = recipeInfo["strMeasure" + j]
				const cookingIngredient = recipeInfo["strIngredient" + j]
				console.log(cookingMeasure)
				console.log(cookingIngredient)

				recipeSave.ingredients.push({ingredients: cookingMeasure + " " + cookingIngredient})
					// let cookingMeasure = recipeInfo.strMeasure[j] = [];
					// let ingredName = recipeInfo.strIngredient[j] = [];
	
					// recipeSave.ingredients.push({"cookingMeasure":cookingMeasure, "ingredName":ingredName})
	
					// console.log(recipeInfo["strIngredient" + j].length > 0);
				} 
			}
			console.log(recipeSave)
			
		//upon clicking an 'a' element, create the Recipe with the elements of name, ingredients, and ingredient ammount
		$(".save-button").click(function(){
			if (recipeSaveButtonText === "recipe Saved!"){
				return
			}
			let recipeSaveList = JSON.parse(localStorage.getItem("savedRecipes")) 
			if (!recipeSaveList){
				recipeSaveList = []
			}
			recipeSaveList.push(recipeSave)
		
			localStorage.setItem("savedRecipes",JSON.stringify(recipeSaveList))
			recipeSave = {};
		});
});


