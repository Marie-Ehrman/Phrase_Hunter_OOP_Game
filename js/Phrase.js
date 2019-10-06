/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

    constructor(phrase){

        this.phrase = phrase.toLowerCase();
    }


    /**??
     * make phrase into an arrya, read in each letter of the phrase
     * create template literal that uses the ${phraseLetter} variable to create
     * <li>'s 
     * if it is white space create the <li class="space"> </li> line instead
     * 
                        * <div id="phrase" class="section">
                        <ul>
                            <li class="hide letter h">h</li>
                            <li class="hide letter o">o</li>
                            <li class="hide letter w">w</li>
                            <li class="space"> </li>
                            <li class="hide letter a">a</li>
                            <li class="hide letter r">r</li>
                            <li class="hide letter e">e</li>
                            <li class="space"> </li>
                            <li class="hide letter y">y</li>
                            <li class="hide letter o">o</li>
                            <li class="hide letter u">u</li>
                        </ul>
                    </div>

     ??*/

     /**
      * Creates box elements to display a spot for each letter of the phrase
      * on screen.
      **/
    
    addPhraseToDisplay(){
        
        // const lettersDiv = document.querySelector('div ul');
        const phraseString = this.phrase.split();

        phraseString.forEach( function(letter) {console.log(letter)} );

            // if( letter !== ' '){
            //     lettersDiv.appendChild(`<li class='hide letter${letter}>${letter}</li>`);
            // } else {
            //     lettersDiv.appendChild(`<li class="space"> </li>`);
            // }
            

    }


    /**
     *  checks to see if the letter selected by the player matches
     *  a letter in the phrase.
     **/

    checkLetter(){



    }


    /**
     *  reveals the letter on the board that matches the player's selection 
     **/

    showMatchedLetter(){



    }

 }