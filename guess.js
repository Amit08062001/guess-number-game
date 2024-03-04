let randomNumber = parseInt(Math.random()*100+1);
let userInput=document.querySelector('#guessField');
const submit = document.querySelector('#subt');
let preGuess=document.querySelector('.guesses')
let guessRemain=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver= document.querySelector('.resultParas');
const p =document.createElement('p');
let previousGuesses = [];
let numGuess=1;
let playgame = true;
let randomNumbers=[];

if(playgame){
    submit.addEventListener('click',function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
        
    });
}

 function validateGuess(guess){
   if(isNaN(guess)){
    alert(" please enter valid number")
   }
   else if(guess<1){
    alert(" please enter valid number")
   }
   else if( guess>100){
    alert(" please enter valid number")
   }
   else{
    if(numGuess===10){
        displayGuess(guess)
        displayMessage(`game over, randam number was ${randomNumber} `)
        endGame();
    }
    else{
        checkGuess(guess);
        displayGuess(guess);
      
    }
   }
 }
  function checkGuess(guess){
   if(guess===randomNumber){
    displayMessage(`you have guessed right random number ${guess} ,you won`);
    endGame()
   }
   else if(guess<randomNumber) {
       displayMessage( "number is low ")
   }
   else if(guess>randomNumber){
    displayMessage("number is high")
   }
  }
  
  function displayGuess(guess){
    userInput.value="";
    previousGuesses.push(guess);
    preGuess.innerHTML = previousGuesses.join(', ');
    numGuess++;
    guessRemain.innerHTML = `${10 - numGuess}`;
  
  }

  function displayMessage(message){
  
    lowOrHi.innerHTML=`<h1>${message}</h1>`   
  }


  function endGame(){
    userInput.value=""
    userInput.setAttribute('disabled',true)
    p.classList.add('button')
    p.innerHTML=` <h2 id="newGame">start new game<h2>`
    startOver.appendChild(p)
    playgame=false
    newGame()
  }

  function newGame(){
    const newGameBtn= document.querySelector('#newGame')
    newGameBtn.addEventListener('click',function(){
        randomNumber = parseInt(Math.random()*100+1);
        previousGuesses=[];
        numGuess=1
        preGuess.innerHTML='';
        lowOrHi.innerHTML='';
        preGuess.innerHTML = '';
        guessRemain.innerHTML=`${11-numGuess}`
        userInput.classList.remove('disabeld')
        userInput.removeAttribute('disabled',true)
        startOver.removeChild(p)
        playgame=true;

    })
  }
 

  

  
  
