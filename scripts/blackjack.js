let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el');

document.getElementById('add-btn').style.visibility = 'hidden';
document.getElementById('sum-el').style.visibility = 'hidden';
document.getElementById('cards-el').style.visibility = 'hidden';

function getRandomCard(){
    let number = Math.floor(Math.random()*13) + 1;
    if (number > 10) {
        return 10;
    }
    else if (number === 1) {
        if (sum+11<=21){
            return 11;
        }
        else {
            return 1;
        }
    }
    else {
        return number;
    }
}

function startGame() {
    document.getElementById('start-btn').textContent = 'START NEW GAME';
    document.getElementById('add-btn').style.visibility = 'visible';
    document.getElementById('sum-el').style.visibility = 'visible';
    document.getElementById('cards-el').style.visibility = 'visible';
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    hasBlackJack = false;
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = 'Cards:';
    for (let i=0; i<cards.length; i++){
        let nextCard = ' ' + cards[i];
        cardsEl.textContent += nextCard;
    }
    if (sum < 21) {
        message = "Do you want to draw another card?";
    } else if (sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
        document.getElementById('add-btn').style.visibility = 'hidden';
    } else {
        message = "You lost, sorry.";
        isAlive = false;
        document.getElementById('add-btn').style.visibility = 'hidden';
    }
    messageEl.textContent = message;
}

function newCard(){
    if (isAlive && !hasBlackJack) {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}