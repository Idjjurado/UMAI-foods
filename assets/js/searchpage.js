var localRecipe = localStorage.getItem("recipeURL")
// let recipeSave = {}
// let recipeSaveButtonText = $("#saveRecipe").text()

const settingsSearchmeal = {
	async: true,
	crossDomain: true,
	url: localRecipe,
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8fba490658msh30c9e8c9a48dc6bp15f465jsnfa24de2a900b',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};

$.ajax(settingsSearchmeal).done(function (response) {
    console.log(response);
    
    const recipeInfo = response.meals[0];
    const addList = document.querySelector("#ingredients-list")
    
    $("#recipe-title").text(recipeInfo.strMeal);
    $("#rrimage").attr("src", recipeInfo.strMealThumb);
    $("#instruction-block").text(recipeInfo.strInstructions);
    $("#recipe-video").attr(recipeInfo.strYoutube);


    for (var i = 1; i < 20; i++) {
        if (recipeInfo["strIngredient" + i].length > 0) {
            const ingredList = document.createElement("li");
            const cookingMeasure = recipeInfo["strMeasure" + i];
            const ingredName = recipeInfo["strIngredient" + i];

            ingredList.textContent = cookingMeasure + " " + ingredName;
            addList.appendChild(ingredList);

            // recipeSave.ingredients.push({"cookingMeasure":cookingMeasure, "ingredName":ingredName})

            console.log(recipeInfo["strIngredient" + i].length > 0);
        }
    }		// console.log(recipeSave)


});


// $("#saveRecipe").click(function(){
//     if (recipeSaveButtonText === "recipe Saved!"){
//         return
//     }
//     let recipeSaveList = JSON.parse(localStorage.getItem("savedRecipes")) 
//     if (!recipeSaveList){
//         recipeSaveList = []
//     }
//     recipeSaveList.push(recipeSave)

//     localStorage.setItem("savedRecipes",JSON.stringify(recipeSaveList))
//     recipeSave = {};
//     $("#saveRecipe").text("recipe Saved!")
// });



// This would be to create elements on the page
// function getApi() {
//   var requestUrl = 'https://api.github.com/users?per_page=5';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       //Using console.log to examine the data
//       console.log(data);
//       for (var i = 0; i < data.length; i++) {
//         //Creating a h3 element and a p element
//         var userName = document.createElement('h3');
//         var userUrl = document.createElement('p');

//         //Setting the text of the h3 element and p element.
//         userName.textContent = data[i].login;
//         userUrl.textContent = data[i].url;

//         //Appending the dynamically generated html to the div associated with the id="users"
//         //Append will attach the element as the bottom most child.
//         usersContainer.append(userName);
//         usersContainer.append(userUrl);
//       }
//     });
// }
// fetchButton.addEventListener('click', getApi);