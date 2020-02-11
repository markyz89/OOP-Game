/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(missed, phrases, activePhrase) {
        this.missed = missed;
        this.phrases = [
            'ich spreche kein deutsh',
            'ich liebe hier',
            'wo wohnst dU',
            'das ist richtig',
            'das ist zu teur'
        ];
        this.activePhrase = activePhrase;
     }
     startGame() {
        // call getRandomPhrase
     };
     getRandomPhrase() {
        // retrieve a phrase from this.phrases randomly
     };
     handleInteraction() {
         
     }
 }