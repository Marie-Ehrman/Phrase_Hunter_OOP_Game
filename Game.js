/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {

    constructor(){

        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = 'null';

    }


    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases(){

            const phrases = [ 
                new Phrase(`Be Here Now`),
                new Phrase(`Celebrate all Success`), 
                new Phrase(`Communicate with Clarity`),
                new Phrase(`Emotions Create Relatability`),
                new Phrase (`Health is Wealth`),
                new Phrase (`Love Your Fate`),
                new Phrase(`Practice makes Permanent`)
            ];
        
            return phrases;
    }

    
    /**
     * hides start screen, gets random phrase, sets activePhrase to the phrase
     * and adds phrase to the board in the form of blank boxes
     */
    startGame(){


            //get rid of the Start screen overlay
            document.getElementById('overlay').style.display = 'none';
            
            //retrieve a random phrase
            this.activePhrase = this.getRandomPhrase();
            //add phrase to the screen
            this.activePhrase.addPhraseToDisplay();


    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase(){

            const random = Math.floor((Math.random() * this.phrases.length));
            return this.phrases[random];

    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button){

            button.disabled = true;

            if( !this.activePhrase.checkLetter(button.textContent) ) {
                    button.className = 'wrong';
                    game.removeLife();
            } else {
                    button.className = 'chosen';
                    this.activePhrase.showMatchedLetter(button.textContent);
                    if( this.checkForWin()){
                            this.gameOver(this.checkForWin);
                    }
            }


        
    }

    /**
     * removes a life from scoreboard, increase value of this.missed, and check if 
     * game is over or not depending on remaingin lives
     */
    removeLife(){

            //add one point to the missed counter
            this.missed ++;

            //select all heart images
            let hearts = document.querySelectorAll('img', 'src=images/liveHeart.png');
            
            hearts.forEach( img => 

                //for each img, for the heart in the current missed position set it to lost
                hearts[this.missed - 1]
                .setAttribute('src', 'images/lostHeart.png')
                
            );

            if ( this.missed === 5) {
                this.gameOver(false);
            }

    }


//     removeLife(){

//         //add one point to the missed counter
//         this.missed ++;

//         //select all heart images
//         const $hearts = $('.tries img');
//         console.log($hearts);
        
//         let $lostHeart = $hearts.eq(this.missed - 1);
//         console.log($lostHeart);

//                 //for each img, for the heart in the current missed position set it to lost
//                 $lostHeart.slideUp(1000);
//                 $lostHeart.attr('src', 'images/lostHeart.png');

//         if ( this.missed === 5) {
//             this.gameOver(false);
//         }

//      }


    /**
     * Checks for winning move
     * @return {boolean} True if game is won, false if game wasn't won
     */
    checkForWin(){

            if (document.querySelectorAll('.hide').length !== 0) { 
                return false; 
            } else { 
                return true;
            }  
    }

    /**
     * displays start screen overlay and lets player know they won or lost
     * @param {boolean}  gameWon - whether or not user won or lost
     */
    gameOver(gameWon){

        //select DOM elements
        const gameOverMSG = document.getElementById('game-over-message');
        const overlay = document.getElementById('overlay');

        //if game won is true, create a win message overlay
        if (gameWon){
        
            overlay.className = 'win';
            overlay.style.display = 'block';
            gameOverMSG.textContent = `Awesome job! Want to play again?`;
           
        //if game is lost, create a lose message overlay
        } else {

            overlay.className = 'lose';
            overlay.style.display = 'block';
            gameOverMSG.textContent = `Sorry, better luck next time! Want to play again?`;


        }

    }
    
}