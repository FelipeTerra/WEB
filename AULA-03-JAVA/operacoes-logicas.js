var c = true;
console.log('Tipo da variável c: ', typeof(c));

var b = [];
//== expressão de igualdade, faz a verificação se os elementos são iguais.
b[0] = 1 == 1; // verdadeiro, se x igual a y
b[1] = 2 == 1; // verdadeiro, se x igual a y

//!= expressão de diferença, faz a verificação se os elementos são diferentes.
b[2] = 1 != 1; // verdadeiro, se x diferente a y
b[3] = 2 != 1; // verdadeiro, se x diferente a y

//!= expressão de menor.
b[4] = 1 < 2; // verdadeiro, se x menor a y
b[5] = 2 < 1; // verdadeiro, se x menor a y

//!= expressão de maior.
b[6] = 1 > 2; // verdadeiro, se x menor a y
b[7] = 2 > 1; // verdadeiro, se x menor a y

//!= expressão de menor igual.
b[8] = 1 <= 2; // verdadeiro, se x menor igual a y
b[9] = 1 <= 1; // verdadeiro, se x menor igual a y

//!= expressão de maior igual.
b[10] = 1 >= 2; // verdadeiro, se x menor igual a y
b[11] = 2 >= 1; // verdadeiro, se x menor igual a y

console.log('Na posição 0: ', b[0]);
console.log('Na posição 1: ', b[1]);
console.log('Na posição 2: ', b[2]);
console.log('Na posição 3: ', b[3]);
console.log('Na posição 4: ', b[4]);
console.log('Na posição 5: ', b[5]);
console.log('Na posição 6: ', b[6]);
console.log('Na posição 7: ', b[7]);
console.log('Na posição 8: ', b[8]);
console.log('Na posição 9: ', b[9]);
console.log('Na posição 10: ', b[10]);
console.log('Na posição 11: ', b[11]);



