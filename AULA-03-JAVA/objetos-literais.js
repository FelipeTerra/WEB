// Objetos Literais

var cliente = {
    nome:     'Felipe Terra',
    telefone: '6699986-8157',
    idade:     28,
    cidade:    'Rondonópolis'
};

console.log(cliente);
console.log();

console.log('nome: ',     cliente.nome);
console.log('telefone: ', cliente.telefone);
console.log('idade: ',    cliente.idade);
console.log('cidade: ',   cliente.cidade);
console.log();

// alterando informações no objeto
cliente.nome = 'Amanda Sampaio';
console.log('nome: ',     cliente.nome);
console.log();

//criando atributos sob demanda
console.log('Objeto antes de alterar: ' , cliente);//antes de alterar
console.log();

cliente.pais = 'Brasil'; // está adicionando um atribuno neste objeto

console.log('Objeto depois de alterar: ' , cliente);//depois de alterar
console.log();

// Outra maneira de acessar as propriedades
console.log('Acessanto propriedades como íncides de Array')
console.log('nome: ',     cliente['nome']);
console.log('telefone: ', cliente['telefone']);
console.log('idade: ',    cliente['idade']);
console.log('cidade: ',   cliente['cidade']);
console.log('Pais: ',     cliente['pais']);
console.log();

// Criando Array de Objetos
var clientes = [                              //aqui estamos criando o array que terá os objetos
    {nome: 'Felipe', cidade: 'Cuiabá'},       //aqui estamos criando os objetos
    {nome: 'Amanda', cidade: 'Rondonópolis'}, //aqui estamos criando os objetos
    {nome: 'Vinicius', cidade: 'Cuiabá'},     //aqui estamos criando os objetos
    {nome: 'Renan', cidade: 'Rondonópolis'},  //aqui estamos criando os objetos
];

console.log(clientes);
console.log();

// trabalhando com a posição do objeto dentro do array e imprimindo suas propriedades
console.log(clientes[0].nome + ' - ' + clientes[0].cidade);
console.log(clientes[1].nome + ' - ' + clientes[1].cidade);
console.log(clientes[2].nome + ' - ' + clientes[2].cidade);
console.log(clientes[3].nome + ' - ' + clientes[3].cidade);