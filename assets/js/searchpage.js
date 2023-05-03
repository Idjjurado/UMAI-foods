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
    
    const recipeInfo = response.meals[0];
    console.log(recipeInfo);
    
    for (var i = 1; i < 20; i++) {
        console.log(response.meals[i]);
        if (response.meals[i]) {
            const recipeCard = document.createElement("div");
            recipeCard.setAttribute("class", "card-style");
            recipeCard.setAttribute("id", "card-recipe");
            document.getElementById("card-container").appendChild(recipeCard);

            const recipeSection = document.createElement("section");
            recipeSection.setAttribute("id", "recipe-section");
            document.getElementById("card-recipe").appendChild(recipeSection);

            const recipeSave = document.createElement("a");
            recipeSave.setAttribute("id", "saveRecipe");
            document.getElementById("recipe-section").appendChild(recipeSave);

            const recipeTitle = document.createElement("h3");
            recipeTitle.setAttribute("id", "recipe-title");
            document.getElementById("recipe-section").appendChild(recipeTitle);
           
            const recipeImage = document.createElement("img");
            recipeImage.setAttribute("id", "rrimage");
            document.getElementById("recipe-section").appendChild(recipeImage);

            const recipeVideo = document.createElement("a");
            recipeVideo.setAttribute("id", "recipe-video");
            document.getElementById("recipe-section").appendChild(recipeVideo);
            
            $("#recipe-title").text(recipeInfo.strMeal);
            $("#rrimage").attr("src", recipeInfo.strMealThumb);
            $("#recipe-link").attr("href", recipeInfo.strSource);
            $("#recipe-video").attr(recipeInfo.strYoutube);
        }
    }
    
});