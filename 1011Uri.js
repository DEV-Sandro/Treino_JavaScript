const { match } = require('assert');

var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split("\n");

var PI = 3.14159
var R = parseFloat(valores.shift())
var R = Math.pow(R, 3)
var F = 4/3
var volume = PI * F * R

console.log("VOLUME = " + volume.toFixed(3));