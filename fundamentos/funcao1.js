//// função com entrada e sem saida
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3); /// melhor maneira

imprimirSoma(2); /// Não gera erro retorna NaN

imprimirSoma(2, 3, 4, 5, 6, 7); // Não gera erro ignora outros atributos

/// Função com entrada e saida
function soma(a, b = 0) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
