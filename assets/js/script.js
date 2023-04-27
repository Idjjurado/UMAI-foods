const settingsRandommeal = {
	async: true,
	crossDomain: true,
	url: 'https://themealdb.p.rapidapi.com/random.php',
	method: 'GET',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'fb86f9c2b8mshf93f18832749770p146adajsn70f18f6fb0ba',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};

$.ajax(settingsRandommeal).done(function (response) {
	console.log(response);
	
	const recipeInfo = response.meals[0];
	const addList = document.querySelector("#ingredients-list")
	
	$("#recipe-title").text(recipeInfo.strMeal);
	$("#rrimage").attr("src", recipeInfo.strMealThumb);
	$("#instruction-block").text(recipeInfo.strInstructions);


	for (var i = 1; i < 20; i++) {
		if (recipeInfo["strIngredient" + i].length > 0) {
			const ingredList = document.createElement("li");
			const cookingMeasure = recipeInfo["strMeasure" + i];
			const ingredName = recipeInfo["strIngredient" + i];

			ingredList.textContent = cookingMeasure + " " + ingredName;
			addList.appendChild(ingredList);

			console.log(recipeInfo["strIngredient" + i].length > 0);
		}
	}

});