// Trabalhando com arrays
var computador = ['Memória' , 'Disco' , 'Placa Mãe' , 'Processador']; //em Js não existe a necessidade de definir o tipo do array e nem o tipo das informações contidas nele
console.log(computador); //imprime todo o array
console.log(computador[0]); //imprime o primeiro índice
console.log(computador[1]); //imprime o segundo índice
console.log(computador[2]); //imprime o terceiro índice
console.log(computador[3]); //imprime o quarto índice

// como colocar valores em um array existente
var v = [];
v.push(10);
v.push(20);
v.push(60);
v.push(90);
v.push(40);
v.push(70);
console.log(v);

// como retirar valores em um array existente - pop retira pela última posição
console.log('Pop: ', v.pop(), v);
console.log('Pop: ', v.pop(), v);
console.log('Pop: ', v.pop(), v);
console.log('Pop: ', v.pop(), v);
console.log('Pop: ', v.pop(), v);