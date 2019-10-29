const cards = document.querySelectorAll('.memory-card');

var score=0;
let hasFlippedCard =false;
let lockBord = false;
let firstCard,secondCard;
function flipCard() {
    if(lockBord) return;
    if(this === firstCard) return;
   this.classList.toggle('flip');

   if(!hasFlippedCard){
       //first click
       hasFlippedCard =true;
       firstCard = this;
       return;
   }
  
       //second click
      
       secondCard = this;
       checkForMatch();
   
}
   
function checkForMatch() {
let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
//do card match

isMatch ? disableCards() : unflipCards();


}

function disableCards() {
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
    score +=1;
    document.getElementById('score').innerHTML = score;
    resetbord();
}

function unflipCards() {
    lockBord =true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
       resetbord();
    }, 1500);
}
function  resetbord(){
    [hasFlippedCard,lockBord] = [false,false];
    [firstCard,secondCard] =[null,null];
}




cards.forEach(card => card.addEventListener('click',flipCard));



