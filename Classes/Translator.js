const fileSystem = require('fs');
const readline = require('readline');  

const Dictionary = require('./Dictionary')
const LinkedList = require('./LinkedList')
const AVL = require('./AVL')

/**
 * This class will do the magic of translation
 * @params { AVL } dictionaryTree
 */
class Translator {

    constructor () {
        this.avl = new AVL();
    }

    /**
     * Load the file dicionario.dat
     * @param { String } file 
     */
    loadDictionary(path) {
        const readInterface = readline.createInterface({  
            input: fileSystem.createReadStream(path),
        });
        
        readInterface.on('line', (line) => {
            const words = line.split('#');
            const linkedList = new LinkedList();

            for (let i = 1; i < words.length; i++) {
                linkedList.insertAtEnd(words[i]);
            }

            const dictionary = new Dictionary(words[0],linkedList);
            this.avl.insert({dictionary})
        });
    }

    /**
     * Translates the word from english to portuguese
     * @param { String } word 
     */
    translateWord(word) {
        const definitions = this.avl.findDefinitionsByWord(word);
        if(definitions){
            console.log("Traduções: {")
            for (let i = 0; i < definitions.getListSize; i++) {
                console.log("  " + i + " - " + definitions.getAt(i).data)
            }
            console.log("}")
        }
    }

    /**
     * Insert a new dictionary in the AVL tree. 
     * @param { String } word 
     * @param { LinkedList } definitions 
     */
    insertTranslation(word, definitions) {
        const dictionary = new Dictionary(word, definitions);
        this.avl.insert({dictionary})
    }

    /**
     * Saves the AVL tree to the file
     * @param { String } file 
     */
    saveDictionary(file) {

    }
}

module.exports = Translator