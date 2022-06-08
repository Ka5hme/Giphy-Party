const apikey = 'z9qEJKCAcrrMCA7q77qHJXLDkv111Kra'
const Rating = "g";

var currentSerachTerm = '';
var page = 0;

let searchId = document.querySelector("#search")
let  inputId = document.querySelector("#input")
let  gifResultsId = document.querySelector("#gif-results")
let moreButton = document.querySelector("#moreBUtton")

searchId.addEventListener('submit', handleFormSumbit);

async function getResults(searchterm){
    const res = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${searchterm}`);
                          
    
    const response = await res.json()
    console.log(response)
    
    return response;
   
}

function displayResults(responseData){
    console.log(responseData)
    gifResultsId.innerHTML = ``
   // responseData.data.forEach((gif, i) => {
       console.log(responseData.data.length)
       for(let i = 0; i < responseData.data.length; i++ ){
        console.log(123)
      gifResultsId.innerHTML += `<img src="${responseData.data[i].images.original.url}" alt='gif'>`;
    };
  
    
}

async function handleFormSumbit(event){
    event.preventDefault();
    gifResultsId.innerHTML= ``;

    currentSerachTerm = inputId.value;
    console.log(currentSerachTerm)
    const finish = await getResults(currentSerachTerm);
    displayResults(finish)
}

async function more(event){
    const results = await getResults(currentSerachTerm);
    displayResults(finish)
    page++;
}

moreButton.addEventListener('click', more);