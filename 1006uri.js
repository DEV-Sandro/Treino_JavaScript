var input = require('fs').readFileSync("stdin" , "utf-8");

var valores = input.split("\n");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());
var pesoA = A * 2;
var pesoB = B * 3;
var pesoC = C * 5;
var media = ( pesoA + pesoB + pesoC)/(2+3+5);

console.log("MEDIA = " + media.toFixed(1));