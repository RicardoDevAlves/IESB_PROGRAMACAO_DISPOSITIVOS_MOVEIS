//Manipulação de Strings
// Crie um script que receba uma string e faça as seguintes operações:
// converta uma string minúscula para maiúscula.

let frase = "Um dia saberemos de toda a verdade."

let fraseMaiuscula = frase.toUpperCase()
console.log(fraseMaiuscula)

// convertendo uma string maiúscula para minúscula:

let fraseMinuscula = frase.toLowerCase()
console.log(fraseMinuscula)

// invertendo a string
let fraseInvertida = frase.split('').reverse().join('');
console.log(fraseInvertida)

// substituindo todas as ocorrências de uma letra específica por outra
let trocarLetra = frase.replace(/a/g, 'u')
console.log(trocarLetra)