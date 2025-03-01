// Comentário de uma linha

/*
Comentário
em
bloco
*/

// Variáveis
const nome = "Ricardo"
let idade = 35
const maiorDeIdade = true

console.log(nome)
console.log(idade)
console.log("É maior de idade?", maiorDeIdade)

// nome = "Teste"
idade = 19
console.log(idade)

// Operadores Aritméticos
const soma = 2 + 2
const subtracao = 2 - 2
const multiplicacao = 2 * 2
const divisao = 4 / 2

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)

const resto = 3 % 2
let numero = 4
console.log("RESTO ->", resto)

const incremento = numero++
console.log("INCREMENTO ->", incremento)

const decremento = numero--
console.log("DECREMENTO ->", decremento)

// Faz a operação e a atribuição logo em seguida
let a = 3
a %= 2
console.log(a)

// Operadores de Comparação
const igual = 10 == '10'
console.log(igual)
const estritamenteIgual = 10 === '10'
console.log(estritamenteIgual)

const maior = 3 > 2 // true
const menor = 2 < 3 // false
const maiorOuIgual = 3 >= 2 // true
const menorOuIgual = 2 <= 3 // false

idade = 10

// Estruturas de controle
if (idade >= 18) {
    console.log("Maior de Idade")
} 

if (idade >= 18) {
    console.log("Maior de Idade")
} else {
    console.log("Menor de Idade")
}

if (idade >= 18) {
    console.log("Maior de Idade")
} else if(idade < 18) {
    console.log("Menor de Idade")
} else {
    console.log("Valor inválido!")
}


// Operador ternário
const checkMaiorDeIdade = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(checkMaiorDeIdade)