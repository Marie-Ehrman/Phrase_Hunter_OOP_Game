/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



//style the sheet
//DOC
$('*').css('font-family', 'Georgia');
//Start screen Overlay
$('#overlay').css('background-color', '#f0e3fa');
$('#overlay').css('background-color', '#f0e3fa');
//Body
$('body').css('background-color', '#d1bed1');
//Game Header
$('.header').css('color','#e0fffd');




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

$(this).on('keyup', function (event) {

    document.querySelectorAll('#qwerty button').forEach( 
        button => {
                
            if( button.textContent === event.key ){
                game.handleInteraction(button);
            }

        });
});
