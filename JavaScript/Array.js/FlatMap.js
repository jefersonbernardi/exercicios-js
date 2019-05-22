const text = [
    'This is Sparta!',
    'Novo teste 2019',
    'Separando letras'
]


const word = text.flatMap(phrase =>{
    const phraseWords = phrase.split(' ')
    return phraseWords
})

console.log(word)