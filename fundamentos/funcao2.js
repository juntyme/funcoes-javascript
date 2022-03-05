// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);

// armazenando uma funcao arraw em uma variavel
const soma = (a, b) => {
  return a + b;
};

console.log(soma(2, 3));

/// retorno implicito em uma unica linha retoran o valor
const subtracao = (a, b) => a - b; // Função unica linha
console.log(subtracao(2, 3));

const imprimir2 = (a) => console.log(a);
imprimir2("Legal !!!");
