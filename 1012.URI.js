var input = require('fs').readFileSync('stdin', 'utf8');

var [A, B, C,] = valores.shift().split(" ")


var areaTriangulo = A * C / 2;
var areaCirculo =  3.14159 * Math.pow(C, 2);
var areaQuadrado = B * B
var areaRetangulo = (A * B) ;
var areaTrapezio = ((parseFloat(A) + parseFloat(B))* C)/2;


console.log("TRIANGULO: " + areaTriangulo.toFixed(3));
console.log("CIRCULO: " + areaCirculo.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3)); 
