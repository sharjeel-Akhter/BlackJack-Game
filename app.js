let para = document.querySelector(".para-el")
let card = document.querySelector(".card-el")
let sum = document.querySelector(".sum-el")
let start = document.querySelector(".start")
let newBtn = document.querySelector(".new")
let nbtn = document.querySelector(".newG")

let firstCard = randomNmbr();
let secondCard = randomNmbr();

let total = firstCard + secondCard;
let cards = [firstCard, secondCard];

let isAlive = true;
let stGame = false;



function randomNmbr(){
    return Math.floor(Math.random()* 11) + 1
}

function startGame(){
    if(isAlive){
        stGame = true;
        renderGame();
    }
}

function renderGame(){
    card.textContent = "Cards: " + cards.join("  ");
   
    sum.textContent = "Sum: " + total;

    if(total < 21 ){
        para.textContent = "You can add card from the deck..!"
    }else if(total === 21){
        win();
    }else{
        lost();
    }
}

start.addEventListener("click", () => {
    startGame();
})
newBtn.addEventListener("click", () => {
    addCard();
})
nbtn.addEventListener("click", () => {
    newGame();
})

function addCard(){
    if(stGame){
        if(isAlive){
            let newvalue = randomNmbr();;
            cards.push(newvalue);
            total +=newvalue;
            renderGame();
        }
    }
}

function newGame(){
    if(!isAlive){
        isAlive = true

        firstCard = randomNmbr()
        secondCard = randomNmbr()

        cards = [firstCard, secondCard]
        total = firstCard + secondCard

        renderGame()
    }
}

function win(){
    para.textContent = "Congrats!!! You have the blackjack..Wooohhoo"
    isAlive = false;
    cards = [firstCard, secondCard];
}
function lost(){
    para.textContent = "You have lost the Game :( "
    isAlive = false;
    cards = [firstCard, secondCard];
}

