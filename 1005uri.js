var input = require('fs').readFileSync("stdin" , "utf-8");

var valores = input.split("\n");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var pesoA = A * 35
var pesoB = B * 75
var media = ( pesoA + pesoB)/(35+75)

console.log("MEDIA = " + media.toFixed(5));