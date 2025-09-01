let navbar = document.querySelector(`#navbar`);
let links = document.querySelectorAll(`nav-link`);
let logonavbar = document.querySelector(`#logonavbar`);

window.addEventListener(`scroll`, ()=>{
let scrolled = window.scrollY;
if(scrolled > 0){
navbar.classList.remove(`bg-dark`)
navbar.classList.add(`bg-warning`)
navbar.style.height= `140px`
links.forEach( (link)=> {;
link.style.color = 'var(--yellow)';
});

} else{
navbar.classList.add(`bg-dark`)
navbar.classList.remove(`bg-warning`)
navbar.style.height= `150px`
links.forEach( (link)=>{
link.style.color = 'var(--yellow)';
        });
    
        }   


    });
//chiamate asincrone
//setInterval(): crea un loop infinito in cui possiamo gestire la durataa delle singole iterazioni
//IL  setinterval è una funzione che vuole due parametri. Il primo è la calblack.Il secondo parametro è l'intervallo di tempo che deve passare tra una iterazione e l'altra
// clearInterval(): pulire un intervallo e interromperlo
// setTimeout: Fa partire un blocco di istruzioni dopo un tot di secondi
let firstNumber = document.querySelector(`#firstNumber`);
let secondNumber = document.querySelector(`#secondNumber`);
let thirdNumber =  document.querySelector(`#thirdNumber`);

let confirm = true;

function createInterval(n, element, time){
    let counter = 0;
    let interval = setInterval( ()=>{
    if(counter < n){
        counter++
        element.innerHTML = counter;
    }else{
        console.log(`adesso mi fermo`);
        clearInterval(interval);
        }

    }, time);
    //seconda chiamata asincrona
    setTimeout(() => {
        confirm = true;
    }, 8000);
}
//intersectionObserver:  è una Classe del browser che si occupa di far scattare una funzione bnel momento in cui sul brower sono visibili gli elementi HTML che noi gli indichiamo
//new è una keyword che mi permette di GENERARE UN OGGETTO partendo da una Classe
let observer = new IntersectionObserver((entries)=>{
    entries.forEach( ( entry)=> {
    if(entry.isIntersecting && confirm){
        createInterval(100, firstNumber, 300);
        createInterval(200, secondNumber,150);
        createInterval(300, thirdNumber,75);
        confirm = false;
        }
     });
});
observer.observe(firstNumber);

let reviews = [

    {user:`Matteo`, description:`Il più bel sito di annunci del mondo`, rank: 5},
    {user:`Alin`, description:`Veramente non mi da niente`, rank: 1},
    {user:`Michael`, description:`Mi piace tranne per Star Trek`, rank: 3},
    {user:`Arina`, description:`Star Wars è meglio`, rank: 5},

]
let swiperWrapper = document.querySelector(`.swiper-wrapper`);
reviews.forEach( (recensione)=>{
let div = document.createElement(`div`);
div.classList.add(`swiper-slide`);
div.innerHTML = `
   <div class="card-review">
      <p class="lead text-center">${recensione.description}</p>
      <p class="h4 text-center">${recensione.user}</p>
      <div class="d-flex justify-content-center star">
  
    </div>
    </div>
     `;
     swiperWrapper.appendChild(div);
});
let stars = document.querySelectorAll(`.star`);
stars.forEach((star, index)=>{

for (let i = 1; i <= reviews[index].rank; i++ ){
    let icon = document.createElement(`i`)
    icon.classList.add(`fa-solid`, `fa-star`);
    star.appendChild(icon); 
        }
    let difference = 5 - reviews[index].rank;
for (let i = 1; i <= difference; i++ ){
    let icon = document.createElement(`i`)
    icon.classList.add(`fa-regular`, `fa-star`);
    star.appendChild(icon); 

        }

   }) ;


//swiper
const swiper = new Swiper('.swiper',{
      effect: "flip",
      grabCursor: true,
      loop:true,
//navigation arrows
  //navigation: {
  //  nextEl:'.swiper-button-next',
   // prevEl:'.swiper-button-prev', 
     // },
     

autoplay: {
        delay: 3000,
        
 },
});
