let valor; // não inicializada sem atribuição

console.log(valor);
// console.log(valor2); /// não esta declarado

valor = null; /// ausência de valor
// console.log(valor.toString()); // Tentar acessar o nulo dá erro

const produto = {};
console.log(produto.preco); /// esta definido o preço no produto
console.log(produto);

produto.preco = 3.5;
console.log(produto.preco);
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco;
console.log(produto);

produto.preco = null; /// sem preço
console.log(!!produto.preco);

console.log(produto);
