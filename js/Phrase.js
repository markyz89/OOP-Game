/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(){
        //console.log(this.phrase)
        let phraseArray = this.phrase.split('');
        // console.log(phraseArray);
        const display = document.querySelector('#phrase ul')
        // console.log(display);

        phraseArray.forEach((item)=> {
            let markUp = document.createElement('LI');
            markUp.innerHTML = item;
            if(item != ' ') {
                markUp.className = "hide letter "+item;
            } else {
                markUp.className = "space";
            }
            // console.log(markUp)
            //display.innerHTML += markUp;
            display.appendChild(markUp)
        })
    }
    checkLetter(guess){
        // console.log(this);
 
        //        console.log(guess);
        guess.disabled = true;
        console.log(this.phrase);
               if(this.phrase.includes(guess.innerHTML)) {
                //   console.log('correct!')
                  guess.className += " chosen";
                  let lettersToReveal = document.querySelectorAll(`.${guess.innerHTML}`);
                //   console.log(lettersToReveal);

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
        for(let i=0; i<letters.length; i++) {

            letters[i].classList.replace('hide', 'show');
         }
    }
 }