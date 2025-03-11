// Arrays
// Crie um script que receba um array de números e faça as seguintes operações:
// 1. Adicione um número ao final do array.
// 2. Remova o primeiro número do array.
// 3. Encontre o maior número do array.
// 4. Encontre o menor número do array.
// Utilize o array [10, 20, 30, 40, 50] para os testes.

listaNumeros = [10, 20, 30, 40, 50]

listaNumeros.push(99)
console.log("Adicionando o número "+listaNumeros[5]+ " ao array...")
console.log(listaNumeros)

console.log("Removendo o primeiro número do array...")
listaNumeros.shift()
console.log(listaNumeros)

let numeroMaior = listaNumeros[0];
console.log("O número maior inicializado dentro da variável numeroMaior é: "+numeroMaior)

console.log("TAMANHO DO ARRAY: "+listaNumeros.length)

for (i = 1; i < listaNumeros.length; i++) {
    if (listaNumeros[i] > numeroMaior) {
        numeroMaior = listaNumeros[i]
    }
}
console.log("O maior número é: "+numeroMaior)

let numeroMenor = listaNumeros[0];

for (let i = 1; i < listaNumeros.length; i++) {
    if (listaNumeros[i] < numeroMenor) {
        numeroMenor = listaNumeros[i]
    }
}
console.log("O número menor é: "+numeroMenor)