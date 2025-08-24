const leia = require('readline-sync');

//entrada
salarioBruto = leia.questionFloat('Salario bruto:')
adicionalNoturno = leia.questionFloat('Adicional noturno:')
horasExtras = leia.questionFloat('Horas Extras:')
descontos = leia.questionFloat('Descontos:')

//processamento
salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

//saida
console.log("Salário liquido:" + salarioLiquido.toFixed(2));