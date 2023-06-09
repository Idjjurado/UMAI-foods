const animeIds = [
	"52034",
	"5114",
	"41467",
	"51535",
	"9253",
	"28977",
	"43608",
	"38524",
	"39486",
	"9969",
	"11061",
	"15417",
	"820",
	"42938",
	"34096",
	"35180",
	"918",
	"28851",
	"4181",
	"15335",
	"52198",
	"2904",
	"37987",
	"35247",
	"47917",
	"37491",
	"19",
	"32281",
	"36838",
	"47778",
	"40682",
	"37510",
	"40028",
	"31758",
	"199",
	"32935",
	"17074",
	"48583",
	"263",
	"1",
	"50160",
	"44074",
	"50172",
	"24701",
	"33095",
	"37521",
	"2921",
	"48569",
	"44",
	"21939",
	"45576",
	"1575",
	"245",
	"46102",
	"21",
	"49387",
	"33050",
	"33352",
	"51019",
	"41084",
	"164",
	"34599",
	"457",
	"5258",
	"431",
	"53273",
	"11665",
	"23273",
	"50265",
	"40748",
	"40591",
	"28891",
	"36862",
	"2001",
	"1535",
	"40456",
	"34591",
	"22135",
	"35760",
	"7311",
	"44511",
	"42310",
	"3786",
	"40434",
	"28957",
	"38329",
	"19647",
	"37991",
	"31757",
	"10379",
	"12355",
	"32983",
	"28735",
	"4565",
	"7785",
	"33",
	"36098",
	"40834",
	"40417",
	"11741"
]
let recipeSave = {}
let recipeSaveButtonText = $("#saveRecipe").text()

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
	console.log(recipeInfo);
	$("#recipe-title").text(recipeInfo.strMeal);
	$("#rrimage").attr("src", recipeInfo.strMealThumb);
	$("#instruction-block").text(recipeInfo.strInstructions);
	$("#recipe-video").attr("href",recipeInfo.strYoutube);

	recipeSave ["recipeName"] = recipeInfo.strMeal
	recipeSave ["ingredients"] = []
	for (var i = 1; i < 20; i++) {
		if (recipeInfo["strIngredient" + i]) {
			const ingredList = document.createElement("li");
			const cookingMeasure = recipeInfo["strMeasure" + i];
			const ingredName = recipeInfo["strIngredient" + i];

			ingredList.textContent = cookingMeasure + " " + ingredName;
			addList.appendChild(ingredList);

			recipeSave.ingredients.push({"cookingMeasure":cookingMeasure, "ingredName":ingredName})

			console.log(recipeInfo["strIngredient" + i].length > 0);
		}
	} console.log(recipeSave)

});

//upon clicking an 'a' element, create the Recipe with the elements of name, ingredients, and ingredient ammount
$("#saveRecipe").click(function(){
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
	$("#saveRecipe").text("recipe Saved!")
});


function sample(arr) {
	const index = Math.floor(Math.random()*arr.length)
	return arr[index]
}

const id = sample(animeIds)
const settingsAnime = {
	async: true,
	crossDomain: true,
	url: `https://anime-db.p.rapidapi.com/anime/by-id/${id}`,
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '8fba490658msh30c9e8c9a48dc6bp15f465jsnfa24de2a900b',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};


$.ajax(settingsAnime).done(function (animeIds) {
	console.log(animeIds);
	console.log(animeIds.link);
	
	$("#anime-title").text(animeIds.title);
	$("#animeimage").attr("src", animeIds.image);
	$("#anime-synopsis").text(animeIds.synopsis);
	$("#link-anime").attr("href", animeIds.link);

});