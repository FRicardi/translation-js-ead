/**
 * Quick guide to readline for the next steps on the project
 */
var rl = require('readline-sync');
// Asking the user for a word
// Showing the word
// console.log('The word you choose was: ' + word + '!\n');

const LinkedList = require('./Classes/LinkedList')
const Translator = require('./Classes/Translator')

const translator = new Translator();

translator.loadDictionary('./Database/dicionario.dat').then(() => {
    main()
});


function main() {
    console.log('Ready.')
    translateWord()
}

function translateWord() {
    var word = rl.question('Type the word you wish to translate:\n');
    translator.translateWord(word.toLowerCase())
    .then(() => {
        console.log('What you want to do next?');
        console.log(`1 - Translate another word`);
        console.log(`2 - Exit`);
        const prompt = rl.question('');
    })
    .catch(() => {
        console.log('What you want to do next?');
        console.log(`1 - Add definitions for '${word}'`)
        console.log(`2 - Translate another word`)
        console.log(`3 - Exit`)
        const prompt = rl.question('');
        switch (parseInt(prompt)) {
            case 1: 
                addWordToDictionary(word)
                break;
            case 2:
                translateWord();
                break;
            default: 
                console.log('outros')
        }
    })
}

async function addWordToDictionary(word) {

    const definitions = await setDefinitions(word)

    translator.insertTranslation(word, definitions)

    console.log('Word and definitions inserted to dictionary')

    console.log('What you want to do next?');
    console.log(`1 - Translate another word`);
    console.log(`2 - Exit`);
    const prompt = rl.question('');
    switch (parseInt(prompt)) {
        case 1: 
            translateWord();
            break;
        default:
            console.log('outros')
    }
}

function setDefinitions(word) {

    return new Promise((resolve) => {
        const definitions = new LinkedList();
        
        var keep = false
        do {
            var definition = rl.question(`Type a definition for '${word}':\n`)
            definitions.insertAtEnd(definition)
            var more = rl.question('You want to add more definitions? (y/N)\n')
            if (more.toLowerCase() === 'y') {
                console.log('is')
                keep = true
            } else {
                keep = false
            }
        } while (keep)
        
        resolve(definitions)
    })

}
