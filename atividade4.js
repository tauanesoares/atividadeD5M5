/*Leia quatro valores (n1, n2, n3, n4). 
A seguir, calcule e mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4.*/
const leia = require('readline-sync');

let numero1, numero2, numero3, numero4, calculo

//entrada
numero1 = leia.questionFloat('numero1:')
numero2 = leia.questionFloat('numero2:')
numero3 = leia.questionFloat('numero3:')
numero4 = leia.questionFloat('numero4:')

//processamento
calculo=  (numero1 * numero2) - (numero3 * numero4)

//saida
console.log("Diferença:" + calculo.toFixed(1));