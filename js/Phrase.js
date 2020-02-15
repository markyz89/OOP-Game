/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(){
        
        let phraseArray = this.phrase.split('');
        // easier to work with an array
        const display = document.querySelector('#phrase ul')

        // loop over the array and create an li to add to the display
        phraseArray.forEach((item)=> {
            let markUp = document.createElement('LI');
            markUp.innerHTML = item;
            if(item != ' ') {
                markUp.className = "hide letter "+item;
            } else {
                markUp.className = "space";
            }

            display.appendChild(markUp)
        })
    }
    checkLetter(guess){

        // disable the button that was pressed whether or not letter matches
        guess.disabled = true;

                // check if the phrase includes the letter
               if(this.phrase.includes(guess.innerHTML)) {

                // if it does, change the class of letter chosen, and search for all instances of that letter in the phrase
                  guess.className += " chosen";
                  let lettersToReveal = document.querySelectorAll(`.${guess.innerHTML}`);

                // call showMatchedLetter method, passing it the array of letters to reveal
                  this.showMatchedLetter(lettersToReveal);

                  // check for win
                  game.checkForWin();

               } else { 
                   // turn key orange
                   guess.className += " wrong";
                   // remove a life                   
                   game.removeLife();
               }
    }
    showMatchedLetter(letters){
        // loop over array of letters to reveal and update classname to reveal them.
        for(let i=0; i<letters.length; i++) {

            letters[i].classList.replace('hide', 'show');
         }
    }
 }