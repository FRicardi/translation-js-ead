/**
 * Attributes:
 * @param { String } word A word in english
 * @param { List } definitions A list that will store portuguese translations of the word
 */
class Dictionary {

    /**
     * Instatiate class Dictionary initial values
     * @param { String } word 
     * @param { List } definitions 
     */
    constructor (word, definitions) {
        this.setWord(word);
        this.setDefinitions(definitions);
    }

    /**
     * Returns the word
     */
    get getWord() {
        return this.word;
    }

    /**
     * Set a new value to word
     * @param { String } word
     */
    set setWord(word) {
        this.word = word;
    }

    /**
     * Return the definitions
     */
    get getDefinitions() {
        return this.definitions;
    }

    /**
     * Set new definitions
     * @param { List } definitions 
     */
    set setDefinitions(definitions) {
        this.definitions = definitions;
    }

}