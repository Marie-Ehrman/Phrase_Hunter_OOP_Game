/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase){

        this.phrase = phrase.toLowerCase();
    }


     /**
      * Creates box elements to display a spot for each letter of the phrase
      * on screen.
      **/
    
    addPhraseToDisplay(){
        
        const lettersUL = document.querySelector('#phrase ul');

        //step through words of phrase
        [this.phrase].forEach( function(word) {

            //step through letters of words
            word.split('').forEach(letter => {
 
                if ( letter !== " "){

                    //create li for each letter and set class & text then append to ul
                    const letterLI = document.createElement(`li`);
                    letterLI.className = `hide letter ${letter}`;
                    letterLI.textContent = letter;
                    lettersUL.appendChild(letterLI); 

                } else {

                    //if the letter is equal to a space the "space" class is applied
                    const spaceLI = document.createElement(`li`);
                    spaceLI.className = `space`;
                    lettersUL.appendChild(spaceLI);
                }     
            });
        });
    }


    /**
     *  checks to see if the letter selected by the player matches
     *  a letter in the phrase.
     * @param (string) letter
     **/

    checkLetter(letter){

            return this.phrase.includes(letter);

    }


    /**
     *  reveals the letter on the board that matches the player's selection 
     * @param (string) letter
     **/

    showMatchedLetter(letter){

            document.querySelectorAll(`.${letter}`)
            .forEach( element => 
                element.className = `show letter ${letter}`);
            
    }







}