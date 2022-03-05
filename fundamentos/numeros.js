const peso1 = 1.0; /// Variavel numerica
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // Verifica se é inter
console.log(Number.isInteger(peso2)); // Number é uma função

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //// verifica a quantidade de casas decimais
console.log(media.toString()); /// Converter Valor de Numero para String
console.log(media.toString(2)); // Converte valor flutuante em binario
console.log(typeof media);
console.log(typeof Number);
