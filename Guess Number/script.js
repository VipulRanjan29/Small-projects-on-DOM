let number = parseInt((Math.random()*100) + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numberGuess = 1 ;

let playGame = true ;

if(playGame){
    submit.addEventListener('click' , function(e){
     e.preventDefault();
     const guess = parseInt(userInput.value);
     validateGuess(guess);
    });
}

function validateGuess(guess){
     if(isNaN(guess)){
        alert('Please enter a valid number');
     }
     else if(guess < 1){
        alert('please enter a number greater than 0');
     }
     else if(guess > 100){
        alert('please enter a number less than 100');
     }
     else{
        prevGuess.push(guess)
        if(numberGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over , Random Number was ${number}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
     }
}

function checkGuess(guess){
    if(guess === number){
        displayMessage("You won!");
        endGame();
    }
    else if(guess > number){
        displayMessage("Number is Too High!");
    } 
    else{
        displayMessage("Number is Too Low!");
    }
}

function displayGuess(guess){
 userInput.value = '';
 guessSlot.innerHTML +=`${guess}, `;
 numberGuess++;
 remaining.innerHTML= `${11-numberGuess}`;
}

function displayMessage(message){
  lowOrhigh.innerHTML = `<p>${message}</p>`;
}

function newGame(){
  const newgameButton = document.querySelector('#newGame');
  newgameButton.addEventListener('click',function(e){
  number = parseInt((Math.random()*100) + 1);
  prevGuess = [];
  numberGuess = 1 ;
  guessSlot.innerHTML = '';
  remaining.innerHTML = `${11-numberGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  lowOrhigh.innerHTML = '';
  playGame = true ;
});
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false ;
    newGame();
}