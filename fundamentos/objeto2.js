console.log(typeof Object);
console.log(typeof new Object());

/// Instancia de função propria
const Cliente = function () {}; /// Função
console.log(typeof Cliente);
console.log(typeof new Cliente());

class Produto {} //ES 2015 (ES) criar uma classe internament cria uma função
console.log(typeof Produto); /// retorna função
console.log(typeof new Produto()); /// retorna objeto
