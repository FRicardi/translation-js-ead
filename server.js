/**
 * Quick guide to readline for the next steps on the project
 */
// var rl = require('readline-sync');
// Asking the user for a word
// var word = rl.question('Type a word !\n');
// Showing the word
// console.log('The word you choose was: ' + word + '!\n');

const AVL = require('./Classes/AVL')

const avl = new AVL();

avl.insert({ word: 'Chair' })
avl.insert({ word: 'Art' })
avl.insert({ word: 'Docker' })
avl.insert({ word: 'Basketball' })
avl.insert({ word: 'Ethics' })
avl.insert({ word: 'Flamengo' })
avl.insert({ word: '1' })
avl.insert({ word: '5' })

avl.readInOrder()

const height = avl.height;

console.log({ height })