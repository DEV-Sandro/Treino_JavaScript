var input = require('fs').readFileSync('stdin', 'utf8');
var linhas = input.split("\n");

var [idItem1, qtdItem1, valorItem1] = linhas.shift().split(" ");
var [idItem2, qtdItem2, valorItem2] = linhas.shift().split(" ");

var totalItem1 = qtdItem1 * valorItem1

var totalItem2 = qtdItem2 * valorItem2

var valortotal = totalItem1 + totalItem2

console.log("VALOR A PAGAR: R$ " + valortotal.toFixed(2));
