console.log('Hello JS World!');

// Para declaração de variáveis em JavaScript não é necessário informar o tipo da mesma.

// A diferença entre a declaração de variáveis por VAR e LET é:
// Var tem escopo de bloco
// Let tem escopo de função

var a; // escopo de bloco
var b = '4';
let e; // escopo de função
let f = 'Ola';

console.log('O valor de a é: ' + a);
console.log('O valor de a é: ' + b);
console.log('O valor de a é: ' + e);
console.log('O valor de a é: ' + f);

// exemplos escopo de bloco e de função

// escopo de bloco:
// if (true){
//     var x = 1000;
// }
// console.log('O Valor de X: ', x);

// escopo de função:
function teste() {
    let w = 1000;
}
teste();
console.log('O valor de W: ', w);




