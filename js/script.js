//All Functions
function el(id){
    return document.querySelector(id)
}


//Element selection
const playerZero = el(".player--0");
const playerOne = el(".player--1");
const scoreZero = el("#score--0");
const scoreOne = el("#score--1");
const currentZero = el("#current--0");
const currentOne = el("#current--1");


const diceEl = el(".dice");
const btnNew = el(".btn--new");
const btnRoll = el(".btn--roll");
const btnHold = el(".btn--hold");

//Global variables
let scores, currentScore, activePlayer, playing, scoreBoard;

scores = [0,0];
scoreBoard = [0, 0,];
currentScore = 0;
activePlayer = 0;
playing = true

// Setting all value to zero
scoreZero.textContent = 0;
scoreOne.textContent = 0;
currentZero.textContent = 0;
currentOne.textContent = 0;

diceEl.classList.add('hidden');
// playerZero.classList.remove('player--winner');
// playerOne.classList.remove('player--winner');
 playerZero.classList.add('player--active');
 playerOne.classList.remove('player--active');


//Add event listeners to Roll Dice Button
btnRoll.addEventListener("click", function(){
if (playing){
    
// Generate a random dice roll
const dice = Math.floor(Math.random() * 6)+1;

//display the dice
diceEl.classList.remove('hidden');
diceEl.src = `images/dice-${dice}.png`;


//Add dice to current score
if(dice !== 1){
    currentScore += dice;
el(`#current--${activePlayer}`).textContent = currentScore;
}else{
    toogleAdd();
}
}
})

//Add Eventlistener to hold scores
btnHold.addEventListener("click", function(){
    if(playing){
  // Add current score to active player's score
  scores[activePlayer] += currentScore;
  el(`#score--${activePlayer}`).textContent = scores[activePlayer];


  //Check if active player's score is >= 100
  if(scores[activePlayer] >= 100){
      //change the state of our game to false
      playing = false;
      scoreBoard[activePlayer] +=1
      el(`#current--${0}`).textContent = (`ScoreBoard: ${scoreBoard[0]}`);
      el(`#current--${1}`).textContent = (`ScoreBoard: ${scoreBoard[1]}`);

      //Hide the dice
      //diceEl.classList.add('hidden');
      diceEl.src = '../images/gameover.jpg';
      el(`.player--${activePlayer}`).classList.add('player--winner');
      el(`.player--${activePlayer}`).classList.remove('player--active');
  }else{
    toogleAdd();
  }
    }

})



//Add Eventlistener to create a new game

btnNew.addEventListener('click', function(){
    scores=[0,0];
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1: 0;
    
    playing = true;
   

    //Clear all content on load
    scoreZero.textContent = 0;
    scoreOne.textContent = 0;  
    currentZero.textContent = 0;
    currentOne.textContent = 0;

    diceEl.classList.add('hidden');
    playerZero.classList.remove('player--winner');
    playerOne.classList.remove('player--winner');
    playerZero.classList.add('player--active');
    playerOne.classList.remove('player--active');
})

function toogleAdd(){
    currentScore = 0;
    el(`#current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer == 0 ? 1: 0;
    playerZero.classList.toggle("player--active");
    playerOne.classList.toggle("player--active");
}

//Adding new features
//Refactor this game and create as many functions as possible.
//Add gameover image in place of dice image .
// A score board
//If a player current score is zero, the shouldn't be able to hold
//If the current winner is one, them make the new player second player
//If possible
//Add a fireworks to
//Dice rolling