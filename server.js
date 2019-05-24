/**
 * Quick guide to readline for the next steps on the project
 */
// var rl = require('readline-sync');
// Asking the user for a word
// var word = rl.question('Type a word !\n');
// Showing the word
// console.log('The word you choose was: ' + word + '!\n');

const LinkedList = require('./Classes/LinkedList')
const Translator = require('./Classes/Translator')

const translator = new Translator();

translator.loadDictionary('./Database/dicionario.dat').then(() => {
    main()
    // const linkedList = new LinkedList();
    // linkedList.insertAtEnd('água')
    
    // translator.insertTranslation('water', linkedList)
    
    // translator.translateWord('')
});


function main() {
    console.log('Ready to translate')
    translator.translateWord('asdsad')
}
