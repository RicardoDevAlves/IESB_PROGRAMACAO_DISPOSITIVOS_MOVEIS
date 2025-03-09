// Estruturas de Controle
// Crie um script que receba uma idade e verifique se a pessoa é:

// 1. Menor de idade.
// 2. Maior de idade.
// 3. Idosa (idade >= 65).

let idade = 70;

if (idade < 18) {
    console.log("Menor de idade.")
}else if (idade >= 18 && idade < 65) {
    console.log("Maior de idade.")
} else {
    console.log("Pessoa já idosa!")
}