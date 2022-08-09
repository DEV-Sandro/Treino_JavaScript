var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n");

var nome = String(valores.shift());
var SalarioFIXO = parseFloat(valores.shift());
var vendas = parseFloat(valores.shift());
var porcetagem = vendas * (0.15);
var recebido = (SalarioFIXO+porcetagem);

console.log("TOTAL = R$ " + recebido.toFixed(2));
