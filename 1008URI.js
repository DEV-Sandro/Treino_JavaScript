var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n");

var Num = parseInt(valores.shift());
var hora = parseInt(valores.shift());
var valor = parseFloat(valores.shift()).toFixed(2);
var salario = (hora*valor);

console.log("NUMBER = " + Num);
console.log("SALARY = U$ " + salario.toFixed(2));



