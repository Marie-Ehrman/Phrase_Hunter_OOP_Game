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

        const phrases = [{phrase:`Be Here Now`},
                         {phrase:`Celebrate all Success`}, 
                         {phrase:`Communicate with Clarity`},
                         {phrase:`Emotions Create Relatability`},
                         {phrase:`Health is Wealth`},
                         {phrase:`Love Your Fate`},
                         {phrase:`Practice makes Permanent`}];
    
        return phrases;
    }

    
    /**
     * hides start screen, gets random phrase, sets activePhrase to the phrase
     * and adds phrase to the board in the form of blank boxes
     */
    startGame(){


    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase(){

        const random = Math.floor((Math.random() * this.phrases.length));
        const randomPhrase = new Phrase(this.phrases[random].phrase);
        console.log(randomPhrase.phrase.split(" "));
        return randomPhrase.phrase;

    }

    /**
     * checks to see if button clicked matches a letter in the phrase 
     * then handles that guess based on its correctness and disables that letter
     * on the screen keyboard. if wrong remove a life
     */
    handleInteraction(){


    }

    /**
     * removes a life from scoreboard
     */
    removeLife(){


    }

    /**
     * check to see if player has revealed all letters of the active phrase
     */
    checkForWin(){


    }

    /**
     * displays start screen overlay and lets player know they won or lost
     */
    gameOver(){


    }
    
}