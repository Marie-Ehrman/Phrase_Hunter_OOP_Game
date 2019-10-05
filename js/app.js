/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



document.getElementById('btn__reset').addEventListener('click', function () { 
    
    console.log('start button works');



    // const keyboard = document.getElementById('qwerty');
    
    // keyboard.addEventListener('click', function (e) {

    //     if ( e.target.className === 'key'){
    //         game.handleInteraction();
    //     }
    // })

});





//TEST OUT CLASSES
const game = new Game();
    
const phrase = new Phrase('Life is Like a Box of Chocolates');

console.log(game);
console.log(phrase);