/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



document.getElementById('btn__reset').addEventListener('click', function () { 
    
    console.log('start button works');

});




//TEST OUT CLASSES

//TEST CREATEPHRASES METHOD

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// const toLower = new Phrase(phrase.phrase);
// console.log(`Phrase ${index} - phrase: ${toLower.phrase}`);
// });

//TEST GETRANDOMPHRASE

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };

    // const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

const game = new Game();
game
.getRandomPhrase()
// .addPhraseToDisplay()
;