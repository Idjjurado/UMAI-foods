const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes"))
if (!savedRecipes){
	$("#favorites").text("There are no recipes saved.")
}
else {
	console.log(savedRecipes)
	for (let i = 0; i < savedRecipes.length; i++){
		let recipeDiv = $("<div>")
		recipeDiv.append($("<p>").text(savedRecipes[i].recipeName))
		$("#favorites").append(recipeDiv)
		const ingredients = savedRecipes[i].ingredients
		let ingredientList = $("<ul>")
		recipeDiv.append(ingredientList)
		for (let j = 0; j < ingredients.length; j++) {
			const ing = $("<li>")
			ing.text('test')
			ingredientList.append(ing)
		}
	}
	$("#favorites")

}

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://themealdb.p.rapidapi.com/search.php?',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8fba490658msh30c9e8c9a48dc6bp15f465jsnfa24de2a900b',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

//check if it exists and rewrite the variable
let userQuery = (localStorage.getItem('userQuery')) ? 
                    JSON.parse(localStorage.getItem('userQuery')) : 
                           { "s" : ""};

//save user query
localStorage.setItem('userQuery', JSON.stringify(userQuery));


function buildQuery(){
    var query = [];
    for (var key in userQuery) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(userQuery[key]));
    }
    let new_url = "https://themealdb.p.rapidapi.com/search.php"+ (query.length ? '?' + query.join('&') : '');
    return(new_url);
}

let searchTxt;
document.querySelector("#input-recipe").addEventListener('change', function(){
    if(searchTxt !== this.value){
        searchTxt = this.value;
        userQuery["s"] =searchTxt;
        let url = buildQuery();
        localStorage.setItem("recipeURL", url);
    }
})

function doQuery(url, userQuery){
    let res = new URL(url);
    if(Object.keys(userQuery).length !== 0){
        let ind = 0;
        while (ind < Object.keys(userQuery).length){
            const param = Object.keys(userQuery)[ind];
            const value = userQuery[param];  
            res.searchParams.set(param, value);
            ind++;
        }
    }
    return ( res.href );
}

const userRecipe = {
    s : ""
}
//store url
let url = doQuery('https://themealdb.p.rapidapi.com/search.php', userRecipe);
//send to the browser
console.log(url);
console.log(localStorage);