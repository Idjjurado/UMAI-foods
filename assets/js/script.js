// const settingsTasty = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes',
// 	method: 'GET',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': '8fba490658msh30c9e8c9a48dc6bp15f465jsnfa24de2a900b',
// 		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
// 	}
// };

// $.ajax(settingsTasty).done(function (response) {
// 	console.log(response);
// });

// const settingsYuumly = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0',
// 	method: 'GET',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': '8fba490658msh30c9e8c9a48dc6bp15f465jsnfa24de2a900b',
// 		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
// 	}
// };

// $.ajax(settingsYuumly).done(function (response) {
// 	console.log(response);
// });

// const settingsCategories = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://themealdb.p.rapidapi.com/categories.php',
// 	method: 'GET',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': '8fba490658msh30c9e8c9a48dc6bp15f465jsnfa24de2a900b',
// 		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
// 	}
// };

// $.ajax(settingsCategories).done(function (response) {
// 	console.log(response);
// });

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
	$("#recipe-title").text(response.meals[0].strMeal);
	$("#rrimage").attr("src", response.meals[0].strMealThumb);

});