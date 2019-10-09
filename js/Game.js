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

        const phrases = [ new Phrase(`Be Here Now`),
                          new Phrase(`Celebrate all Success`), 
                          new Phrase(`Communicate with Clarity`),
                          new Phrase(`Emotions Create Relatability`),
                          new Phrase (`Health is Wealth`),
                          new Phrase (`Love Your Fate`),
                          new Phrase(`Practice makes Permanent`)];
    
        return phrases;
    }

    
    /**
     * hides start screen, gets random phrase, sets activePhrase to the phrase
     * and adds phrase to the board in the form of blank boxes
     */
    startGame(){

        console.log('in start game');
        document.getElementById('overlay').style.display = 'none';
        
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
        this.activePhrase.addPhraseToDisplay();


    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase(){

        const random = Math.floor((Math.random() * this.phrases.length));
        // console.log(this.phrases[random]);
        return this.phrases[random];

    }

    /**
     * checks to see if button clicked matches a letter in the phrase 
     * then handles that guess based on its correctness and disables that letter
     * on the screen keyboard. if wrong remove a life
     */
    handleInteraction(){


    }

    /**
     * removes a life from scoreboard, increase value of this.missed, and check if 
     * game is over or not depending on remaingin lives
     */
    removeLife(){

        this.missed ++;

        let hearts = document.querySelectorAll('img', 'src=images/liveHeart.png');
        
        hearts.forEach( img => 

            hearts[this.missed - 1]
            .setAttribute('src', 'images/lostHeart.png')
            
        );

        if ( this.missed === 5) {
             this.gameOver(false);
        }

    }

    /**
     * Checks for winning move
     * @return {boolean} True if game is won, flase if game wasn't won
     */
    checkForWin(){

        console.log(document.getElementsByClassName('hide'));

        if(document.getElementsByClassName('hide').length !== 0)
        { return false; 
        }
        else { 
            return true;
        }  
    }

    /**
     * displays start screen overlay and lets player know they won or lost
     * @param {boolean}  gameWon - whether or not user won or lost
     */
    gameOver(gameWon){

        const gameOverMSG = document.getElementById('game-over-message');
        const overlay = document.getElementById('overlay');

        if (gameWon){
        
            overlay.className = 'win';
            overlay.style.display = 'block';
            gameOverMSG.textContent = `Awesome job! Want to play again?`;
           

        } else {

            overlay.className = 'lose';
            overlay.style.display = 'block';
            gameOverMSG.textContent = `Sorry, better luck next time! Want to play again?`;


        }

    }
    
}