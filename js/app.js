/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// //Game Header font color change
$('.header').css('color','#3a3f58');


//set up a game
 var game;

$('#btn__reset').on('click', function () { 
    
    

        //clear li's for game replayability 
        //(ending up with this one line took my like 2 hours XD )
        document.querySelectorAll('#phrase li').forEach(li => li.parentNode.removeChild(li));

        //reset the key buttons for game replayability
        document.querySelectorAll('.keyrow').forEach(row => {

                document.querySelectorAll('button').forEach(button => {
                    button.disabled = false;
                    button.className = 'key';
                 });
        });

        //reset live hearts for replayability
        document.querySelectorAll('.tries')
                .forEach( li => li.firstElementChild
                .setAttribute('src', 'images/liveHeart.png'));

        //start new game             
        game = new Game();
        game.startGame();

});



//listen for keyboard clicks to handle the game interactivity
$('#qwerty button').on('click',  function (e) {

        if ( e.target.className === 'key'){
                game.handleInteraction(e.target);
        }

});

//listener for computer key presses to handle game interactivity
$(this).on('keyup', function (event) {

    document.querySelectorAll('#qwerty button').forEach( 
        button => {
                
            if( button.textContent === event.key ){
                game.handleInteraction(button);
            }

        });
});
