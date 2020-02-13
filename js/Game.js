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
            if(e.target.tagName === "BUTTON") {
               guess = e.target;

               // console.log(this.activePhrase)
               this.activePhrase.checkLetter(guess);
            }
         })


         //disable selected letter onscreen keyboard button
         
         //if does not include guessed letter:
         // add wrong class to selected keyboard letter and call removeLife()
         
         //if phrase contains selected letter, call showMatchedLetter() and call checkForWin()
         // if won, call gameOver()
     }

     removeLife() {
        let lives = document.querySelectorAll('.tries');

         lives[0].firstChild.src = "images/lostHeart.png"
         lives[0].className = "";

        this.missed -= 1;
        console.log(this.missed)
        if(this.missed === 0) {
           this.gameOver();
        }


        // replace liveHeart with lostHeart image
        //increment missed property
        // five missed guesses, then call gameOver()
     }
     checkForWin(){
        //checking to see if revealed all letters.

        //loop over all letters
        // save the ones that have content other than an empty space
        // if the class on all of them is equal to show, you win?

         let characters = document.querySelectorAll('.letter');
         let letters = [];
         let gameWon = false;

         characters.forEach( (item) => {
            if(item.innerHTML !== ' ') {
               letters.push(item);
            }
         })
         let revealedLetters = 0;
         letters.forEach((item) => {
            if(item.className.includes('show')) {
               revealedLetters += 1;
            }
         })

         if (revealedLetters === letters.length) {
            gameWon = true;

            //display original start screen
            overlay.style.display = "block";
            // update overlay to say win
            overlay.className = "win";
            // update overlay css class to win.
            document.querySelector('#game-over-message').innerHTML = "WINNER WINNER, TOFU DINNER!";
            this.resetGame();
         }


     }
     gameOver(){
      this.resetGame();
      
        //display original start screen
        overlay.style.display = "block";
        // update overlay to say lose
        overlay.className = "lose";
      // update overlay css class to lose.
        document.querySelector('#game-over-message').innerHTML = "You Lose!";  
        
        
     }
     resetGame() {
        // remove lis
        document.querySelector('#phrase ul').innerHTML = '';

        // enables all keyboard keys
         const keys = document.querySelectorAll('.key')
         
         keys.forEach((item) => {
            item.className = "key";
            item.disabled = false;
         })

        // reset heart images
        this.missed = 5;
        const hearts = document.querySelectorAll('#scoreboard ol li');
        console.log(hearts);
        hearts.forEach(item => {
           item.className = "tries";
           item.firstChild.src = "images/liveHeart.png"
        })

        //reset active phrase
        this.activePhrase = null;
     }
 }