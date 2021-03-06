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
        return new Promise((resolve, reject) => {
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
                console.log('Loading words...')
                this.avl.insert({dictionary})
            }).on('close', function() {
                console.log('Finished loading.')
                resolve()
            });
        })
    }

    /**
     * Translates the word from english to portuguese
     * @param { String } word 
     */
    translateWord(word) {
        return new Promise(async (resolve, reject) => {
            console.log(`Translating '${word}'`)
            const definitions = await this.avl.findDefinitionsByWord(word)
            if(definitions){
                console.log(`Translations for '${word}':`)
                for (let i = 0; i < definitions.getListSize; i++) {
                    console.log("  " + i + " - " + definitions.getAt(i).data)
                }
                resolve()
            } else {
                console.log(`Couldn't find any translations for ${word}.`)
                reject()
            }
        })
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
     * Saves the AVL tree to the dictionary
     *
     */
    saveDictionary() {
        fileSystem.writeFile('./Database/dicionario.dat', this.avl.getText, function (err) {
            if (err) throw err;
            console.log('File saved! Hope to see you soon!');
        }); 
    }
}

module.exports = Translator