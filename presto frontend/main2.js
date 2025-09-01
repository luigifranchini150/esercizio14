//.json è javaScript Object Notification
//API, chiavi che ci permettono di raggiungere un .json ONLINE
//chiamata asincrona,fetch(), che ci permette di collegarci ad un JSON ed ad esso estrarre il dato sotto forma di Promise.
//.then(): questo metodo ci permette di convertire la Promise nel dato Strutturale e di poterlo utiòizzare come tale su JS.
//PASSAGGI, fetch()= e ottengo .json e ottengo una Promise
//.then()= converto la Promise in un dato Strutturale js
//.then()= utilizzare il dato ottenuto
//.json(), metodo delle Promise che mi permette di convertirlo in oggetto js

fetch(`./json.json`).then( (response)=> response.json() ).then( (data)=> {
console.log(data);



let radioWrapper = document.querySelector(`#radioWrapper`);
function radioCreate(){
let categories = data.map( (annuncio)=> annuncio.category );
console.log(categories);
//let uniqueCategories = [];
//!true
//!false
//let uniqueCategories = [];Array.from(new Set(categories));
//uniqueCategories.
//categories.forEach( (category)=> {
//if  (  !uniqueCategories.includes(category) ){
         //uniqueCategories.push(category)
//}
//});
 //set():Classe che mi restituisce, partendo da un array, un nuovo oggetto di tipo Set il quale contiene solo valori univoci
//Array.from(): mi permette di convertire un array-like in un array

let uniqueCategories =  Array.from( new Set(categories));
uniqueCategories.forEach( (category)=>{
let div = document.createElement(`div`);
div.classList.add(`form-check`);
div.innerHTML = `
<input class="form-check-input" type="radio" name="categories" id="radioDefault1">
<label class="form-check-label" for="radioDefault1">
 tutte le categorie
 </label>

`;
 radioWrapper.appendChild(div);

});


};
radioCreate();
});





  

//console.log(uniqueCategories);







