const leia = require('readline-sync');

//entrada
salario = leia.questionFloat('Digite o salario:')
abono = leia.questionFloat('Digite o abono:')

//processamento
novoSalario = salario + abono

//saida
console.log("Novo Salário:" + novoSalario.toFixed(2));