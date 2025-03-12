// Módulos ES6 importando...
import {TabelaIMC, calcularIMC} from "./CalculadoraIMC.js"

console.log("Calculo do IMC")

console.log(">>> TABELA DO IMC <<<")
console.table(TabelaIMC)

const peso = 80
const altura = 1.70

const resultado = calcularIMC(peso, altura)

console.log("Resultado do IMC")
console.log(`IMC: ${resultado.toFixed(2)}`)

// Importando e usando lib moment
import moment from "moment"

const hoje = moment().locale('pt-br')

console.log("Hoje é: ")
console.log(hoje.format('DD/MM/yyyy'))
