// Tasty API URL
const url = 'https://tasty.p.rapidapi.com/recipes/list';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'fb86f9c2b8mshf93f18832749770p146adajsn70f18f6fb0ba',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

const response = fetch(url, options);
const result = JSON.parse(response);
console.log(result);
// const analyzeComment = (comment, callback) => {
//     // Creating an object to send to the server
//     const data = {
//             text: comment
//             , language: 'english'
//     };
//     // Encoding data for application/x-www-form-urlencoded content type
//     const formattedData = Qs.stringify(data);
//     // POST request to server
//     axios.post(API_URL, formattedData, { headers: REQUEST_HEADERS })
//             .then(response => {
//                const data = response.data;
//               // Calling a callback function with data from the server
//               callback(data)
//             })
//             .catch(error => console.error(error))
//   };

//   const displayResult = result => {
//     // Remove invisible class for main-result-block
//     const resultBlockElement = document.getElementById('main-result-block');
//     resultBlockElement.classList.remove('invisible');
  
//     // Setting the color of the result text depending on the response label
//     const label = result.label;
//     const resultElement = document.getElementById('result');
//     resultElement.setAttribute('class', label);
//     let resultText = '';
  
//     // Choosing the result text depending on response label
//     switch (label) {
//         case 'pos':
//             resultText = 'Wow! Your comment is very positive!';
//             break;
//         case 'neg':
//             resultText = 'Negative comment =(';
//             break;
//         case 'neutral':
//             resultText = 'Simple comment =)';
//             break;
//         default:
//             resultText = "Hmmm, can't understand your comment";
//     }
  
//     // Setting the result text
//     resultElement.textContent = resultText;
//   };  

//   const handleEmptyComment = () => {
//     const resultBlockElement = document.getElementById('main-result-block');
//     resultBlockElement.classList.add('invisible');
//     return alert('Your comment is empty =(');
//   };

//   // Button click handler
// const onAnalyzeButtonClick = () => {
//     // Getting a textarea element with a comment
//     const commentElement = document.getElementById('comment');
//     // Getting comment text
//     const commentText = commentElement.value.trim();
  
//     // Handle empty comment
//     if (!commentText) {
//             return handleEmptyComment();
//     }
//     // Calling the API and passing the result with the displayResult as a callback function
//     return analyzeComment(commentText, displayResult);
//   };