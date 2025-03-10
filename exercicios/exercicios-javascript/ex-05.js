// Funções
// Crie um script que tenha uma função que receba um número e retorne:
// 1. O dobro do número.
// 2. O triplo do número.
// 3. O quadrado do número.
// Utilize o número 5 para os testes.

function dobro(numero) {
    let resultado = numero * 2
    console.log("O dobro de "+numero+ " é "+resultado)
}
dobro(5)

function triplo(numero) {
    let resultado = numero * 3
    console.log("O triplo de " +numero+ " é "+resultado)
}
triplo(5)

function quadrado(numero) {
    let resultado = numero ** 2
    console.log("O quadrado de "+numero+" é "+resultado)
}
quadrado(5)