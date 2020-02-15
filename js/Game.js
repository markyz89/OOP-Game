/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



 class Game {
     constructor() {
        this.missed = 5;
        this.phrases = [
         new Phrase ('ich spreche kein deutsh'),
         new Phrase ('ich liebe hier'),
         new Phrase ('wo wohnst du'),
         new Phrase ('das ist richtig'),
         new Phrase ('das ist zu teur')
         // I'm also learning German
        ];
        this.activePhrase = null;
     }
     startGame() {
      // hide start screen overlay
      const overlay = document.querySelector('#overlay');
      overlay.style.display = "none";  
      
      // call getRandomPhrase

      this.getRandomPhrase().addPhraseToDisplay();
      
      // phrase.prototype.addPhrasetoDisplay();
      this.handleInteraction();

     };
     getRandomPhrase() {
        // retrieve a phrase from this.phrases randomly
         let index = Math.floor(Math.random()  * this.phrases.length);
         this.activePhrase = this.phrases[index];
         return this.activePhrase;
     };
     handleInteraction() {
         //check to see if button matches letter in phrase
         const qwerty = document.querySelector('#qwerty');
         
         let guess;
         qwerty.addEventListener('click', (e) => {
            // determine that a button has been clicked
            if(e.target.tagName === "BUTTON") {
               guess = e.target;

               // call checkLetter method and pass it e.target
               this.activePhrase.checkLetter(guess);
            }
         })

     }

     removeLife() {
        // create an array of the heart images
        let lives = document.querySelectorAll('.tries');

        // change the first one in the array to a lost heart
         lives[0].firstChild.src = "images/lostHeart.png"
         // remove the class tries so that this heart won't be part of the lives array next time this method is called
         lives[0].className = "";

      // take away a life from the missed property
        this.missed -= 1;
        // if there are zero lives, end the game.
        if(this.missed === 0) {
           this.gameOver();
        }

     }
     checkForWin(){
        //checking to see if revealed all letters.

       
        

         let characters = document.querySelectorAll('.letter');
         let letters = [];

          // loop over all characters and save the ones that are letters - their content isn't an empty space
         characters.forEach( (item) => {
            if(item.innerHTML !== ' ') {
               letters.push(item);
            }
         })

         //loop over all letters
         let revealedLetters = 0;
         letters.forEach((item) => {
            if(item.className.includes('show')) {
               // saving all the shown letters 
               revealedLetters += 1;
            }
         })

         
        // if the class on all of them is equal to show, you win?
         if (revealedLetters === letters.length) {
            gameWon = true;

            //display original start screen
            overlay.style.display = "block";
            // update overlay to say win
            overlay.className = "win";
            // update overlay css class to win.
            document.querySelector('#game-over-message').innerHTML = "WINNER WINNER, TOFU DINNER!";

         }


     }
     gameOver(){
      
        //display original start screen
        overlay.style.display = "block";
        // update overlay to say lose
        overlay.className = "lose";
      // update overlay css class to lose.
        document.querySelector('#game-over-message').innerHTML = "You Lose!";  
        
      // call reset game method
      this.resetGame();
     }
     resetGame() {
        // remove lis - so no phrase displayed
        document.querySelector('#phrase ul').innerHTML = '';

        // enables all keyboard keys
         const keys = document.querySelectorAll('.key')
         
         // loop and undisable and reset classname
         keys.forEach((item) => {
            item.className = "key";
            item.disabled = false;
         })

        // reset heart images
        this.missed = 5;
        const hearts = document.querySelectorAll('#scoreboard ol li');
        hearts.forEach(item => {
           item.className = "tries";
           item.firstChild.src = "images/liveHeart.png"
        })

        //reset active phrase
        this.activePhrase = null;
     }
 }