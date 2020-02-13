/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  const phrase = new Phrase('blimey');


// console.log(`Phrase - phrase: ${phrase.phrase}`)



// const logPhrase = (phrase) => { 
//     console.log(`Phrase - phrase: `, phrase); 
// }; 

// const game = new Game(); 
//     logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase()); logPhrase(game.getRandomPhrase()); 
    

    // resume page 8 step 6 of instructions

    // const game = new Game(); 
    // const randomPhrase = game.getRandomPhrase();
    // const phrase = new Phrase(randomPhrase); 
    // phrase.addPhraseToDisplay();
    
    // step 7
    // const game = new Game(); 
    // game.startGame(); 
    
    
    
    // console.log(`Active Phrase - phrase: ${game.activePhrase}`); 

    let game;
    document.querySelector('#btn__reset').addEventListener('click', () => {
        game = new Game();
        game.startGame();
    } )