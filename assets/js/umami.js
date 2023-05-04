// let recipeSave = {}
// let recipeSaveButtonText = $("#saveRecipe").text()

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
            recipeSection.setAttribute("id", "recipe-section");
            recipeCard.appendChild(recipeSection);

            const recipeSave = document.createElement("a");
            recipeSave.setAttribute("id", "saveRecipe");
            recipeSave.innerText = "Save this recipe!";
            recipeSection.appendChild(recipeSave);

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

            const recipeLink = document.createElement('a');
			      recipeCard.parentNode.insertBefore(recipeLink, recipeCard);
			      recipeLink.appendChild(recipeCard);
            recipeLink.setAttribute("class", "card-style");
			      recipeLink.setAttribute("href", recipeInfo.strSource);
		}
    
    }
});

	// $.ajax(settingsRandommeal).done(function (response) {
	// 	console.log(response);
		
	// 	const recipeInfo = response.meals[0];
	// 	const addList = document.querySelector("#ingredients-list")
		
	// 	$("#recipe-title").text(recipeInfo.strMeal);
	// 	$("#rrimage").attr("src", recipeInfo.strMealThumb);
	// 	$("#instruction-block").text(recipeInfo.strInstructions);
	// 	$("#recipe-video").attr(recipeInfo.strYoutube);

	// 	recipeSave ["recipeName"] = recipeInfo.strMeal
	// 	recipeSave ["ingredients"] = []

	// 	for (var i = 1; i < 20; i++) {
	// 		if (recipeInfo["strIngredient" + i].length > 0) {
	// 			const ingredList = document.createElement("li");
	// 			const cookingMeasure = recipeInfo["strMeasure" + i];
	// 			const ingredName = recipeInfo["strIngredient" + i];

	// 			ingredList.textContent = cookingMeasure + " " + ingredName;
	// 			addList.appendChild(ingredList);

	// 			recipeSave.ingredients.push({"cookingMeasure":cookingMeasure, "ingredName":ingredName})

	// 			console.log(recipeInfo["strIngredient" + i].length > 0);
	// 		}
	// 	} console.log(recipeSave)

	// });


	// $("#saveRecipe").click(function(){
	// 	if (recipeSaveButtonText === "recipe Saved!"){
	// 		return
	// 	}
	// 	let recipeSaveList = JSON.parse(localStorage.getItem("savedRecipes")) 
	// 	if (!recipeSaveList){
	// 		recipeSaveList = []
	// 	}
	// 	recipeSaveList.push(recipeSave)

	// 	localStorage.setItem("savedRecipes",JSON.stringify(recipeSaveList))
	// 	recipeSave = {};
	// 	$("#saveRecipe").text("recipe Saved!")
	// });