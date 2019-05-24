/**
 * Quick guide to readline for the next steps on the project
 */
var rl = require('readline-sync')
// Asking the user for a word
// Showing the word
// console.log('The word you choose was: ' + word + '!\n')


// Aqui nós fazemos a importação das classes
const LinkedList = require('./Classes/LinkedList')
const Translator = require('./Classes/Translator')

// Aqui nós fazemos a instanciação do Translator
const translator = new Translator();

// A operação de dar load no dicionário é assincrona então esperamos
// Depois do load executamos a função main
translator.loadDictionary('./Database/dicionario.dat').then(() => {
    main()
})

// Aqui começa o programa, chamando a função de traduzir a
function main() {
    console.log('Howdy Sheriff! Are you ready to know how to speak english?')
    console.log("        ___                ")
    console.log("     __|___|__             ")
    console.log("      ('o_o')              ")
    console.log("      _\\~-~/_    ______.  ")
    console.log("     //\\__/\\ \\ ~(_]---' ")
    console.log("    / )O  O( .\\/_)        ")
    console.log("    \\ \\    / \\_/        ")
    console.log("    )/_|  |_\\             ")
    console.log("   \/\/ /(\\/)\ \\         ")
    console.log("   /_/      \_\\           ")
    console.log("  (_||      ||_)           ")
    console.log("    \\| |__| |/            ")
    console.log("     | |  | |              ")
    console.log("     | |  | |              ")
    console.log("     |_|  |_|              ")
    console.log("     /_\\  /_\\            ")
    translateWord()
}

// Aqui fazemos a pergunta de qual palavra o usuário deseja traduzir
// Se ele da uma resposta que temos no .dat respondemos com as correspondentes
// Caso não, pedimos para ele inserir ou traduzir outra palavra
function translateWord() {
    var word = rl.question('Type the word you wish to translate:\n')
    translator.translateWord(word.toLowerCase())
    .then(() => {
        console.log('What you want to do next?')
        console.log(`1 - Translate another word`)
        console.log(`2 - Exit`)
        const prompt = rl.question('')
        switch (parseInt(prompt)) {
            case 1: 
                translateWord()
                break
            default: 
                exit()
        }
    })
    .catch(() => {
        console.log('What you want to do next?')
        console.log(`1 - Add definitions for '${word}'`)
        console.log(`2 - Translate another word`)
        console.log(`3 - Exit`)
        const prompt = rl.question('')
        switch (parseInt(prompt)) {
            case 1: 
                addWordToDictionary(word)
                break
            case 2:
                translateWord()
                break
            default: 
                exit()
        }
    })
}

// Adiciona a palavra pra o dicionário e pergunta oq fará depois
async function addWordToDictionary(word) {
    const definitions = await setDefinitions(word)

    translator.insertTranslation(word, definitions)

    console.log('Word and definitions inserted to dictionary')

    console.log('What you want to do next?')
    console.log(`1 - Translate another word`)
    console.log(`2 - Exit`)
    const prompt = rl.question('')
    switch (parseInt(prompt)) {
        case 1: 
            translateWord()
            break
        default: 
            exit()
            
    }
}

function exit() {
    const prompt = rl.question('You want to save the new dictionary?(y/N)\n')
    
    if (prompt.toLowerCase() === 'y') {
        translator.saveDictionary()
    } 

}

// Aqui você insere as definições da palavra até não ter mais nenhuma para sugerir
function setDefinitions(word) {

    return new Promise((resolve) => {
        const definitions = new LinkedList()
        
        let keep = false
        do {
            let definition = rl.question(`Type a definition for '${word}':\n`)
            definitions.insertAtEnd(definition)
            let more = rl.question('You want to add more definitions? (y/N)\n')
            if (more.toLowerCase() === 'y') {
                keep = true
            } else {
                keep = false
            }
        } while (keep)
        
        resolve(definitions)
    })

}
