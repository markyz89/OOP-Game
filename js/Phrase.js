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

        // check if the phrase includes the letter
        if(this.phrase.includes(guess.innerHTML)) {
            return true;
        } else {
            return false;
        }

               
    }
    showMatchedLetter(letters){
        // loop over array of letters to reveal and update classname to reveal them.
        for(let i=0; i<letters.length; i++) {

            letters[i].classList.replace('hide', 'show');
         }
    }
 }