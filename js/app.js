/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

    let game;
    document.querySelector('#btn__reset').addEventListener('click', () => {
        game = new Game();
        game.startGame();
    } )

    const qwerty = document.querySelector('#qwerty');
    let guess;
         qwerty.addEventListener('click', (e) => {
            // determine that a button has been clicked

            if(e.target.tagName === "BUTTON") {
               guess = e.target;

               game.handleInteraction(guess);
            }
         })