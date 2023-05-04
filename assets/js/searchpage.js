var localRecipe = localStorage.getItem("recipeURL")

const settingsSearchmeal = {
	async: true,
	crossDomain: true,
	url: localRecipe,
	method: 'GET',
	headers: {
        'content-type': 'application/json',
		'X-RapidAPI-Key': '8fba490658msh30c9e8c9a48dc6bp15f465jsnfa24de2a900b',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};

$.ajax(settingsSearchmeal).done(function (response) {
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
                        
        } else if (response.meals[i] === undefined) {
            return 'Undefined value!';
        }
    
    }
});