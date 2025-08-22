/*Elabore um algoritmo em JavaScript que leia 4 notas de um participante, 
exiba na tela a média final do participante.*/
const leia = require('readline-sync');

let nota1, nota2, nota3, nota4, media

//entrada
nota1 = leia.questionFloat('Nota 1:')
nota2 = leia.questionFloat('Nota 2:')
nota3 = leia.questionFloat('Nota 3:')
nota4 = leia.questionFloat('Nota 4:')

//processamento
media= (nota1 + nota2 + nota3 + nota4) / 4

//saida
console.log("média final:" + media.toFixed(2));
