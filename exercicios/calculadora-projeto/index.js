import {somar, subtrair, multiplicar, dividir} from "./calculadora.js"

console.log("Soma: ", somar(10, 5));
console.log("Subtração: ", subtrair(10, 5));
console.log("Multiplicação: ", multiplicar(10, 5));
console.log("Divisão: ", dividir(10, 5));


import moment from 'moment';

function calcularIdade(anoNascimento) {
    // Obtém o ano atual
    const anoAtual = moment().year();
    
    // Calcula a idade
    return anoAtual - anoNascimento;
}

const anoNascimento = 1990;
const idade = calcularIdade(anoNascimento);
console.log(`Idade: ${idade} anos`);
